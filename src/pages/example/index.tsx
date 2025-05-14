import Flex from '@/components/layout/flex/Flex';
import {
  ExampleForm,
  ExampleInput,
  ExampleSwitch,
  ExamplePopover,
  ExampleDatePicker,
} from './components';
import { ExampleButton } from './components/ExampleButton';
import { ExampleError } from './components/ExampleError';
import { lazy, Suspense } from 'react';

const ExampleLoader = lazy(() => import('./components/ExampleLoader'));

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
          <ExampleLoader />
        </Suspense>
        <ExampleError />
      </Flex>
    </div>
  );
};

export default Example;
