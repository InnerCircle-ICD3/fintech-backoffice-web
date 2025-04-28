import { createGlobalTheme } from '@vanilla-extract/css';

export const resolution = {
  max: '1920px',
  min: '1280px',
};

const commonVars = createGlobalTheme(':root', {
  color: {
    green: '#00D98B',
    greenD: '#00A86C',
    greenL: '#4FFABC',
    red: '#FF3737',
    redD: '#DB0042',
    redL: '#FF7AA2',
    yellow: '#FFB800',
    yellowD: '#E5A500',
    yellowL: '#FFD66B',
    etc: '#E8ECF5',
    modal: 'rgba(0, 0, 0, 0.50)',
    black: '#000000',
    gray3: '#333333',
    gray6: '#666666',
    white: '#FFFFFF',
    shadow: {
      red: 'rgba(255, 57, 57, 0.25)',
    },
    primary: '#3361FF',
    primaryD: '#0033E2',
    primaryL: '#B9C8FF',
    primaryB: '#F5F8FF',
    text: {
      title: '#1D2F6C',
      main: '#5C7099',
      sub: '#A5B1CA',
    },
    background: '#F4F5FA',
    disabledBg: '#F3F5F8',
    disabledText: '#A5B1CA',
    border: '#EAEDF5',
    table: '#F3F8FF',
    graph: '#D4DAE6',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '22px',
    '3xl': '24px',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    bold: '700',
    extraBold: '800',
  },
});

export const vars = { ...commonVars };
