import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    clickHandler: { action: 'clicked' },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
    },
    color: {
      options: ['orange', 'green', 'skyblue'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  label: 'Red',
  backgroundColor: 'red',
};

export const Blue = Template.bind({});
Blue.args = {
  label: 'Blue',
  backgroundColor: 'blue',
};
