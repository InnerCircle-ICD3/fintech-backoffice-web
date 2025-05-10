import { ReactNode, useState } from 'react';
import Flex from '@/components/layout/flex/Flex';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { searchFilter } from '@/styles/searchFilter.css';

interface SearchFilterProps {
  children?: ReactNode;
  advancedSearch?: ReactNode;
  onSearch?: () => void;
  onReset?: () => void;
}

const SearchContainer = (props: SearchFilterProps) => {
  const { children, advancedSearch, onSearch, onReset } = props;

  return (
    <div className={searchFilter}>
      <Flex direction={'column'} grow={'wFull'}>
        <Flex gap={'16px'} style={{ flexWrap: 'wrap' }}>
          {children}
        </Flex>

        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: 0,
            opacity: 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Flex gap={'16px'} style={{ marginTop: '16px' }}>
            {advancedSearch}
          </Flex>
        </motion.div>
      </Flex>

      <Flex grow={'wFull'} justify={'end'}>
        <Flex gap={'16px'}>
          <Button onClick={onReset}>Reset</Button>
          <Button onClick={onSearch}>Search</Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default SearchContainer;
