import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  title: string;
}

export function HabitCheckbox({ title, ...rest }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root className="flex items-center gap-3 group" {...rest}>
      <div
        className={`h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900
          border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 
          group-data-[state=checked]:border-green-500`}
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
