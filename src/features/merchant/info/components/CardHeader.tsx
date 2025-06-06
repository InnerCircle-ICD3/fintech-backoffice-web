import Text from '@/components/ui/text';
import * as styles from './merchant-info.css';

interface CardHeaderProps {
  title: string;
  description: string;
}

export const CardHeader = ({ title, description }: CardHeaderProps) => {
  return (
    <div className={styles.merchantInfoHeader}>
      <Text size={'lg'} weight={'bold'}>
        {title}
      </Text>
      <Text size={'sm'} weight={'regular'}>
        {description}
      </Text>
    </div>
  );
};
