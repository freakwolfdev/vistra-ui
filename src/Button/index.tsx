import { forwardRef } from 'react';
import { cx } from '../lib/helper';
import type { ButtonProps } from './Button.types';

export type { ButtonProps } from './Button.types';

/**
 * Primary UI component for user interaction.
 *
 * A versatile button component that supports different sizes, variants, and states.
 * Built with Tailwind CSS for consistent styling and responsive design.
 * Supports all native HTML button attributes and can be forwarded a ref.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="large" label="Click me" onClick={handleClick} />
 * <Button variant="secondary" size="small" label="Cancel" disabled />
 * <Button variant="outlined" label="Learn More" />
 * <Button ref={buttonRef} aria-label="Close dialog" />
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      label,
      className = '',
      disabled = false,
      type = 'button',
      onClick,
      ...props
    },
    ref,
  ) => {
    // Size-specific classes
    const sizeClasses = {
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg',
    };

    // Variant-specific classes
    const variantClasses = {
      primary:
        'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800',
      secondary:
        'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 active:bg-gray-300',
      outlined:
        'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100',
    }[variant];

    // Combine all classes using cx utility
    const buttonClasses = cx(
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
      sizeClasses[size],
      variantClasses,
      className,
    );

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    );
  },
);

Button.displayName = 'Button';
