import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cx } from '@/utils/cx';
import { switchRoot, switchThumb } from './switch.css';

type SwitchVariants = NonNullable<Parameters<typeof switchRoot>[0]>;

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  size?: SwitchVariants['size'];
}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, size, ...props }, ref) => (
    <SwitchPrimitives.Root className={cx(switchRoot({ size }), className)} {...props} ref={ref}>
      <SwitchPrimitives.Thumb
        className={switchThumb({ size })}
        style={{
          transform: props.checked ? `translateX(100%)` : 'translateX(0)',
        }}
      />
    </SwitchPrimitives.Root>
  )
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
