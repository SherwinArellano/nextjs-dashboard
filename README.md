## Next.js Dashboard App

This web application is used to learn about NextJS concepts.

## Eslint 9 and NextJS Migration Guide

During development, it didn't occur to me that my Eslint VSCode extension wasn't working. It wasn't until Vercel told me that my production build had errors and it was because there's an eslint error to resolve.

The problem was that there's a new eslint version 9 and there's something called _"flat configs"_ which is eslint's new config system.

To migrate, run:

```cmd
pnpm dlx @eslint/migrate-config .eslintrc.json
```

And run the following missing packages to install:

```cmd
pnpm install @eslint/js @eslint/eslintrc @next/eslint-plugin-next eslint-plugin-react-hooks -D
```

> If after installing the aforementioned packages, there are still errors, eslint will tell you anyway which packages are left to install.

Now it should work.
