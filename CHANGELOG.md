# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.4.2](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.4.1...v0.4.2) (2021-12-13)


### Features

* vite 2.7 plugin api compatibility ([1ef7266](https://github.com/nubolab-ffwd/svelte-fluent/commit/1ef7266f896038cb9aa66e94cecfd18de2935631))


### Bug Fixes

* **deps:** update dependency jsdom to v18.0.1 ([dd7be12](https://github.com/nubolab-ffwd/svelte-fluent/commit/dd7be12fca0ac3a9704cf3b0c7b40f15243d9f65))
* **deps:** update dependency jsdom to v18.1.0 ([ee50e23](https://github.com/nubolab-ffwd/svelte-fluent/commit/ee50e23575fcc7c9503f50b316e645c90ce34a49))
* **deps:** update dependency jsdom to v18.1.1 ([7454c16](https://github.com/nubolab-ffwd/svelte-fluent/commit/7454c165fa0f579f7aaa12e12433ac4112818d8b))

### [0.4.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.4.0...v0.4.1) (2021-09-15)

## [0.4.0](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.3.1...v0.4.0) (2021-07-14)


### ⚠ BREAKING CHANGES

* add bundler plugin for conditional SSR entrypint

### Features

* add bundler plugin for conditional SSR entrypint ([2f47cbc](https://github.com/nubolab-ffwd/svelte-fluent/commit/2f47cbcc63da82b5a1b284c106e5fdd8fc74a5b5))

### [0.3.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.3.0...v0.3.1) (2021-05-31)

## [0.3.0](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.2.1...v0.3.0) (2021-05-31)


### Features

* add support for Vite / SvelteKit ([fa86229](https://github.com/nubolab-ffwd/svelte-fluent/commit/fa862290605f08937ef3945cd201254956d46674))

### [0.2.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.2.0...v0.2.1) (2020-12-18)


### Bug Fixes

* fix for translate store always returning undefined ([3525142](https://github.com/nubolab-ffwd/svelte-fluent/commit/35251421e52bee673a912f250c3b0deca102d037))

## [0.2.0](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.1.5...v0.2.0) (2020-12-18)


### Features

* expose stores for retrieving translations directly from FluentProvider ([12ad13d](https://github.com/nubolab-ffwd/svelte-fluent/commit/12ad13de5141f39a9f3aa1a89555a44f61628fc7))

### [0.1.5](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.1.4...v0.1.5) (2020-10-14)

### [0.1.4](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.1.3...v0.1.4) (2020-08-20)


### Bug Fixes

* process message attributes with FluentBundle.formatPattern ([0fa5741](https://github.com/nubolab-ffwd/svelte-fluent/commit/0fa57419238799718c2c4e1025b5211017409f5f))

### [0.1.3](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.1.2...v0.1.3) (2020-08-06)


### Bug Fixes

* ensure FluentProvider updates store when bundles change ([697d399](https://github.com/nubolab-ffwd/svelte-fluent/commit/697d39951099c6db4f275cd6190c189ec3e86539))
* wrap bundles in CachedSyncIterable ([8f356f3](https://github.com/nubolab-ffwd/svelte-fluent/commit/8f356f37153ca8a08c50eef882130f7f46edd5d0))

### [0.1.2](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.1.1...v0.1.2) (2020-07-02)

### [0.1.1](https://github.com/nubolab-ffwd/svelte-fluent/compare/v0.1.0...v0.1.1) (2020-07-01)


### Bug Fixes

* update broken imports in README example ([6b657fd](https://github.com/nubolab-ffwd/svelte-fluent/commit/6b657fd7039def8a591c00c18bfa42a2063fe751))

## 0.1.0 (2020-07-01)


### Features

* add support for DOM overlays (experimental) and finish FluentProvider and Localized components ([3960bdb](https://github.com/nubolab-ffwd/svelte-fluent/commit/3960bdbccf0ff7b95d387c4313e673fd74a6c3e2))


### Bug Fixes

* prevent Overlay detach error if translation id does not exist ([19cd78a](https://github.com/nubolab-ffwd/svelte-fluent/commit/19cd78a16cc880eb4bbf334a8f66f0a63aae0c0f))
* webpack compatibility ([89ee4ee](https://github.com/nubolab-ffwd/svelte-fluent/commit/89ee4eeacbe0cc778600380f28d7dd6bf3b3bdda))
