import { style } from '@vanilla-extract/css';
import {flex} from "@/components/layout/flex/flex.css";


export const content = style([
  flex({ direction: 'column' }),
  {
    flex: 1,
    height: '100%',
    overflowX: 'auto',
    overflowY: 'auto',
    padding: `20px 20px 20px 0`,
  },
]);
