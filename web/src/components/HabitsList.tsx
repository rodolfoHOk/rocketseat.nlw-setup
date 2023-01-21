import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { HabitCheckbox } from './HabitCheckbox';

interface HabitsInfo {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[];

  completedHabits: string[];
}

interface HabitsListProps {
  date: Date;
  onCompletedChange: (completed: number) => void;
}

export function HabitsList({ date, onCompletedChange }: HabitsListProps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();

  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date());

  async function handleToggleHabit(habitId: string) {
    await api.patch(`/habits/${habitId}/toggle`);

    const isHabitAlreadyCompleted =
      habitsInfo?.completedHabits.includes(habitId);

    let completedHabits: string[] = [];

    if (isHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(
        (id) => id !== habitId
      );
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId];
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits,
    });

    onCompletedChange(completedHabits.length);
  }

  useEffect(() => {
    api
      .get<HabitsInfo>('/day', {
        params: {
          date: date.toISOString(),
        },
      })
      .then((response) => setHabitsInfo(response.data));
  }, []);

  return (
    <div className="mt-6 flex flex-col gap-3">
      {habitsInfo?.possibleHabits.map((habit) => (
        <HabitCheckbox
          key={habit.id}
          id={habit.id}
          title={habit.title}
          checked={habitsInfo.completedHabits.includes(habit.id)}
          disabled={isDateInPast}
          onToggleHabit={handleToggleHabit}
        />
      ))}
    </div>
  );
}
