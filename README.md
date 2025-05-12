# startale-checkout

Instant user onboarding, gasless purchases, and persistent sessions on Soneium Mainnet using Startale's Account Abstraction Toolkit.

## Installation

```bash
npm install startale-checkout
```

## Usage

Wrap your app with the session provider and use the checkout button:

```tsx
import React from 'react';
import { SessionProvider, ZeroFrictionCheckoutButton } from 'startale-checkout';

const App = () => (
  <SessionProvider>
    <h1>Shop</h1>
    <ZeroFrictionCheckoutButton amount="0.01" currency="ETH" />
  </SessionProvider>
);

export default App;
```

## Publishing

1. Build the package:

   ```bash
   npm run build
   ```

2. Login to npm (if not already):

   ```bash
   npm login
   ```

3. Publish the package:

   ```bash
   npm publish --access public
   ```

4. Tag a new version after publishing:

   ```bash
   npm version patch
   git push
   git push --tags
   ```

## Repository

https://github.com/sambitsargam/startale-checkout
