import { usePrivyAuth } from '@privy-io/privy-react';
import { useSessionContext } from '../SessionContext';

export function useSocialLogin() {
  const { sessionToken, setSessionToken } = useSessionContext();
  const { login, logout, user, loading } = usePrivyAuth();

  const socialLogin = async () => {
    const result = await login();
    if (result?.token) {
      setSessionToken(result.token);
    }
  };

  const socialLogout = async () => {
    await logout();
    setSessionToken(null);
  };

  return {
    login: socialLogin,
    logout: socialLogout,
    user,
    loading,
    sessionToken,
  };
}
