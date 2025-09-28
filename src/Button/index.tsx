import React from 'react';
import { cx } from '../lib/helper';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  /**
   * The size of the button
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the button should take full width
   */
  fullWidth?: boolean;
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;
  /**
   * The content to display inside the button
   */
  children: React.ReactNode;
}

/**
 * A versatile button component with multiple variants and sizes.
 *
 * @example
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="outline" size="lg" fullWidth>Submit</Button>
 * <Button variant="destructive" loading>Deleting...</Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
      secondary:
        'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300',
      outline:
        'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 active:bg-gray-100',
      ghost:
        'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200',
      destructive: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
    };

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
    };

    return (
      <button
        ref={ref}
        className={cx(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className,
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
