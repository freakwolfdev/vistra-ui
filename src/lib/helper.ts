import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function that combines clsx and tailwind-merge for optimal class name handling.
 *
 * This function provides the best of both worlds:
 * - clsx: Conditional class name joining with support for objects, arrays, and strings
 * - tailwind-merge: Intelligent merging of Tailwind CSS classes to avoid conflicts
 *
 * @param inputs - Class values to be processed (strings, objects, arrays, functions, etc.)
 * @returns A merged and deduplicated class string optimized for Tailwind CSS
 *
 * @example
 * // Basic usage
 * cx('px-4 py-2', 'bg-blue-500')
 * // Result: 'px-4 py-2 bg-blue-500'
 *
 * @example
 * // Conditional classes
 * cx('base-class', { 'active-class': isActive, 'disabled-class': isDisabled })
 *
 * @example
 * // Tailwind conflict resolution
 * cx('px-4 px-6', 'py-2 py-4')
 * // Result: 'px-6 py-4' (later values override earlier ones)
 *
 * @example
 * // Complex conditional logic
 * cx(
 *   'flex items-center',
 *   {
 *     'justify-center': variant === 'center',
 *     'justify-between': variant === 'between',
 *     'text-white': variant === 'primary',
 *     'text-gray-900': variant === 'secondary'
 *   },
 *   size === 'large' && 'text-lg',
 *   size === 'small' && 'text-sm'
 * )
 */
export function cx(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
