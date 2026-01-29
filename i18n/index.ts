/**
 * Blog i18n utilities
 */

import { createMessageGetter, getMergedMessages } from '../utils/messages.js'
import {
	handleBlogI18n,
	loadWithBlogI18n,
	layoutLoadWithBlogI18n
} from './hooks.js'

// Re-export types for consumers
export type {
	I18nConfig,
	BlogConfigWithI18n,
	I18nHandler,
	LoadFunction,
	I18nLoadResult
} from './hooks.js'

export {
	createMessageGetter,
	getMergedMessages,
	handleBlogI18n,
	loadWithBlogI18n,
	layoutLoadWithBlogI18n
}
