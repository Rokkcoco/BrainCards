import type { Meta, StoryObj } from '@storybook/react'
import { RadioButtonUnchecked } from '@/components/ui/icons/radio_button_unchecked/RadioButtonUnchecked.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: RadioButtonUnchecked,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof RadioButtonUnchecked>

export default meta
type Story = StoryObj<typeof meta>

export const RadioButtonUncheckedIcon: Story = {
  args: {
    onClick: () => alert('ку'),
  },
}
