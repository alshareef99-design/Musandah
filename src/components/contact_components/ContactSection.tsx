import { createListCollection, RadioGroup } from "@chakra-ui/react";
import {
  Text,
  VStack,
  Box,
  HStack,
  Circle,
  Group,
  Input,
  Link,
  Portal,
  Select,
  Field,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";



export const ContactSection = ()=>{
    const countries = [
        { label: "🇸🇦 Saudi Arabia (+966)", value: "+966" },
        { label: "🇪🇬 Egypt (+20)", value: "+20" },
        { label: "🇦🇪 UAE (+971)", value: "+971" },
      ];
      const [country] = useState(countries[0]); // default SA
      const collection = createListCollection({
        items: countries,
      });
      const lang = useSelector(selectLanguage)
    
      const [selectedCode, setSelectedCode] = useState("+966");
      const [number, setNumber] = useState("");
      const items = [
        { label: {
          en:" Inquire about subscription",
          ar: "استفسار عن اشتراك"
        }, value: "1" },
        { label:{
          en:" Inquire about packages",
          ar: "الباقات"
        }, value: "2" },
        { label: {
          en:"Technical issues",
          ar: "مشاكل تقنية"
        }, value: "3" },
      ];
    
    return (
        <VStack
        position="relative" // parent needs relative
        bgImage={`url(./Contact-info-bg.jpg)`}
        bgSize="cover"
        bgRepeat="no-repeat"
        border="1px solid #ddd"
        // left={0}
        zIndex={10}
        pt={"1rem"}
        pb={"1rem"}
        pr={{base:"0.5rem",lg:"4rem"}}
        pl={{base:"0.5rem",lg:"4rem"}}
        w="100%"
        minH="auto"
        align={"start"}
        color={"rgba(46, 54, 81, 1)"}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Overlay */}
        <Box
          position="absolute"
          inset={0}
          bg="white"
          opacity={0.75} // 🔹 controls background opacity
          zIndex={1}
        />

        {/* Content on top */}
        <VStack
          // maxW={{ base: "90vw", md: "100vw" }}
          zIndex={3}
          justifyContent={"space-between"}
          align={"start"}
          w={"100%"}
          p={2}
        >
          {/* <VStack>
            <Box display="inline-block">
              <Text fontSize={{ base: "1rem", md: "1.75rem" }}>
                {useTranslation("shared.ContactTitle")}
              </Text>

              <Box w="100%">
                <svg
                  viewBox="0 0 666 25"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  preserveAspectRatio="none" // 👈 stretches line with text width
                  //   style={{ width: "100%", height: "auto" }}
                >
                  <path
                    d="M1.98319 5.27582C112.477 0.639672 399.523 -2.36199 663.753 22.7206"
                    stroke="#981C20"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </VStack> */}
            <VStack align={"start"} gap={4}>
            {false && useTranslation("shared.ContactsubTitle")
              .split("\n")
              .filter((l) => l.trim().length > 0)
              .map((line, idx) => {
                const isBullet = line.trim().startsWith("•");
                const content = isBullet ? line.replace(/^\s*•\s*/, "") : line;
                return isBullet ? (
                  <HStack key={`intro-bullet-${idx}`}>
                    <Circle size={"10px"} bgColor={"rgba(152, 28, 32, 1)"} />
                    <Text fontSize={"1.1rem"} fontWeight={300}>{content}</Text>
                  </HStack>
                ) : (
                  <Text key={`intro-text-${idx}`} fontSize={"1.1rem"} fontWeight={400}>
                    {content}
                  </Text>
                );
              })}

            {/* How can we help you? */}
            <VStack align={"start"} gap={2}>
              <Text color="rgba(90, 119, 187, 1)">
                {useTranslation("shared.ContactHow")}
              </Text>
              {useTranslation("shared.ContactHowItems")
                .split("\n")
                .filter((l) => l.trim().length > 0)
                .map((line, idx) => (
                  <HStack key={`how-${idx}`}>
                    <Circle size={"10px"} bgColor={"rgba(152, 28, 32, 1)"} />
                    <Text fontWeight={300}>{line}</Text>
                  </HStack>
                ))}
            </VStack>
            <HStack
              align={"start"}
              gap={4}
              flexDir={{ base: "column", lg: "row" }}
            >
              <Text color="rgba(90, 119, 187, 1)">
                {useTranslation("shared.WhenToContact")}
              </Text>
              <VStack align={"start"}>
                {useTranslation("shared.WhenToContactItems")
                  .split("\n")
                  .filter((l) => l.trim().length > 0)
                  .map((line, idx) => (
                    <HStack key={`when-${idx}`}>
                      <Circle size={"10px"} bgColor={"rgba(152, 28, 32, 1)"} />
                      <Text fontWeight={300}>{line}</Text>
                    </HStack>
                  ))}
              </VStack>
            </HStack>
          </VStack>

          <HStack
            flexDir={{ base: "column", md: "row" }}
            zIndex={4}
            justifyContent={"space-around"}
            align={"stretch"}
            mt={"2rem"}
            mb={"2rem"}
            w={{base:"100vw",lg:"100%"}}
            maxW={"100vw"}
            overflow={"hidden"}
            gap={4}
          >
            <VStack
              bgColor={"white"}
              borderRadius={"2xl"}
              p={6}
              gap={4}
              width={{ base: "90%", md: "40%" , xl: "45%" }}
            >
              <Group maxW={"100%"} w={"100%"} attached>
                <Field.Root>
                  <HStack width={"100%"} gap={4}>
                    <VStack w={"50%"} align={"start"} gap={2}>
                      <Field.Label>{useTranslation("shared.fullname")}</Field.Label>
                      <Input borderRadius={"2xl"} p={4} />
                    </VStack>
                    <VStack w={"50%"} align={"start"} gap={2}>
                      <Field.Label>{useTranslation("shared.email")}</Field.Label>
                      <Input borderRadius={"2xl"} p={4} />
                    </VStack>
                  </HStack>

                  <VStack align={"start"} gap={2} w={"100%"}>
                    <Field.Label>{useTranslation("shared.phone")}</Field.Label>
                    <HStack width={"100%"} gap={2}>
                      {/* Country dropdown */}
                      <Select.Root
                        collection={collection}
                        size="sm"
                        width="8rem"
                        bgColor={"transparent"}
                        value={[selectedCode]}
                        onValueChange={(details) => {
                          // details.value is always an array
                          const selected = details.value[0];
                          setSelectedCode(selected);
                        }}
                      >
                        <Select.HiddenSelect />
                        <Select.Control>
                          <Select.Trigger bgColor={"white"} borderRadius={"2xl"} p={4}>
                            <Select.ValueText placeholder="Code" />
                          </Select.Trigger>
                          <Select.IndicatorGroup>
                            <Select.Indicator />
                          </Select.IndicatorGroup>
                        </Select.Control>
                        <Portal>
                          <Select.Positioner>
                            <Select.Content bgColor={"white"}>
                              {collection.items.map((item) => (
                                <Select.Item                       
                                key={item.value} item={item}>
                                  { item.label}
                                  <Select.ItemIndicator />
                                </Select.Item>
                              ))}
                            </Select.Content>
                          </Select.Positioner>
                        </Portal>
                      </Select.Root>

                      {/* Phone number input */}
                      <Input
                        borderRadius="2xl"
                        placeholder={`${country.value}xxxxxxxxx`}
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        p={4}
                        flex={1}
                      />
                    </HStack>
                  </VStack>

                  <VStack align={"start"} gap={2} w={"100%"}>
                    <Field.Label>{useTranslation("shared.msg")}</Field.Label>
                    <Input borderRadius={"2xl"} p={4} minH={"120px"} />
                  </VStack>
                  
                  <VStack align={"start"} gap={2} w={"100%"}>
                    <RadioGroup.Root maxW={"100%"} defaultValue="1">
                      <HStack gap="6" align={"center"} alignItems={"end"} flexDir={{base:"column",md:"row"}}>
                        {items.map((item) => (
                          <RadioGroup.Item key={item.value} value={item.value}>
                            <RadioGroup.ItemText>
                              {lang === "ar" ? item.label.ar : item.label.en}
                            </RadioGroup.ItemText>
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                          </RadioGroup.Item>
                        ))}
                      </HStack>
                    </RadioGroup.Root>
                  </VStack>

                  <Box
                    as="button"
                    bgColor={"rgba(90, 119, 187, 1)"}
                    color={"white"}
                    width={"100%"}
                    p={4}
                    borderRadius={"2xl"}
                    fontSize={"1.1rem"}
                    fontWeight={500}
                    _hover={{ bgColor: "rgba(90, 119, 187, 0.9)" }}
                  >
                    {useTranslation("shared.send")}
                  </Box>
                </Field.Root>
              </Group>
            </VStack>
            <VStack
              align={{base:"center", lg:"start"}}
              h={"100%"}
              w={{ base: "90%", md: "50%" , xl: "45%" }}
            >
              <Box textAlign={"start"}>
                <Box>
                  <Text p={4}>{useTranslation("shared.email")}</Text>
                  <Text
                    p={4}
                    fontSize={"1rem"}
                    fontWeight={300}
                    color={"rgba(95, 97, 102, 1)"}
                  >
                    {useTranslation("shared.sendmsg")}
                  </Text>
                </Box>
                <Text
                  p={4}
                  fontSize={"1rem"}
                  fontWeight={500}
                  color={"rgba(95, 97, 102, 1)"}
                >
                  {" "}
                  support@lsc-sa.net
                </Text>
              </Box>

              <Box textAlign={"start"}>
                <Box>
                  <Text p={4}>{useTranslation("shared.phone")}</Text>
                  <Text
                    p={4}
                    fontSize={"1rem"}
                    fontWeight={300}
                    color={"rgba(95, 97, 102, 1)"}
                  >
                    {lang === 'ar' ? 'تواصل معنا مباشرة على الرقم التالي' : 'Contact us directly on the following number'}
                  </Text>
                </Box>
                <Text
                  p={4}
                  fontSize={"1rem"}
                  fontWeight={500}
                  color={"rgba(95, 97, 102, 1)"}
                >
                  {" "}
                  {useTranslation("shared.phoneNumber")}
                </Text>
              </Box>

              <Box textAlign={"start"}>
                <Text p={4} fontWeight={600}>
                  {useTranslation("shared.followus")}
                </Text>
                <HStack>
                  <Box gap={"1rem"}>
                  <Link 
                  href="https://www.facebook.com/musanadaksa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
                >

                    <Circle
                      border={"2px solid"}
                      bg="transparent"
                      size={"3.5rem"}
                    >
                      <FaFacebookF className=" social-icon" size={"1.5rem"} />
                    </Circle>{" "}
                    </Link>

                  </Box>
                  <Box>
                  <Link 
                  href="https://www.instagram.com/musanada.sa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
                >
                    <Circle
                      border={"2px solid"}
                      bg="transparent"
                      size={"3.5rem"}
                    >
                      <FaInstagram className=" social-icon" size={"1.5rem"} />
                    </Circle>{" "}
                    </Link>
                  </Box>
                  <Box>
                  <Link 
                  href="https://x.com/musanadasa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
                >
                    <Circle
                      border={"2px solid"}
                      bg="transparent"
                      size={"3.5rem"}
                    >
                      <FaXTwitter className=" social-icon" size={"1.5rem"} />
                    </Circle>{" "}
                    </Link>
                  </Box>
                  <Box>
                  <Link 
                  href="https://www.linkedin.com/company/musanadahsa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
                >
                    <Circle
                      border={"2px solid"}
                      bg="transparent"
                      size={"3.5rem"}
                    >
                      <FaLinkedinIn className=" social-icon" size={"1.5rem"} />
                    </Circle>{" "}
                    </Link>
                  </Box>
                  <Box>
                  <Link 
                  href="https://www.tiktok.com/@musanada.sa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
                >
                    <Circle
                      border={"2px solid"}
                      bg="transparent"
                      size={"3.5rem"}
                    >
                      <FaTiktok className=" social-icon" size={"1.5rem"} />
                    </Circle>{" "}
                    </Link>
                  </Box>
                </HStack>{" "}
              </Box>

              <HStack
                maxW={"90%"}
                bgColor={"rgba(90, 119, 187, 0.1)"}
                m={2}
                p={4}
                borderRadius={"full"}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0576 1.75C14.2479 1.74999 15.9683 1.75012 17.3115 1.93066C18.6882 2.11575 19.7805 2.50313 20.6387 3.36133C21.4969 4.21953 21.8843 5.31182 22.0693 6.68848C22.2499 8.03174 22.25 9.75212 22.25 11.9424V12.0576C22.25 14.2479 22.2499 15.9683 22.0693 17.3115C21.8843 18.6882 21.4969 19.7805 20.6387 20.6387C19.7805 21.4969 18.6882 21.8843 17.3115 22.0693C15.9683 22.2499 14.2479 22.25 12.0576 22.25H11.9424C9.75212 22.25 8.03174 22.2499 6.68848 22.0693C5.31182 21.8843 4.21953 21.4969 3.36133 20.6387C2.50313 19.7805 2.11575 18.6882 1.93066 17.3115C1.75012 15.9683 1.74999 14.2479 1.75 12.0576V11.9424C1.74999 9.75212 1.75012 8.03174 1.93066 6.68848C2.11575 5.31182 2.50313 4.21953 3.36133 3.36133C4.21953 2.50313 5.31182 2.11575 6.68848 1.93066C8.03174 1.75012 9.75212 1.74999 11.9424 1.75H12.0576ZM12 3.25C9.73963 3.25 8.1196 3.25137 6.8877 3.41699C5.67747 3.57972 4.9549 3.88885 4.42188 4.42188C3.88885 4.9549 3.57972 5.67747 3.41699 6.8877C3.25137 8.1196 3.25 9.73963 3.25 12C3.25 14.2604 3.25137 15.8804 3.41699 17.1123C3.57972 18.3225 3.88885 19.0451 4.42188 19.5781C4.9549 20.1111 5.67747 20.4203 6.8877 20.583C8.1196 20.7486 9.73963 20.75 12 20.75C14.2604 20.75 15.8804 20.7486 17.1123 20.583C18.3225 20.4203 19.0451 20.1111 19.5781 19.5781C20.1111 19.0451 20.4203 18.3225 20.583 17.1123C20.7486 15.8804 20.75 14.2604 20.75 12C20.75 9.73963 20.7486 8.1196 20.583 6.8877C20.4203 5.67747 20.1111 4.9549 19.5781 4.42188C19.0451 3.88885 18.3225 3.57972 17.1123 3.41699C15.8804 3.25137 14.2604 3.25 12 3.25ZM11.2764 10.25C11.4815 10.2499 11.7034 10.2502 11.8906 10.2754C12.1099 10.3049 12.3902 10.3804 12.626 10.6162C12.8618 10.852 12.9373 11.1322 12.9668 11.3516C12.992 11.5388 12.9923 11.7607 12.9922 11.9658V17C12.9922 17.4142 12.6564 17.75 12.2422 17.75C11.828 17.75 11.4922 17.4142 11.4922 17V12C11.4922 11.9009 11.4923 11.8204 11.4912 11.751C11.4218 11.7499 11.3413 11.75 11.2422 11.75C10.828 11.75 10.4922 11.4142 10.4922 11C10.4922 10.5858 10.828 10.25 11.2422 10.25C11.2535 10.25 11.2649 10.25 11.2764 10.25ZM12.001 7C12.5533 7 13.001 7.44772 13.001 8C13.001 8.55228 12.5533 9 12.001 9H11.9922C11.4399 9 10.9922 8.55228 10.9922 8C10.9922 7.44772 11.4399 7 11.9922 7H12.001Z"
                    fill="#2E3651"
                  />
                </svg>
                <Text fontWeight={600}>
                  {lang === 'ar' ? 'تذكير:' : 'Reminder:'}
                </Text>
                <Text whiteSpace="pre-line">
                  {`${useTranslation("shared.respect")}\n\n${useTranslation("shared.ContactCTA")}`}
                </Text>
              </HStack>

            </VStack>
          </HStack>
        </VStack>
      </VStack>
    )
}