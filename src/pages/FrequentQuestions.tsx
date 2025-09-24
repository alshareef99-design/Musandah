import { VStack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../store/slices/languageSlice";
import { ContactBanner } from "@/components/contact_components/ContactBanner";

export const FrequentQuestions = () => {
  const lang = useSelector(selectLanguage);

  return (
    <VStack w={"100vw"}>
      <ContactBanner
        bgPos="0% /27%"
        img="About.jpg"
        title={lang === "en" ? "Frequent Questions" : "الأسئلة الشائعة"}
        subtitle=""
        description=""
      />
      <VStack w="100%" minH="40vh" align="center" justifyContent="center" p={8}>
        <Text fontWeight={700} fontSize={{ base: "1.5rem", md: "2rem" }} color={"rgba(46, 54, 81, 1)"}>
          {lang === "ar" ? "قريباً" : "Coming Soon"}
        </Text>
      </VStack>
    </VStack>
  );
};
