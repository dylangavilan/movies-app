import { View, Text, Pressable, Image } from 'react-native';

interface Props {
  id: number;
  poster: string;
  size?: "big" | "small";
  className?: string;
}

const MovieCard = ({ id, poster, size = "big", className }: Props) => {
  return (
    <Pressable className={`active:opacity-90 px-2`}>
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: size === 'small' ? 95 : 150,
          height: size  === 'small' ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};
export default MovieCard;