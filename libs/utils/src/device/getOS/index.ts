import {Platform} from 'react-native';

/**
 * Returns the current platform identifier reported by React Native.
 *
 * This is a thin wrapper around `Platform.OS`.
 *
 * @returns The platform string (e.g., `'ios'`, `'android'`, `'macos'`, `'windows'`).
 *
 * @example
 * if (getOS() === 'ios') {
 *   // iOS-specific logic
 * }
 */

export const getOS = (): typeof Platform.OS => Platform.OS;
/**
 * Convenience flag indicating whether the app is running on iOS.
 *
 */

export const isIOS = getOS() === 'ios';
/**
 * Convenience flag indicating whether the app is running on Android.
 *
 */
export const isAndroid = getOS() === 'android';
