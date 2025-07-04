import { ExampleButton } from './ExampleButton';
import { ExampleDatePicker } from './ExampleDatePicker';
import { ExampleForm } from './ExampleForm';
import { ExampleInput } from './ExampleInput';
import { ExamplePopover } from './ExamplePopover';
import { ExampleSwitch } from './ExampleSwitch';

const ExamplePage = () => {
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
    </div>
  );
};

export default ExamplePage;
