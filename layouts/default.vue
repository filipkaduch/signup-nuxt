<template>
  <MainDefaultLayout>
    <template #nav-bar>
      <BaseNavBar />
    </template>
    <template #content>
      <div>
        <slot v-if="loggedInUser" />

        <div
          v-else
          class="flex w-full items-center justify-center"
        >
          <BaseLoading id="default-page_loading" />
        </div>
      </div>
    </template>
  </MainDefaultLayout>
</template>

<script setup lang="ts">
import useAuthStore from '~/stores/AuthStore';
import useAuthentication from '~/composables/useAuthentication';

const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale,
  },
});

const { data } = useAuth();

const { replace } = useRouter();

const { logout } = useAuthentication();

const { setAuth } = useAuthStore();

const { user: loggedInUser } = storeToRefs(useAuthStore());

if (!data.value) {
  logout();
} else {
  const user = data.value;

  setAuth(user);
}

const refreshToken = useCookie('refresh-token').value;

onMounted(async () => {
  try {
    const refreshedResponse = await $api('/auth/staff/refresh', {
      method: 'POST',
      body: {
        refresh_token: refreshToken,
      },
    });

    setAuth(refreshedResponse);
  } catch {
    await logout();
  }
});
</script>
