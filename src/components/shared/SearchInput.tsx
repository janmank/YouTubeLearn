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
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { AppStackParamList } from "../../stacks/AppStack";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const navigation =
    useNavigation<BottomTabNavigationProp<AppStackParamList>>();

  const handleSearchPress = () => {
    if (inputValue.trim()) {
      navigation.navigate("Search", { query: inputValue.trim() });
    }
  };

  return (
    <HStack justifyContent="space-between" px="$6" alignItems="center">
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
      <Image source={GearIcon} alt="App Logo" width={32} height={32} mx="$6" />
    </HStack>
  );
};

export default SearchInput;
