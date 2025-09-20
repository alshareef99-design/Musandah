import { VStack, Text, Box, HStack, Image, Circle } from "@chakra-ui/react";
import { plans } from "./ServicesList";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";

export const ServiceDetails = () => {
  const lang = useSelector(selectLanguage);

  const filteredPlan = plans.find(
    (plan) => plan.ref === window.location.pathname.split("/")[2]
  );

  return (
    <VStack w={{ base: "90%", md: "80%"}} mt={"2rem"} mb={"2rem"} mr={"5%"} ml={"5%"} align={"start"}>
      <VStack>
        <Text>{  lang === "en" ? filteredPlan?.title?.en : filteredPlan?.title?.ar}</Text>
        <svg
          viewBox="0 0 201 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.9025 9.90278C34.9233 3.22437 120.539 -5.08714 198.834 15.094"
            stroke="#981C20"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </VStack>
            <Text
        fontWeight={400}
        color={"rgba(90, 119, 187, 1)"}
        fontSize={{ base: "1rem", lg: "1.2rem" }}
      >
        {lang === "en" ? filteredPlan?.text?.en : filteredPlan?.text?.ar}
      </Text>
      <Text
        fontWeight={400}
        color={"rgba(95, 97, 102, 1)"}
        fontSize={{ base: "1rem", lg: "1.2rem" }}
      >
        { lang === "en" ? filteredPlan?.subtitle?.en : filteredPlan?.subtitle?.ar}
      </Text>

      <VStack gap={"1rem"} justifyContent={"space-between"} w={"100%"}>
        <VStack
          w={{ base: "100%", md: "80%" }}
          mt={"2rem"}
          borderRadius={"2xl"}
          shadow={"md"}
          p={"2rem"}
          gap={"3rem"}
        >
          <Image
            src={`/${filteredPlan?.Image}`}
            alt={filteredPlan?.title.en}
            w="6rem"
            h="8.5rem"
            objectFit="contain"
          />
          <VStack w={"100%"} align={"start"} gap={"2rem"}>
            <HStack w={"100%"} align={"stretch"} flexDir={{ base: "column", md: "row" }}>
              <VStack
                p={"1rem"}
                align="start"
                w={{ base: "100%", md: "50%" }}
                bgColor={"rgba(247, 248, 252, 1)"}
              >
                <Text color={"rgba(46, 54, 81, 1)"}>{lang == "ar" ? "ما الذي تحصل عليه؟" : "What will you get?"}</Text>
                {filteredPlan?.description.map((description, index) => (
                  <HStack key={index}>
                    <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
                    <Text fontWeight={300} fontSize={{ base: "0.8rem", lg: "0.8rem" }}>{  lang === "en" ? description.en : description.ar}</Text>
                  </HStack>
                ))}
              </VStack>
              <VStack
                p={"1rem"}
                gap={"1rem"}
                align="start"
                bgColor={"rgba(247, 248, 252, 1)"}
                w={{ base: "100%", md: "50%" }}
                display="none"
              >
            <Text color={"rgba(46, 54, 81, 1)"}> { lang === "en" ? filteredPlan?.title?.en + " matches" : filteredPlan?.title?.ar + " تناسب "} :</Text>
                {filteredPlan?.whofor.map((whofor, index) => (
                  <HStack key={index}>
                    <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
                    <Text fontWeight={300} fontSize={{ base: "0.8rem", lg: "0.8rem" }}>{ lang === "en" ? whofor.en : whofor.ar}</Text>
                  </HStack>
                ))}
              </VStack>
            </HStack>
            <VStack>
              <VStack align="start">
                {filteredPlan?.features.map((feature, index) => (
                  <HStack key={index}>
                    <Image
                      w="1rem"
                      src="/servicescale.png"
                      alt="servicescale"
                    />
                    <Text fontWeight={300}>{ lang === "en" ? feature.en : feature.ar}</Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </VStack>
          <Box display={"flex"} justifyContent={"space-between"}>
            {" "}
            <Text color={"rgba(176, 13, 13, 1)"} paddingInlineEnd={4}>
              {filteredPlan?.price?.ar}
            </Text>{" "}
            {lang === "en" ? "SAR / year" : "ريال / سنويًا"}
          </Box>
          <Box
            as="button"
            bgColor={"rgba(90, 119, 187, 1)"}
            color={"white"}
            borderRadius={"2xl"}
            width={"100%"}
            onClick={() => window.open("https://portal.lsc-sa.net/", "_blank")}
          >
            {" "}
            {lang === "en" ? "Subscribe Now" : "اشترك الآن"}
          </Box>
        </VStack>
      </VStack>
    </VStack>
  );
};
