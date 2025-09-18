import { ContactSection } from "@/components/contact_components/ContactSection";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Image, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { VisitsStats } from "@/components/home_components/VisitsStats";
import { ServicesList } from "@/components/services_components/ServicesList";
import { setActiveLink } from "@/store/slices/navSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { selectLanguage } from "@/store/slices/languageSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [expanded, setExpanded] = useState<string | null>(null);
  const text = useTranslation("home.paragraph1");
  const text2 = useTranslation("home.paragraph2");
  const lang = useSelector(selectLanguage);
  return (
    <>
      <Box
        className="contact-hero"
        position="relative" // Changed from absolute to relative
        left={0}
        zIndex={10}
        overflow="hidden" // Prevents image from overflowing
        bgSize="cover"
        bgRepeat="no-repeat"
        w="100%"
        h="25rem"
        transform="scaleX(-1)" // 👈 flip horizontally
      >
        {/* Background Image */}

        <Image
          src={`Home.jpg`}
          alt={"Home image"}
          loading={"eager"}
          decoding={"async"}
          fetchPriority={"high"}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          objectFit="cover" // Equivalent to bgSize="cover"
          objectPosition={"center"} // Equivalent to bgPos
          zIndex={-1} // Behind the text
        />
        <VStack
          className="overlay"
          textAlign="center"
          color={useColorModeValue("#ffffffff", "gray.400")}
          display="flex"
          alignItems="center"
          justifyContent="center"
          transform="scaleX(-1)"
          gap={"1.5rem"}
        >
          <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={500}>
            {useTranslation("home.title")}
          </Text>
          <Text fontSize={{ base: "1rem", md: "1.25rem" }} fontWeight={400}>
            {useTranslation("home.title2")}
          </Text>
          <Box
            as="button"
            color={"white"}
            borderRadius={"1rem"}
            fontSize={"1.25rem"}
            mt="1rem"
            h={"4rem"}
            bgColor={"rgba(90, 119, 187, 1)"}
            onClick={() => {
              dispatch(setActiveLink("/services"));
              navigate("/services");
            }}
          >
            {useTranslation("shared.moredetails")}
          </Box>
        </VStack>
      </Box>

      <VStack
        textAlign={"start"}
        align={"start"}
        p={{ base: "4rem 2rem", md: "4rem 8rem" }}
        gap={"1rem"}
        bgColor={"rgba(247, 248, 252, 1)"}
      >
        <Box display="inline-block">
          <Text
            color="rgba(46, 54, 81, 1)"
            fontSize={{ base: "1.5rem", md: "1.75rem" }}
          >
            {
              useTranslation("home.subtitle")
            }
          </Text>

          <Box w="100%">
            <svg
              viewBox="0 0 223 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.90641 9.61274C38.5926 3.03096 133.738 -5.02933 220.83 15.3837"
                stroke="#981C20"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Box>
        {/* Text 1 */}
        <Text
          fontSize={{ base: "1.2rem", md: "1.4rem" }}
          fontWeight={400}
          color="rgba(95, 97, 102, 1)"
          whiteSpace="pre-line"
          lineClamp={expanded === "text1" ? undefined : 3}
        >
          {text}
        </Text>
        <Box
          as="button"
          bg="transparent"
          color="blue.600"
          mt={2}
          onClick={() => setExpanded(expanded === "text1" ? null : "text1")}
        >
          {expanded === "text1" ? useTranslation("shared.readless") : useTranslation("shared.readmore")}
        </Box>
        <Box gap={"3rem"}>
          <Text pb={8} color={"rgba(90, 119, 187, 1)"}>
            {
              useTranslation("home.designedforyou.title")
            }{" "}
          </Text>

          <HStack
            gap={"3rem"}
            align={"center"}
            textAlign={"center"}
            flexWrap={"no-wrap"}
            flexDir={{ base: "column", md: "row" }}
            w={"100%"}
            justifyContent={"space-between"}
          >
            <VStack>
              <HStack>
                <Image src="hamar.png" w={"3rem"} />
                <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                  {useTranslation("home.designedforyou.cards.0.title")}
                </Text>
              </HStack>
              <Text fontWeight={400} color={"rgba(95, 97, 102, 1)"}>
                {useTranslation("home.designedforyou.cards.0.description")}
              </Text>
            </VStack>
            <VStack>
              <HStack>
                <Image src="hamar.png" w={"3rem"} />
                <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                  {useTranslation("home.designedforyou.cards.1.title")}
                </Text>
              </HStack>
              <Text fontWeight={400} color={"rgba(95, 97, 102, 1)"}>
                {useTranslation("home.designedforyou.cards.1.description")}
              </Text>
            </VStack>
            <VStack>
              <HStack>
                <Image src="hamar.png" w={"3rem"} />
                <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                  {useTranslation("home.designedforyou.cards.2.title")}
                </Text>
              </HStack>
              <Text fontWeight={400} color={"rgba(95, 97, 102, 1)"}>
                {useTranslation("home.designedforyou.cards.2.description")}
              </Text>
            </VStack>
            <VStack>
              <HStack>
                <Image src="hamar.png" w={"3rem"} />
                <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                  {useTranslation("home.designedforyou.cards.3.title")}
                </Text>
              </HStack>
              <Text fontWeight={400} color={"rgba(95, 97, 102, 1)"}>
                {useTranslation("home.designedforyou.cards.3.description")}
              </Text>
            </VStack>
            <VStack>
              <HStack>
                <Image src="hamar.png" w={"3rem"} />
                <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                  {useTranslation("home.designedforyou.cards.4.title")}
                </Text>
              </HStack>
              <Text fontWeight={400} color={"rgba(95, 97, 102, 1)"}>
                {useTranslation("home.designedforyou.cards.4.description")}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </VStack>

      <HStack
        flexDir={{ base: "column", md: "row" }}
        p={8}
        mt={{ base: "1rem", md: "4rem" }}
        mb={{ base: "1rem", md: "4rem" }}
        w={"100vw"}
        gap={"2.5rem"}
        align="stretch" // 🔥 forces equal height
        justifyContent={"space-around"}
      >
        <VStack align={"start"} p={{ base: "1rem", md: "4rem", lg: "8rem" }} gap={"2rem"}>
          <VStack w={{ base: "90%", md: "50%" }} >
            <Text
              fontWeight={500}
              fontSize={{ base: "1.5rem", md: "1.75rem" }}
              color={"rgba(46, 54, 81, 1)"}
            >
              {
                useTranslation("home.whyus.title")}
            </Text>
            <svg
              width="189"
              height="17"
              viewBox="0 0 189 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.90055 10.061C32.922 3.32987 113.339 -5.11866 186.836 14.936"
                stroke="#981C20"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </VStack>
          <Text
            textAlign={"start"}
            fontWeight={400}
            fontSize={"1.2rem"}
            color={"#5F6166"}
          >
            {useTranslation("home.whyus.paragraph")}
          </Text>
          <VStack textAlign={"start"} align={"start"} gap={"1rem"}>
            <HStack gap={"1rem"}>
              <Image scale={"1.5"} src="why1.png" w={"3rem"} />
              <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                {useTranslation("home.whyus.subtitle")}
              </Text>
            </HStack>
            <HStack gap={"1rem"}>
              <Image scale={"1.5"} src="why2.png" w={"3rem"} />
              <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                {useTranslation("home.whyus.subtitle1")}
              </Text>
            </HStack>
            <HStack gap={"1rem"}>
              <Image scale={"1.5"} src="why3.png" w={"3rem"} />
              <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                {useTranslation("home.whyus.subtitle2")}
              </Text>
            </HStack>
            <HStack gap={"1rem"}>
              <Image scale={"1.5"} src="why4.png" w={"3rem"} />
              <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                {useTranslation("home.whyus.subtitle3")}
              </Text>
            </HStack>
            <HStack gap={"1rem"}>
              <Image scale={"1.5"} src="why5.png" w={"3rem"} />
              <Text fontWeight={500} color={"rgba(46, 54, 81, 1)"}>
                {useTranslation("home.whyus.subtitle4")}
              </Text>
            </HStack>
          </VStack>
        </VStack>
        <VStack
          borderRadius={"2xl"}
          bgImage={`url(WhyUs.jpg)`}
          bgSize="cover"
          bgPos={"center"}
          bgRepeat="no-repeat"
          border="1px solid #ddd"
          minH={"15rem"}
          // flex="1"
          w={{ base: "100%", md: "50%" }}
        />
      </HStack>
      <Box display="flex" w="100%">
        {/* Left / Hero Box */}
        <Box
          className="contact-hero"
          bgImage={`url(Home3.jpg)`}
          bgSize="cover"
          bgRepeat="no-repeat"
          border="1px solid #ddd"
          flex="1" // 👈 makes it stretch
          display="flex" // 👈 so VStack can center properly
          alignItems="center" // 👈 vertical center
          justifyContent="center" // 👈 horizontal center
        >
          <VStack color={useColorModeValue("#ffffffff", "gray.400")}>
            <VisitsStats />
          </VStack>
        </Box>
      </Box>

      <VStack p={"8%"} align={"start"} gap={8}>
        <VStack>
          <Text
            color={"rgba(46, 54, 81, 1)"}
            fontSize={{ base: "1.4rem", md: "1.75rem" }}
            fontWeight={500}
          >
            {lang === "ar" ? " اعرف حقوقك قبل أن تحتاجها" : "Know your rights before you need them"}
          </Text>
          <svg
            viewBox="0 0 371 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.9318 7.66254C63.2761 1.73077 222.533 -4.6395 368.804 17.3336"
              stroke="#981C20"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </VStack>
        <Text
          color={"rgba(95, 97, 102, 1)"}
          fontWeight={400}
          fontSize={{ base: "1rem", md: "1.1rem" }}
        >
          {
            lang === "ar" ? `في مركز المساندة القانونية، نوفر لك باقات قانونية مصممة لتلائم احتياجاتك.
اختر الباقة التي تناسبك.. وابق دائمًا في أمان قانوني
` :
              `
          At Musanadah, we have designed legal packages that cover your various needs — from basic support to comprehensive coverage. Choose the package that suits you and always be legally secure.`
          }
        </Text>

        <ServicesList />
      </VStack>
      <Box
        className="contact-hero"
        bgImage={`url(Home2.png)`}
        bgSize="cover"
        bgRepeat="no-repeat"
        border="1px solid #ddd"
        position="absolute"
        left={0}
        zIndex={10}
        w="100%"
        minH="35rem"
        h={"auto"}
      >
        <VStack
          className="overlay"
          textAlign="center"
          color={useColorModeValue("#ffffffff", "gray.400")}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={"1.5rem"}
        >
          <Text fontSize={{ base: "1.4rem", md: "1.75rem" }} fontWeight={500} whiteSpace="pre-line">
            {
              lang === "ar" ? `مركز المساندة القانونية.. ليس مجرد منصة، بل رفيقك القانوني الرقمي، المصمم ليكون دائمًا في صفك.

ابدأ رحلتك القانونية بثقة.. من هنا نبدأ بساندتك.

استشارات قانونية،أمان قانوني طوال العام.. كل ذلك بخطوات بسيطة بالطريقة التي تناسبك.

كل ما تحتاجه في جيبك.` : `
            Musanadah is not just a platform... but your digital legal companion, designed to be on your side.`
            }
          </Text>
          <Text
            fontSize={{ base: "1rem", md: "1.25rem" }}
            fontWeight={400}
            whiteSpace="pre-line"
            lineClamp={expanded === "text2" ? undefined : 3}
          >
            {text2}
          </Text>
          <Box
            as="button"
            bg="transparent"
            color="blue.600"
            mt={2}
            onClick={() => setExpanded(expanded === "text2" ? null : "text2")}
          >
            {expanded === "text2" ? useTranslation("shared.readless") : useTranslation("shared.readmore")}
          </Box>
          <Box
            as="button"
            color={"white"}
            borderRadius={"1rem"}
            fontSize={"1.25rem"}
            onClick={() => window.open("https://portal.lsc-sa.net/", "_blank")}
            mt="1rem"
            h={"4rem"}
            bgColor={"rgba(90, 119, 187, 1)"}
          >
            {lang === "ar" ? " ابدأ الآن" : "Start Now"}
          </Box>
        </VStack>
      </Box>
      <Box h="36rem"></Box>

      <VStack
        bgImage="url('/wave.svg')"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
        pt={"4rem"}
        pb={"4rem"}

        align={"start"}

      >
        <VStack
          textAlign={"start"}
          paddingInlineStart={{ base: "2rem", md: "1rem", lg: "7rem", xl: "9rem" }}
          paddingInlineEnd={{ base: "2rem", md: "1rem", lg: "7rem", xl: "9rem" }}
          align={"start"} gap={"2rem"}>
          <VStack p={"2rem"} gap={"1rem"}>
            <Text
              fontSize={{ base: "1.25rem", lg: "1.75rem" }}
              color={"rgba(46, 54, 81, 1)"}
            >
              {lang === "ar" ? "الوعي القانوني هو خط دفاعك الأول." : useTranslation("shared.mission")}
            </Text>
            <svg
              viewBox="0 0 471 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.94937 6.34516C79.9545 0.85258 282.529 -4.37579 468.787 18.6514"
                stroke="#981C20"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </VStack>
          <Text
            fontSize={"1.25rem"}
            fontWeight={500}
            color={"rgba(90, 119, 187, 1)"}
          >
            {lang === "ar" ? "في مركز المساندة القانونية، لا نمنحك حلول واستشارات قانونية فقط، بل نحرص أن تفهم الصورة كاملة، تعرف حقوقك مسبقًا، وتتخذ قراراتك بثقة." : useTranslation("home.infopart.subtitle1")}
          </Text>
          <Text
            fontSize={"1.15rem"}
            fontWeight={400}
            color={"rgba(95, 97, 102, 1)"}
            whiteSpace="pre-line"
          >
            {lang === "ar" ? "صممنا منصتنا لتكون قريبة منك: لغة بسيطة، أمثلة واقعية، وشرح واضح لا يحتاج خلفية قانونية." : useTranslation("home.infopart.subtitle2")}
          </Text>
        </VStack>
        <VStack w={"90%"} align={"center"}>
          <Box
            boxAlign={"center"}
            as="button"
            color={"white"}
            borderRadius={"2rem"}
            fontSize={"1.25rem"}
            mt="1rem"
            h={"4rem"}
            bgColor={"rgba(90, 119, 187, 1)"}
            onClick={() => {
              dispatch(setActiveLink("/knowledge-center"));
              navigate("/knowledge-center");
            }}
          >
            {lang === "ar" ? "اكتشف مركز المساندة القانونية الآن…" : useTranslation("shared.discoverknowledge")}
          </Box>
        </VStack>
      </VStack>

      <ContactSection />
    </>
  );
};
