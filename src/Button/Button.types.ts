/**
 * Button component props interface
 * Extends HTMLButtonElement to support all native button attributes
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button.
   * - 'primary': Main call-to-action button with solid background
   * - 'secondary': Secondary action button with subtle styling
   * - 'outlined': Button with border and transparent background
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outlined';

  /**
   * Controls the size of the button.
   * - 'small': Compact button for tight spaces
   * - 'medium': Standard button size (default)
   * - 'large': Larger button for emphasis
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The text content displayed inside the button.
   * This is the visible label that users will see.
   */
  label: string;
}
