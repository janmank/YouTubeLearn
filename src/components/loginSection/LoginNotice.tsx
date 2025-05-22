import { Box, Text, Link } from "@gluestack-ui/themed";

const LoginNotice = () => {
  return (
    <Box
      pt="$6"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      <Text color="$white">By continuing you agree with </Text>
      <Link href="https://policies.google.com/terms" isExternal>
        <Text color="$primary" textDecorationLine="underline">
          Terms and Conditions
        </Text>
      </Link>
      <Text color="$white"> and </Text>
      <Link href="https://policies.google.com/privacy" isExternal>
        <Text color="$primary" textDecorationLine="underline">
          Privacy Policy
        </Text>
      </Link>
    </Box>
  );
};

export default LoginNotice;
