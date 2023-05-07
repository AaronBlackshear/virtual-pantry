import { Select, SelectOption, SelectProps } from '@/components/Select';
import { Nullable } from '@/lib/types';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

interface MealCategory {
  id: number;
  name: string;
}

const MEAL_CATEGORIES: MealCategory[] = [
  { id: 1, name: 'Breakfast' },
  { id: 2, name: 'Lunch' },
  { id: 3, name: 'Dinner' },
  { id: 4, name: 'Snack' },
]

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'radio',
      options: ['error', 'success', null]
    },
    disabled: {
      control: 'boolean',
    }
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const SelectWithHooks = ({ ...args }: Omit<SelectProps<Nullable<MealCategory>>, "selectValue">) => {
  const [selected, setSelected] = useState<Nullable<MealCategory>>(null)
  const [query, setQuery] = useState('')

  return (
    <Select
      {...args}
      selectValue={selected}
      onSelectChange={(val) => {
        setSelected(val)
        setQuery("");
      }}
      label="Meal category"
      onChange={(e) => {
        setSelected(null)
        setQuery(e.target.value)
      }}
      value={query || selected?.name}
    >
      {MEAL_CATEGORIES.map((mealCategory) => (
        <SelectOption
          key={mealCategory.id}
          value={mealCategory}
          variant='image'
        >
          {mealCategory.name}
        </SelectOption>
      ))}
    </Select>
  )
}

export const Primary: Story = {
  render: (args) => <SelectWithHooks {...args} />,
};
