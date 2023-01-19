import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { ScrollView, Text, View } from 'react-native';
import { BackButton } from '../components/BackButton';
import { Checkbox } from '../components/Checkbox';
import { ProgressBar } from '../components/ProgressBar';

interface HabitParams {
  date: string;
}
export function Habit() {
  const route = useRoute();
  const { date } = route.params as HabitParams;

  const parsedDate = dayjs(date).startOf('day');
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMouth = parsedDate.format('DD/MM');

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>
        <Text className="text-white font-extrabold text-3xl">
          {dayAndMouth}
        </Text>

        <ProgressBar progress={30} />

        <View className="mt-6">
          <Checkbox title="Beber 2L de água" checked={true} />

          <Checkbox title="Dormir 8 horas" checked={false} />
        </View>
      </ScrollView>
    </View>
  );
}
