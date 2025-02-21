import type { Meta, StoryObj } from '@storybook/react'
import { TrashOutline } from '@/components/ui/icons/trash-outline/TrashOutline.tsx'

const meta = {
  argTypes: {
    version: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
    },
  },
  component: TrashOutline,
  tags: ['autodocs'],
  title: 'Components/Icons',
} satisfies Meta<typeof TrashOutline>

export default meta
type Story = StoryObj<typeof meta>

export const Trash1: Story = {
  args: {
    onClick: () => alert('ку'),

    color: '',
  },
}
