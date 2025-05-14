import {
  ExampleForm,
  ExampleInput,
  ExampleSwitch,
  ExamplePopover,
  ExampleDatePicker,
  ExampleLoader,
} from './components';
import { ExampleButton } from './components/ExampleButton';
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
      <ExampleDialog />
      <ExampleLoader />
    </div>
  );
};

export default Example;
