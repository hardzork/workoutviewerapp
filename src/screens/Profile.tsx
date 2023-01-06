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

const PHOTO_SIZE = 33;

export function Profile() {
  const [isPhotoLoading, setIsPhotoLoading] = useState(true);
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
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: "https://github.com/hardzork.png" }}
              alt="Robinson Junior"
              size={PHOTO_SIZE}
            />
          )}
          <TouchableOpacity>
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
