import {
  Input,
  InputField,
  InputIcon,
  HStack,
  SearchIcon,
  Image,
  Pressable,
} from "@gluestack-ui/themed";
import GearIcon from "./../../assets/icons/settings-icon.png";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabStackParamList } from "../../stacks/AppStack";
import { TouchableOpacity } from "react-native";

interface ISearchInputProps {
  settings?: boolean;
  query?: string;
}

const SearchInput = ({ settings, query }: ISearchInputProps) => {
  const [inputValue, setInputValue] = useState<string>(query ?? "");
  const navigation =
    useNavigation<BottomTabNavigationProp<TabStackParamList>>();
  const navigationIn =
    useNavigation<BottomTabNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigationIn.navigate("Settings");
  };

  const handleSearchPress = () => {
    if (inputValue.trim()) {
      navigation.navigate("Search", { query: inputValue.trim() });
    }
  };

  useEffect(() => {
    setInputValue(query ?? "");
  }, [query]);

  return (
    <HStack
      justifyContent="space-between"
      px={settings ? "$6" : 0}
      alignItems="center"
    >
      <Input
        variant="rounded"
        size="lg"
        height={44}
        flex={1}
        px="$4"
        alignItems="center"
        borderWidth="$2"
        borderColor="$primary"
        borderRadius="$xl"
      >
        <Pressable onPress={handleSearchPress}>
          <InputIcon>
            <SearchIcon color="$primary" size="lg" />
          </InputIcon>
        </Pressable>
        <InputField
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Search videos"
        />
      </Input>
      {settings && (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
          <Image
            source={GearIcon}
            alt="App Logo"
            width={32}
            height={32}
            mx="$6"
          />
        </TouchableOpacity>
      )}
    </HStack>
  );
};

export default SearchInput;
