import { recipe } from '@vanilla-extract/recipes';

export const status = recipe({
  base: {
    fontSize: '12px',
    borderRadius: '8px',
    width: '62px',
    height: '20px',
    textAlign: 'center',
    fontWeight: 'semibold',
    padding: '4px 10px',
  },
  variants: {
    status: {
      결제완료: {
        color: '#4E3B9E',
        backgroundColor: '#EFEAFE',
      },
      결제실패: {
        color: '#F82E45',
        backgroundColor: '#F9EFEC',
      },
      결제대기: {
        color: '#336F53',
        backgroundColor: '#EDFCEE',
      },
    },
  },
  defaultVariants: {
    status: '결제대기',
  },
});
