import { Text, VStack } from "@chakra-ui/react";
import { ContactBanner } from "@/components/contact_components/ContactBanner";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";

// Minimal stub to satisfy imports from ArticleDetails and other components
export const articles: any[] = [];

export const KnowledgeCenter = () => {
  const lang = useSelector(selectLanguage);

  return (
    <VStack w={"100vw"}>
      <ContactBanner
        bgPos="0% /27%"
        img="About.jpg"
        title={lang === "en" ? "Knowledge Center" : "مركز المعرفة"}
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
