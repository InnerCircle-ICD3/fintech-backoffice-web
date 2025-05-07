import { style } from '@vanilla-extract/css';
import {flex} from "@/components/layout/flex/flex.css";

export const layout = style({
    height: '100%',
    background: '#F4F5FA'
});

export const mainContainer = style([
  flex(),
  {
    width: '100%',
    height: `calc(100% - 50px)`,
  },
]);
