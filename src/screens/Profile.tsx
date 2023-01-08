import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import {
  Center,
  Heading,
  KeyboardAvoidingView,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import { Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

const PHOTO_SIZE = 33;

export function Profile() {
  const [isPhotoLoading, setIsPhotoLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState("https://github.com/hardzork.png");
  async function handleUserPhotoSelect() {
    setIsPhotoLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });
      if (photoSelected.canceled) {
        return;
      }
      if (photoSelected.assets[0].uri) {
        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsPhotoLoading(false);
    }
  }
  return (
    <VStack>
      <ScreenHeader title="Perfil" />
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      > */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Center mt={6} px={10}>
          {isPhotoLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.900"
              endColor="gray.100"
            />
          ) : (
            <UserPhoto
              source={{ uri: userPhoto }}
              alt="Robinson Junior"
              size={PHOTO_SIZE}
            />
          )}
          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input placeholder="Nome" bg="gray.500" />
          <Input placeholder="E-mail" bg="gray.500" isDisabled />
        </Center>
        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2}>
            Alterar senha
          </Heading>
          <Input placeholder="senha atual" bg="gray.500" secureTextEntry />
          <Input placeholder="Nova senha" bg="gray.500" secureTextEntry />
          <Input
            placeholder="Confirme nova senha"
            bg="gray.500"
            secureTextEntry
          />
          <Button title="Atualizar" mt={4} />
        </VStack>
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </VStack>
  );
}
