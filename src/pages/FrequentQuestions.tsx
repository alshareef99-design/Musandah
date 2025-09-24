import { VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLanguage, selectDirection } from "../store/slices/languageSlice";
import FaqAccordion from "@/components/faq-components/FAQAccordion";
import { ContactBanner } from "@/components/contact_components/ContactBanner";

export const FrequentQuestions = () => {
  const Lang = useSelector(selectLanguage);
  const direction = useSelector(selectDirection);

  type FaqItem = {
    question: string;
    answer: string;
  };

  const [faq, setFaq] = useState<FaqItem[]>([]);

  useEffect(() => {
    fetch(direction === "rtl" ? `/docs/faq-ar.txt` : `/docs/faq.txt`)
      .then((res) => res.text())
      .then((data) => {
        const items = data.split(/\d+\.\s/).filter(Boolean);
        // Splits at "1. " , "2. " etc.
        const parsedFaqs = items.map((item) => {
          const [question, ...answer] = item.split("\n");
          return {
            question: question.trim(),
            answer: answer.join("\n").trim(),
          };
        });
        setFaq(parsedFaqs);
      });
  }, [Lang]);
  return (
    <VStack justify={"center"} color={"#4D7CB1"} gap="2rem" mb={"4rem"} w={"100vw"}>
      <ContactBanner
        bgPos="0% /27%"
        img="faq.jpg"
        title= {Lang === "en" ? "Frequent Questions" : "الأسئلة الشائعة"}
        subtitle=""
        description=""
      />
      {/* <Text
        fontSize={{ base: "1.25rem", lg: "1.5rem" }}
        color={"rgba(46, 54, 81, 1)"}
      >
        {Lang === "en"?
        " Whatever is on your mind... we answer it simply and clearly.":
          "كل ما يشغلك… نجيبك عنه ببساطة ووضوح."}
      </Text> */}
      <VStack w="100%" minH="40vh" align="center" justifyContent="center" p={8}>
        <Text fontWeight={700} fontSize={{ base: "1.5rem", md: "2rem" }} color={"rgba(46, 54, 81, 1)"}>
          {Lang === "ar" ? "قريباً" : "Coming Soon"}
        </Text>
      </VStack>

      {/* <FaqAccordion items={faq} /> */}
    </VStack>
  );
};
