import HorizontalMovies from "@/components/horizontal-movies";
import Slider from "@/components/slider";
import Tabs from "@/components/tabs";
import { useMovies } from "@/hooks/useMovies";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from "react-native";


export default function HomeScreen() {
  const { nowPlaying, isFetching, isLoading, upcoming, populars, topRated } = useMovies();
  if(isFetching || isLoading) {
    return <View style={{flex: 1}}>
      <Ionicons name='refresh-circle' size={24} color="black" />
    </View>
  }

  return (
      <ScrollView className='bg-zinc-950 '>
        <View className="p-20"></View>
        <Text className="font-bold text-white text-3xl mt-4">En cartelera</Text>
        <Slider movies={nowPlaying ?? []} />
        {/* movies list */}

        <HorizontalMovies movies={upcoming ?? []} title="Proximos estrenos" />
        <HorizontalMovies movies={populars ?? []} title="Populares" />
        <HorizontalMovies movies={topRated ?? []} title="Proximos estrenos" />
      </ScrollView>
  );
}
