import React from 'react';
import { useSocialLogin } from './hooks/useSocialLogin';
import { useCheckout } from './hooks/useCheckout';

interface Props {
  amount: string;
  currency?: string;
}

export const ZeroFrictionCheckoutButton: React.FC<Props> = ({
  amount,
  currency = 'ETH',
}) => {
  const { login, user, loading: loginLoading } = useSocialLogin();
  const { checkout, loading: checkoutLoading } = useCheckout();

  const handleClick = async () => {
    if (!user) {
      await login();
    }
    await checkout({ amount, currency });
  };

  const busy = loginLoading || checkoutLoading;

  return (
    <button onClick={handleClick} disabled={busy}>
      {busy ? 'Processing…' : `Pay ${amount} ${currency}`}
    </button>
  );
};
