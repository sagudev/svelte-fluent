import { getOverlayImpl, setDOMProvider } from './internal/Overlay'
export { default as Localized } from './internal/Localized.svelte'
export { default as FluentProvider } from './internal/FluentProvider.svelte'

export const Overlay = getOverlayImpl(!process.browser)

if (!process.browser) {
  setDOMProvider(require('jsdom').JSDOM)
}
