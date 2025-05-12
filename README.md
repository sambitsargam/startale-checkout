# Startale Checkout

[![npm version](https://img.shields.io/npm/v/startale-oneclick-checkout)](https://www.npmjs.com/package/startale-oneclick-checkout) [![License](https://img.shields.io/npm/l/startale-oneclick-checkout)](LICENSE)

**Zero-Friction Checkout** provides instant social-login onboarding, gasless transactions, and persistent sessions on Soneium Mainnet, powered by Startale’s Account Abstraction Toolkit.

## 🚀 Features

- **Social Login** (Google, Discord, etc.) via Privy  
- **Smart Wallet Creation** (ERC-7579)  
- **Gasless Transactions** via Startale Paymaster (ERC-4337)  
- **Session Persistence** across devices  
- **Plug & Play** Checkout Button and Hooks  
- **Zero Configuration**: Public endpoints, no API keys

## 📦 Installation

```bash
npm install startale-oneclick-checkout
```

## 🎨 Usage

Wrap your application with the `SessionProvider`, then use the checkout button:

```tsx
import React from 'react';
import { SessionProvider, ZeroFrictionCheckoutButton } from 'startale-oneclick-checkout';

const App = () => (
  <SessionProvider>
    <h1>Your Shop</h1>
    <ZeroFrictionCheckoutButton amount="0.01" currency="ETH" />
  </SessionProvider>
);

export default App;
```

## 🔧 API Reference

### `SessionProvider`

Provides React context to manage session tokens.

```tsx
import { SessionProvider } from 'startale-oneclick-checkout';

<SessionProvider>{/* your app */}</SessionProvider>
```

### `ZeroFrictionCheckoutButton`

Props:

- `amount: string` (required)  
- `currency?: string` (default: `'ETH'`)

```tsx
<ZeroFrictionCheckoutButton amount="0.05" currency="ETH" />
```

### Hooks

- `useSocialLogin(): { login, logout, provider, address, authenticated, loading }`  
- `useCheckout(): { checkout({ amount, currency }), loading }`  
- `useSession(): { sessionToken, setSessionToken }`

## ❤️ License

MIT
