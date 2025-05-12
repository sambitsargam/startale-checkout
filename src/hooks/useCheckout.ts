import { useState } from 'react';
import { useSessionContext } from '../SessionContext';
import { createPublicClient, http } from 'viem';
import { createBundlerClient, createPaymasterClient } from 'viem/account-abstraction';
import { soneiumMinato } from 'viem/chains';

const RPC_URL = 'https://soneium-minato.rpc.scs.startale.com';
const BUNDLER_URL = 'https://public.soneium-minato.bundler.scs.startale.com/';
const PAYMASTER_URL = 'https://public.paymaster.scs.startale.com/v1';

export function useCheckout() {
  const { sessionToken } = useSessionContext();
  const [loading, setLoading] = useState(false);

  const checkout = async ({ amount, currency }: { amount: string; currency?: string }) => {
    if (!sessionToken) throw new Error('No session. Please login first.');

    setLoading(true);
    try {
      const publicClient = createPublicClient({ transport: http(RPC_URL), chain: soneiumMinato });
      const bundlerClient = createBundlerClient({ client: publicClient, transport: http(BUNDLER_URL) });
      const paymasterClient = createPaymasterClient({ transport: http(PAYMASTER_URL) });

      const target = '0xYourRecipientAddress';
      const value = BigInt((parseFloat(amount) * 1e18).toString());
      const userOp = await bundlerClient.buildUserOperation({ target, value }, sessionToken);
      await paymasterClient.sendUserOperation(userOp);
    } finally {
      setLoading(false);
    }
  };

  return { checkout, loading };
}
