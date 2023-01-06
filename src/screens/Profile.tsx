import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, VStack } from "native-base";

export function Profile() {
  return (
    <VStack>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{ uri: "https://github.com/hardzork.png" }}
            alt="Robinson Junior"
            size={33}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
