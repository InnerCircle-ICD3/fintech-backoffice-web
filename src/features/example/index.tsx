import Flex from '@/components/layout/flex';
import { Suspense } from 'react';
import {
  ExampleDatePicker,
  ExampleForm,
  ExampleInput,
  ExamplePopover,
  ExampleSwitch,
} from './components';
import { ExampleButton } from './components/ExampleButton';
import { ExampleError } from './components/ExampleError';

import { ExampleDialog } from './components/ExampleDialog';

const Example = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <ExampleButton />
      <ExampleForm />
      <ExampleInput />
      <ExampleSwitch />
      <ExamplePopover />
      <ExampleDatePicker />
      <Flex justify="center" style={{ width: '100%' }}>
        <Suspense fallback={<div>로딩 중...</div>}>
          <ExampleDialog />
        </Suspense>
        <ExampleError />
      </Flex>
    </div>
  );
};

export default Example;
