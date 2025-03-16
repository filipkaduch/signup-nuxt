import { describe, test, expect } from 'vitest';
import useAuthStore from '~/stores/AuthStore';

const authSession = {
  id: 'id',
  access_token: 'mocked-access-token',
  refresh_token: 'mocked-refresh-token',
  user: { id: '1', email: 'email@example.com' },
};

describe('Mounts', () => {
  test('Store', () => {
    const store = useAuthStore();

    expect(store).toBeTruthy();
  });
});

describe('Base state', () => {
  test('Auth', () => {
    const { auth } = useAuthStore();

    expect(auth).toBeUndefined();
  });

  test('Access token', () => {
    const { accessToken } = useAuthStore();

    expect(accessToken).toBeUndefined();
  });

  test('Access token expiration', () => {
    const { accessTokenExpiration } = useAuthStore();

    expect(accessTokenExpiration).toBeFalsy();
  });

  test('Access token requires refresh', () => {
    const { accessTokenRequiresRefresh } = useAuthStore();

    expect(accessTokenRequiresRefresh).toBeFalsy();
  });

  test('User', () => {
    const { user } = useAuthStore();

    expect(user).toBeUndefined();
  });
});

describe('Actions', () => {
  test('Set auth', () => {
    const { setAuth } = useAuthStore();

    setAuth(authSession);

    const { auth } = useAuthStore();

    expect(auth).toStrictEqual(authSession);
  });
});
