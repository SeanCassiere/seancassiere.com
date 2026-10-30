# seancassiere.com

a simple website, built with [Astro](https://astro.build)

my thanks goes out to these people for the inspiration behind the design of this site:

- [Astro Cactus - Chris Williams](https://github.com/chrismwilliams/astro-theme-cactus)
- [nexxce.dev - Nexxel](https://www.nexxel.dev)

see [OGMarkup.md](OGMarkup.md) for information about customizing the open-graph images

## development

requires node.js 26 (see [`.nvmrc`](.nvmrc)) and pnpm 11.

```bash
nvm use # or `fnm use`
pnpm install
pnpm dev
```

the site is deployed to vercel, which reads the node.js major version from `engines.node` in [`package.json`](package.json).

`@astrojs/vercel` does not recognise node.js 26 yet ([withastro/astro#18555](https://github.com/withastro/astro/pull/18555)), so builds log a warning and the server-rendered routes keep running on vercel's node.js 24 runtime until the adapter is updated.
