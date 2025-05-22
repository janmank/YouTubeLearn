import { Text } from "@gluestack-ui/themed";
import { ScreenWrapper } from "../components/layouts";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AppStackParamList } from "../stacks/AppStack";

const SearchScreen = () => {
  const route = useRoute<RouteProp<AppStackParamList, "Search">>();
  const { query } = route.params;
  return (
    <ScreenWrapper>
      <Text>SEARCH SCREEN</Text>
      <Text>{query}</Text>
    </ScreenWrapper>
  );
};

export default SearchScreen;
