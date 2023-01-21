import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  id: string;
  title: string;
  checked: boolean;
  disabled: boolean;
  onToggleHabit: (id: string) => void;
}

export function HabitCheckbox({
  id,
  title,
  checked,
  disabled,
  onToggleHabit,
  ...rest
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed"
      {...rest}
      disabled={disabled}
      checked={checked}
      onCheckedChange={() => onToggleHabit(id)}
    >
      <div
        className={`h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900
          border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 
          group-data-[state=checked]:border-green-500 transition-colors duration-150
          group-focus:ring-2 group-focus:ring-offset-2 group-focus:ring-offset-background
          group-focus:ring-violet-700`}
      >
        <CheckboxPrimitive.Indicator>
          <Check size={20} className="text-white" />
        </CheckboxPrimitive.Indicator>
      </div>

      <span
        className={`font-semibold text-xl text-white leading-tight
        group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400`}
      >
        {title}
      </span>
    </CheckboxPrimitive.Root>
  );
}
