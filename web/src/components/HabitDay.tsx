import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { HabitCheckbox } from './HabitCheckbox';
import { ProgressBar } from './ProgressBar';

interface HabitDayProps {
  date: Date;
  amount?: number;
  completed?: number;
}

export function HabitDay({ amount = 0, completed = 0, date }: HabitDayProps) {
  const completedPercentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayOfWeek = dayjs(date).format('dddd');
  const dayAndMonth = dayjs(date).format('DD/MM');

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 border-2 rounded-lg', {
          'bg-zinc-900 border-zinc-800': completedPercentage === 0,
          'bg-violet-900 border-violet-700':
            completedPercentage > 0 && completedPercentage < 20,
          'bg-violet-800 border-violet-600':
            completedPercentage >= 20 && completedPercentage < 40,
          'bg-violet-700 border-violet-500':
            completedPercentage >= 40 && completedPercentage < 60,
          'bg-violet-600 border-violet-500':
            completedPercentage >= 60 && completedPercentage < 80,
          'bg-violet-500 border-violet-400': completedPercentage >= 80,
        })}
      />

      <Popover.PopoverPortal>
        <Popover.Content
          className={`min-w-[320px] p-6 bg-zinc-900 flex flex-col rounded-2xl`}
        >
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            {dayAndMonth}
          </span>

          <ProgressBar progress={completedPercentage} />

          <div className="mt-6 flex flex-col gap-3">
            <HabitCheckbox title="Berber 2L de água" />
          </div>

          <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
        </Popover.Content>
      </Popover.PopoverPortal>
    </Popover.Root>
  );
}
