import * as React from 'react';
import { cx } from '@/utils/cx';
import { input, inputContainer, prefixWrapper, suffixWrapper } from './input.css';

export type InputVariants = NonNullable<Parameters<typeof input>[0]>;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix'> {
  variant?: InputVariants['variant'];
  size?: InputVariants['size'];
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = 'text', size, variant, prefix, suffix, fullWidth = true, ...props },
    ref
  ) => {
    const hasPrefix = !!prefix;
    const hasSuffix = !!suffix;

    // prefix 또는 suffix가 있는 경우
    if (hasPrefix || hasSuffix) {
      return (
        <div className={inputContainer({ fullWidth })}>
          {hasPrefix && <div className={prefixWrapper}>{prefix}</div>}

          <input
            type={type}
            className={cx(
              input({
                size,
                variant,
                withPrefix: hasPrefix,
                withSuffix: hasSuffix,
                fullWidth,
              }),
              className
            )}
            ref={ref}
            {...props}
          />

          {hasSuffix && <div className={suffixWrapper}>{suffix}</div>}
        </div>
      );
    }

    // prefix나 suffix가 없는 경우
    return (
      <input
        type={type}
        className={cx(input({ size, variant, fullWidth }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
