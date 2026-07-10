## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project

Static Astro 7 site. Deploys to Netlify. No adapter, no SSR.
Replacing a Hugo site at finleybatesmith.com. Never touch ../mysite.

## Owner context

Strong engineering fundamentals, zero web-stack knowledge, learning
this deliberately. Explain, don't just do.

## Hard rules

- Do not install React, Vue, Svelte, Tailwind, or any UI or CSS
  framework. Do not run `astro add` without asking first.
- Do not add a `client:*` directive. If you think one is needed, stop
  and state exactly what breaks without it.
- Plain `.astro` components. Plain CSS.
- For every piece of code, say whether it runs at build time in Node
  or in the browser.
- Name the source of every tool and error: Astro, Vite, Node, npm, Git.
- Never delete files or rewrite git history.
- Do not run `git commit`. Show me the diff; I commit.

## Working style

- Explain before editing. One file at a time.
- If I ask for something wrong or unnecessary, say so before doing it.
- Prefer telling me the exact edit over making it.