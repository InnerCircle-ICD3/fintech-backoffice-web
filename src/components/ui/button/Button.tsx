import { cx } from '@/utils/cx';
import { Slot } from '@radix-ui/react-slot';
import React, { ComponentPropsWithoutRef } from 'react';
import { button } from './button.css';

type ButtonVariants = NonNullable<Parameters<typeof button>[0]>;

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  loading?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        type={props.type || 'button'}
        className={cx(button({ variant, size }), className)}
        ref={ref}
        disabled={props.disabled || loading}
        {...props}
      >
        {loading ? 'Loading...' : props.children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';
