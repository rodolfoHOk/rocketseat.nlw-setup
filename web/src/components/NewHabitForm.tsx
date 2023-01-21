import { Check } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { api } from '../lib/axios';
import { WeekDayCheckbox } from './WeekDayCheckbox';

export function NewHabitForm() {
  const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  const [title, setTitle] = useState('');
  const [weekDays, setWeekDays] = useState<number[]>([]);

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();

    if (!title || weekDays.length === 0) {
      return;
    }

    await api.post('/habits', {
      title,
      weekDays,
    });

    setTitle('');
    setWeekDays([]);

    alert('Habito criado com sucesso');
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      setWeekDays((prevState) => prevState.filter((day) => day !== weekDay));
    } else {
      setWeekDays([...weekDays, weekDay]);
    }
  }

  return (
    <form className={`w-full flex flex-col mt-6`} onSubmit={createNewHabit}>
      <label htmlFor="title" className={`font-semibold leading-tight`}>
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        className={`p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400
          border-2 border-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-offset-zinc-900 focus:ring-violet-700`}
        id="title"
        placeholder="ex: Exercícios, Dormir bem, etc..."
        autoFocus
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="" className={`font-semibold leading-tight mt-4`}>
        Qual a recorrência?
      </label>

      <div className="mt-3 flex flex-col gap-2 ">
        {availableWeekDays.map((weekDay, index) => (
          <WeekDayCheckbox
            key={weekDay}
            title={weekDay}
            checked={weekDays.includes(index)}
            onCheckedChange={() => handleToggleWeekDay(index)}
          />
        ))}
      </div>

      <button
        type="submit"
        className={`mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold
         bg-green-600 hover:bg-green-500 transition-colors duration-200 focus:outline-none
         focus:ring-2 focus:ring-offset-2 focus:ring-offset-background 
         focus:ring-green-700`}
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
