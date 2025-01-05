import HorizontalMovies from "@/components/horizontal-movies";
import Slider from "@/components/slider";
import Tabs from "@/components/tabs";
import { useMovies } from "@/hooks/useMovies";
import { useSeries } from "@/hooks/useSeries";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";


export default function HomeScreen() {
  const { nowPlaying, isFetching, isLoading, upcoming, populars, topRated } = useSeries();
  if(isFetching || isLoading) {
    return <View style={{flex: 1}}>
      <Ionicons name='refresh-circle' size={24} color="black" />
    </View>
  }
  return (
      <ScrollView>
        <Text className="text-xl font-bold text-red-500">MOVIES</Text>
        <Tabs />
        <Slider movies={nowPlaying ?? []} />

        {/* movies list */}

        <HorizontalMovies movies={upcoming ?? []} title="Proximos estrenos" />
        <HorizontalMovies movies={populars ?? []} title="Populares" />
        <HorizontalMovies movies={topRated ?? []} title="Proximos estrenos" />
      </ScrollView>
  );
}
