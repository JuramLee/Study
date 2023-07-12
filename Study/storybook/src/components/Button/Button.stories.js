import Button from './Button';

export default {
  title: 'Challenge2/Button',
  component: Button,
  // tags: ['autodocs'], // Docs라는 파일이 생김
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
    borderType: {
      options: ['double', 'solid', 'dotted', 'dashed'],
      control: {
        type: 'radio',
      },
    },
  },
};

const ButtonTemplate = (args) => <Button {...args} />;

export const Red = ButtonTemplate.bind({});
Red.args = {
  label: 'Red',
  backgroundColor: 'red',
  // onclick: () => console.log('클릭되었습니다'),
};

export const Blue = ButtonTemplate.bind({});
Blue.args = {
  label: 'Blue',
  backgroundColor: 'blue',
};

/*
  CSS3부터는 args를 쓰면 알아서 component에게 전달함
*/
