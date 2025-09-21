"use client";

import { ContactBanner } from "@/components/contact_components/ContactBanner";
import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { VisitsStats } from "@/components/home_components/VisitsStats";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

type SectionName = 'musanadah' | 'vision' | 'mission' | 'values' | 'legalPartner';

export const About = () => {
  const [expandedSection, setExpandedSection] = useState<SectionName | null>(null);

  const toggleSection = (sectionName: SectionName) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  return (
    <VStack gap={8}>
      {/* Banner */}
      <ContactBanner
        bgPos="0% /27%"
        img="About.jpg"
        title={useTranslation("aboutPage.bannerTitle")}
        subtitle=""
        description=""
      />

      {/* Headline */}
      {/* <Text
        fontSize={{ base: "1.5rem", lg: "2rem" }}
        color={"rgba(46, 54, 81, 1)"}
      >
        {useTranslation("aboutPage.headline")}
      </Text> */}

      <VStack gap={8} w={"90vw"}>
        {/* Musanadah Section */}
        <HStack
          align={"stretch"}
          flexDir={{ base: "column", md: "row" }}
          gap={0}
          w={"90%"}
        >
          <VStack
            bgImage={`url(about1.jpg)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "63.75rem" }}
          />
          <VStack
            align={"start"}
            width={"100%"}
            p={"5%"}
            bgColor={"rgba(237, 241, 255, 1)"}
          >
            <VStack align={"start"}>
              <VStack>
                <Text
                  fontSize={{ base: "1.5rem", lg: "2rem" }}
                  color={"rgba(46, 54, 81, 1)"}
                >
                  {useTranslation("aboutPage.musanadah.title")}
                </Text>
                <svg
                  viewBox="0 0 132 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.89078 10.812C23.4156 3.83051 79.1414 -5.26891 129.846 14.185"
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
                fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                textAlign={"start"}
                lineClamp={expandedSection === 'musanadah' ? undefined : 6}
                whiteSpace="pre-line"
              >
                {useTranslation("aboutPage.musanadah.text")}
              </Text>
              <Box
                as="button"
                bgColor={"transparent"}
                onClick={() => toggleSection('musanadah')}
              >
                {expandedSection === 'musanadah' ? useTranslation("shared.readless") : useTranslation("shared.readmore")}
              </Box>
            </VStack>
          </VStack>
        </HStack>

        {/* Vision Section */}
        <HStack
          align={"stretch"}
          flexDir={{ base: "column", md: "row" }}
          gap={0}
          w={"90%"}
        >
          <VStack align={"start"} width={"100%"} p={"5%"} bgColor={"rgba(249, 240, 241, 1)"}>
            <VStack align={"start"}>
              <VStack>
                <Text fontSize={{ base: "1.5rem", lg: "2rem" }} color={"rgba(46, 54, 81, 1)"}>
                  {useTranslation("aboutPage.vision.title")}
                </Text>

                <svg viewBox="0 0 132 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.89078 10.812C23.4156 3.83051 79.1414 -5.26891 129.846 14.185"
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
                fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                textAlign={"start"}
                lineClamp={expandedSection === 'vision' ? undefined : 6}
                whiteSpace="pre-line"
              >
                {useTranslation("aboutPage.vision.text")}
              </Text>
              <Box
                as="button"
                bgColor={"transparent"}
                onClick={() => toggleSection('vision')}
              >
                {expandedSection === 'vision' ? useTranslation("shared.readless") : useTranslation("shared.readmore")}
              </Box>
            </VStack>
          </VStack>
          <VStack
            bgImage={`url(about2.jpg)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "63.75rem" }}
          />
        </HStack>

        {/* Mission Section */}
        <HStack align={"stretch"} flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack
            bgImage={`url(about3.png)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "63.75rem" }}
          />
          <VStack align={"start"} width={"100%"} p={"5%"} bgColor={"rgba(237, 241, 255, 1)"}>
            <VStack align={"start"}>
              <VStack>
                <Text fontSize={{ base: "1.5rem", lg: "2rem" }} color={"rgba(46, 54, 81, 1)"}>
                  {useTranslation("aboutPage.mission.title")}
                </Text>
                <svg viewBox="0 0 132 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.89078 10.812C23.4156 3.83051 79.1414 -5.26891 129.846 14.185"
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
                fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                textAlign={"start"}
                lineClamp={expandedSection === 'mission' ? undefined : 6}
                whiteSpace="pre-line"
              >
                {useTranslation("aboutPage.mission.text")}
              </Text>
              <Box
                as="button"
                bgColor={"transparent"}
                onClick={() => toggleSection('mission')}
              >
                {expandedSection === 'mission' ? useTranslation("shared.readless") : useTranslation("shared.readmore")}
              </Box>
            </VStack>
          </VStack>
        </HStack>

        {/* Values Section */}
        <HStack align={"stretch"} flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack align={"start"} width={"100%"} p={"5%"} bgColor={"rgba(249, 240, 241, 1)"}>
            <VStack align={"start"}>
              <VStack>
                <Text fontSize={{ base: "1.5rem", lg: "2rem" }} color={"rgba(46, 54, 81, 1)"}>
                  {useTranslation("aboutPage.values.title")}
                </Text>
                <svg viewBox="0 0 132 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.89078 10.812C23.4156 3.83051 79.1414 -5.26891 129.846 14.185"
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
                fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                textAlign={"start"}
                lineClamp={expandedSection === 'values' ? undefined : 6}
                whiteSpace="pre-line"
              >
                {useTranslation("aboutPage.values.text")}
              </Text>
              <Box
                as="button"
                bgColor={"transparent"}
                onClick={() => toggleSection('values')}
              >
                {expandedSection === 'values' ? useTranslation("shared.readless") : useTranslation("shared.readmore")}
              </Box>
            </VStack>
          </VStack>
          <VStack
            bgImage={`url(about4.jpg)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "63.75rem" }}
          />
        </HStack>

        {/* Legal Partner Section */}
        <HStack align={"stretch"} flexDir={{ base: "column", md: "row" }} gap={0} w={"90%"}>
          <VStack
            bgImage={`url(about5.png)`}
            bgSize="cover"
            bgPos={"center"}
            bgRepeat="no-repeat"
            border="1px solid #ddd"
            minH={"28rem"}
            w={{ base: "90%", md: "63.75rem" }}
          />
          <VStack align={"start"} width={"100%"} p={"5%"} bgColor={"rgba(237, 241, 255, 1)"}>
            <VStack align={"start"}>
              <VStack>
                <Text fontSize={{ base: "1.5rem", lg: "2rem" }} color={"rgba(46, 54, 81, 1)"}>
                  {useTranslation("aboutPage.legalPartner.title")}
                </Text>
                <svg viewBox="0 0 132 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.89078 10.812C23.4156 3.83051 79.1414 -5.26891 129.846 14.185"
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
                fontSize={{ base: "1.2rem", lg: "1.5rem" }}
                textAlign={"start"}
                lineClamp={expandedSection === 'legalPartner' ? undefined : 6}
                whiteSpace="pre-line"
              >
                {useTranslation("aboutPage.legalPartner.text")}
              </Text>
              <Box
                as="button"
                bgColor={"transparent"}
                onClick={() => toggleSection('legalPartner')}
              >
                {expandedSection === 'legalPartner' ? useTranslation("shared.readless") : useTranslation("shared.readmore")}
              </Box>
            </VStack>
          </VStack>
        </HStack>
      </VStack>

      {/* Bottom Stats Section */}
      <Box display="flex" w="100vw">
        <Box
          className="contact-hero"
          bgImage={`url(Home3.jpg)`}
          bgSize="cover"
          bgRepeat="no-repeat"
          border="1px solid #ddd"
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack color={useColorModeValue("#ffffffff", "gray.400")}>
            <VisitsStats />
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
};