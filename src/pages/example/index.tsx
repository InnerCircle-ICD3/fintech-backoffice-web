import {
  ExampleForm,
  ExampleInput,
  ExampleSwitch,
  ExampleButton,
  ExamplePopover,
  ExampleDatePicker,
} from './components';

export const Example = () => {
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
