import { ContactBanner } from "@/components/contact_components/ContactBanner";
import { Box, VStack, Text, HStack, Circle } from "@chakra-ui/react";
import { ServicesList } from "@/components/services_components/ServicesList";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";
import { useTranslation } from "@/hooks/useTranslation";

export const Services = () => {
  const [clamping, setClamping] = useState(true);
  const [isClamped, setIsClamped] = useState(true);
  const textRef = useRef<HTMLDivElement>(null);
  const lang = useSelector(selectLanguage);

  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      // If scrollHeight > clientHeight, text is overflowing (clamped)
      setIsClamped(el.scrollHeight < el.clientHeight);
    }
  }, [clamping]);
   return (
    <VStack gap={"5rem"}>
      <ContactBanner
        bgPos="0% /27%"
        img="Services.jpg"
        title= {lang === "en" ? "Our Services" : "خدماتنا"}
        subtitle=""
        description=""
      />
      <VStack
        mt={"5%"}
        left={0}
        bgImage="url('/mask.svg')"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
        position="absolute"
        align={"start"}
        rotateX={"180deg"}
        width={{ base: "60vw", md: "40vw" }}
        height={{ base: "70vw", md: "50vw" }}
      />
      <Box zIndex={1} w={"90%"}>
        <Text
          color={"rgba(46, 54, 81, 1)"}
          fontWeight={600}
          fontSize={{ base: "1.25rem", lg: "1.75rem" }}
          mb={"2rem"}
        >
          {lang === "ar" ? "خدماتنا عبارة عن باقات توفي كل احتياجاتك، لا تُجزّئها." : "Our Package is a response to your needs, it is not a one-size-fits-all solution"}   </Text>

        <HStack
          flexDir={{ base: "column", lg: "row" }}
          gap={4}
        >
          <VStack w={{ base: "90%", lg: "50%" }} minH="25rem">
            <VStack
              w={{ base: "70%", lg: "90%" }}
              minH="25rem"
              position="relative"
              overflow="hidden"
            >
              {/* Background image 1 */}
              <Box
                bgImage={`url(service2.jpg)`}
                bgSize="cover"
                bgRepeat="no-repeat"
                borderRadius="2xl"
                position="absolute"
                top={0}
                left={0}
                w="60%"
                h="70%"
                bgPos="center"
              />

              {/* Background image 2 */}
              <Box
                bgImage={`url(service1.jpg)`}
                bgRepeat="no-repeat"
                bgSize="cover"
                borderRadius="2xl"
                position="absolute"
                bottom={0}
                left="40%"
                w="60%"
                h="70%"
                bgPos="center"
              />

              {/* Logo anchored bottom-left */}
              <Box
                bgImage={`url(logo-ar.png)`}
                bgRepeat="no-repeat"
                bgSize="contain"  
                position="absolute"
                w="80%"
                h="70%"
                bottom={0}
                left={0}
                transform="scale(0.4) translate(-0%, 0%)" // 👈 scale + keep anchored
                transformOrigin="bottom left" // 👈 pivot stays at bottom-left corner
                bgPos="bottom left"
              />
            </VStack>
          </VStack>

          <VStack
            width={"75%"}
            overflow={"hidden"}
            borderRadius={"2xl"}
            gap={0}
          >
            <HStack align={"stretch"} gap={0} >
              <VStack w={"50%"} p={4} align={"center"} bgColor={"rgba(247, 248, 252, 1)"}>
                <Text
                  color={"rgba(46, 54, 81, 1)"}
                  fontWeight={500}
                  fontSize={{ base: "1.25rem", lg: "1.5rem" }}
                >
                  {useTranslation("services.info.title")}
                </Text>
                <Text
                  color={"rgba(95, 97, 102, 1)"}
                  fontWeight={400}
                  fontSize={{ base: "0.9rem", lg: "1rem" }}
                  >
                    {useTranslation("services.info.subtitle")}
                    </Text>
              </VStack>

              <VStack w={"50%"} p={4} bgColor={"rgba(237, 241, 255, 1)"}>
                <Text
                  color={"rgba(46, 54, 81, 1)"}
                  fontWeight={500}
                  fontSize={{ base: "1.25rem", lg: "1.5rem" }}
                >
                  {useTranslation("services.info.title1")}
                </Text>
                <Text
                  color={"rgba(95, 97, 102, 1)"}
                  fontWeight={400}
                  fontSize={{ base: "0.9rem", lg: "1rem" }}>
                  {useTranslation("services.info.subtitle1")}

                </Text>
              </VStack>
            </HStack>
            <HStack align={"stretch"} borderRadius={"2xl"} gap={0}>
              <VStack w={"50%"} p={4} bgColor={"rgba(237, 241, 255, 1)"}>
                <Text
                  color={"rgba(46, 54, 81, 1)"}
                  fontWeight={500}
                  fontSize={{ base: "1.25rem", lg: "1.5rem" }}
                >
                  {useTranslation("services.info.title2")}
                </Text>
                <Text
                  color={"rgba(95, 97, 102, 1)"}
                  fontWeight={400}
                  fontSize={{ base: "0.9rem", lg: "1rem" }}
                >                 
                 {useTranslation("services.info.subtitle2")}

                </Text>
              </VStack>

              <VStack w={"50%"} p={4} bgColor={"rgba(247, 248, 252, 1)"}>
                <Text
                  color={"rgba(46, 54, 81, 1)"}
                  fontWeight={500}
                  fontSize={{ base: "1.25rem", lg: "1.5rem" }}
                >
              {useTranslation("services.info.title3")}
                </Text>
                <Text
                  color={"rgba(95, 97, 102, 1)"}
                  fontWeight={400}
                  fontSize={{ base: "0.9rem", lg: "1rem" }}>
            {useTranslation("services.info.subtitle3")}

                </Text>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
      </Box>

      <VStack
        className="contact-hero"
        bgImage={`url(servicebanner.jpg)`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="center"
        border="1px solid #ddd"
        position="relative"
        left={0}
        zIndex={10}
        w="100%"
        minH="25rem" // 👈 now flexible, expands with text
        p={4}
      >
        <VStack
          p={4}
          className="overlay"
          textAlign="center"
          color="white"
          alignItems="center"
          justifyContent="center"
          gap="1.5rem"
          pl={4}
          pr={4}
        >
          <Text fontSize={{ base: "1.25rem", md: "1.75rem" }} fontWeight={600}>
                  {useTranslation("services.title")}
          </Text>

          <Text
            // ref={textRef}
            fontSize={{ base: "1rem", md: "1.25rem" }}
            fontWeight={400}
            whiteSpace="pre-line"
            lineClamp={clamping ? 3 : undefined}
          >
            {/* {text} */}
            {useTranslation("services.subtitle")}


          </Text>
          {isClamped && (
            <Box
              as="button"
              bgColor="rgba(90, 119, 187, 1)"
              color="white"
              px="1rem"
              py="0.5rem"
              borderRadius="md"
              onClick={() => setClamping(!clamping)}
            >
              {clamping ? useTranslation("shared.readmore") : useTranslation("shared.readless")}
            </Box>
          )}
        </VStack>
      </VStack>

      <VStack w={"80vw"} m={8} align={"start"} gap={8}>
        <VStack align={"start"}>
          <Text
            color={"rgba(46, 54, 81, 1)"}
            fontSize={{ base: "1.25rem", lg: "1.75rem" }}
          >
            {" "}
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
        </VStack>{" "}
        <Text
          textAlign={"start"}
          fontWeight={400}
          color={"rgba(95, 97, 102, 1)"}
          fontSize={{ base: "0.9rem", lg: "1.2rem" }}
        >          {
            lang === "ar" ? `
          في مساندة، صممنا باقات قانونية تغطي احتياجاتك المختلفة — من دعم أساسي
          إلى تغطية شاملة. اختر الباقة التي تناسبك، وكن دائمًا في أمان قانوني.` :
            `
          At Musanadah, we have designed legal packages that cover your various needs — from basic support to comprehensive coverage. Choose the package that suits you and always be legally secure.`
          }
        </Text>
        <ServicesList />
      </VStack>

      <VStack w={"100vw"} bgColor={"rgba(247, 248, 252, 1)"} p={{base:"1rem", md:"3rem"}} m={8} align={"start"} gap={8}>
        <VStack align={"start"}>
          <Text
            color={"rgba(46, 54, 81, 1)"}
            fontSize={{ base: "1.25rem", lg: "1.75rem" }}
          >
            {
              useTranslation("services.expanding")
            }
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
        </VStack>{" "}
        <Text
          lineHeight={"2.5rem"}
          whiteSpace={"pre-line"}
          textAlign={"start"}
          color={"rgba(95, 97, 102, 1)"}
          fontWeight={400}
          fontSize={{ base: "0.9rem", lg: "1.2rem" }}
        >
          {useTranslation("services.expandingsubtitle")}
        </Text>
        <HStack w={"80%"} align={"stretch"} flexDir={{ base: "column", md: "row" }} justifyContent={"space-between"}>
          <VStack w={{ base: "100%", md: "45%" }} align={"start"}>
            <Text
              color={"rgba(90, 119, 187, 1)"}
              fontWeight={400}
              fontSize={{ base: "0.9rem", lg: "1.25rem" }}
            >
               {lang === "ar" ?" لكننا نعمل حاليًا على تطوير باقات جديدة تخدم:" :"We are currently working on new packages that serve:"}
            </Text>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                >
                 {lang === "ar" ? " أصحاب الأعمال والمشاريع" :"Entrepreneurs and small business owners"}
                
                </Text>
            </HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                > 
                
                 {lang === "ar" ? " المستقلين والمهنيين" : "Freelancers and professionals"    }                
                </Text>
            </HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
               > {lang === "ar" ? " المؤسسات والجمعيات غير الربحية" : "Non-profit organizations and charitable entities"}</Text>
            </HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
               > {lang === "ar" ? " الفئات الضعيفة قانونيًا أو محدودي الدخل" : "Legally vulnerable or low-income individuals"}</Text>
            </HStack>
          </VStack>
          <VStack w={{ base: "100%", md: "45%" }} align={"start"}>
            <Text
              color={"rgba(90, 119, 187, 1)"}
              fontWeight={400}
              fontSize={{ base: "0.9rem", lg: "1.25rem" }}
            >
               {lang === "ar" ? "كما سنطلق قريبًا خدمات متخصصة تشمل:" :"Soon, we’ll also offer specialized services like:"}
            </Text>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
              <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                >
{
                   lang === "ar" ? " المرافعات والتقاضي" :"Contract drafting and legal review for commercial needs"
}                </Text>
</HStack>

<HStack>
<Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                >
{
                   lang === "ar" ? " مراجعة وصياغة العقود التجارية" :"Contract drafting and legal review for commercial needs"
}                </Text>

            </HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                > 
                 {lang === "ar" ? "خدمات التحكيم والتسوية" : "Arbitration and dispute resolution" }
                </Text>
            </HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
              <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                >
{
                   lang === "ar" ? " التمثيل الكامل أمام المحاكم " :"Contract drafting and legal review for commercial needs"
}                </Text>
</HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                > 
                 {lang === "ar" ? " التمثيل في القضايا العقارية والمالية والجنائية" : "Representation in real estate, financial, and criminal cases"}
                </Text>
            </HStack>
            <HStack>
              <Circle size="10px" bgColor="rgba(152, 28, 32, 1)" />
             <Text
                  color={"rgba(95, 97, 102, 1)"}    
                  fontWeight={400}
                  fontSize={{ base: "0.8rem", lg: "1.1rem" }}
                > 
                 {lang === "ar" ? "   حماية الملكية الفكرية" : "Intellectual property protection"}                
                </Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};
