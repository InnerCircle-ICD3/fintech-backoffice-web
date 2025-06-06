import Text from '@/components/ui/text';
import * as styles from './card-header.css';

interface CardHeaderProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export const CardHeader = ({ title, description, action }: CardHeaderProps) => {
  return (
    <div className={styles.merchantInfoHeader}>
      <div className={styles.merchantInfoHeaderTitle}>
        <Text size={'lg'} weight={'bold'}>
          {title}
        </Text>
        <Text size={'sm'} weight={'regular'}>
          {description}
        </Text>
      </div>
      {action && action}
    </div>
  );
};
