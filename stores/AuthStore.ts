import jwtDecode, { JwtPayload } from 'jwt-decode';
import { defineStore } from 'pinia';
import { add, fromUnixTime, isBefore } from 'date-fns';
import type { Session } from '~/types/next-auth';
import useAuthentication from '~/composables/useAuthentication';

const useAuthStore = defineStore('authStore', () => {
  const auth = ref<Session>();

  const { $api } = useNuxtApp();

  const accessToken = computed(() => auth.value?.access_token);

  const accessTokenExpiration = computed(() => {
    if (!auth.value?.access_token) return false;

    const { exp }: JwtPayload = jwtDecode(auth.value.access_token);

    return exp ? fromUnixTime(exp) : null;
  });

  const accessTokenRequiresRefresh = computed(() => {
    if (!accessTokenExpiration.value) return false;

    const futureExpiration = add(new Date(), { minutes: 15 });

    const tokenWillExpire = isBefore(accessTokenExpiration.value, futureExpiration);

    return tokenWillExpire;
  });

  const user = computed(() => auth.value?.staff);

  const setAuth = (val: Session) => {
    auth.value = val;
  };

  const terminateAuth = async () => {
    const { logout } = useAuthentication();

    await logout();
  };

  const accessTokenCookie = useCookie('access-token');

  const refreshAuth = async () => {
    const { signIn } = useAuth();

    const refreshTokenCookie = useCookie('refresh-token');

    try {
      const response = await $api(`/auth/staff/refresh`, {
        method: 'POST',
        body: {
          refresh_token: refreshTokenCookie.value,
        },
      });

      accessTokenCookie.value = response?.access_token;

      refreshTokenCookie.value = response?.refresh_token;

      setAuth(response);

      await signIn('credentials', {
        callbackUrl: '',
        credentials: JSON.stringify(response),
        redirect: false,
      });
    } catch (error) {
      await terminateAuth();
    }
  };

  const { idle } = useIdle(15 * 1000);

  const focus = useWindowFocus();

  watch([idle, focus], async (isIdle) => {
    if (!accessTokenCookie.value && user.value) {
      await terminateAuth();

      return;
    }

    if (isIdle) return;

    if (accessTokenRequiresRefresh.value) {
      await refreshAuth();
    }
  });

  return {
    auth,
    accessToken,
    accessTokenExpiration,
    accessTokenRequiresRefresh,
    refreshAuth,
    setAuth,
    user,
  };
});

export default useAuthStore;
