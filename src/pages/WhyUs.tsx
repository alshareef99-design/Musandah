import { VStack, Text, Box, HStack, Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";

export const WhyUs = () => {
  const lang = useSelector(selectLanguage);

  const content = {
    en: {
      title: "Why Us?",
      subtitle: "A different legal experience.. starts with understanding you, and ends with guiding you and your comfort",
      mainText: `At "Legal Support Center", we didn't come to repeat what exists.. we came to reformulate the experience from scratch.
      The law doesn't have to be complicated, or in difficult language.
      Let's make everything closer, clearer, and easier.. in a way that suits you, not what's imposed on you.

      We started with one question:
      How can legal service be more fair.. and more humane?
      And from here, our features emerged:`,
      features: [
        "Integrated digital experience: from your inquiry to receiving consultation.. everything remotely, without complexity or need to attend.",
        "Privacy and security: your data is fully protected, and your connection is encrypted from start to finish.",
        "Complete transparency: clear prices and packages designed to fit your needs.. without hidden or additional costs.",
        "Licensed lawyers: professional consultations from specialized legal consultants, giving you security and quality under the supervision of an accredited legal partner.",
        "Direct digital integration: smart connection with Nafath and official systems to save you time and procedures."
      ],
      conclusion: `Legal Support Center.. with you step by step
      Whether you:
      • Need urgent consultation,
      • Or looking for legal peace of mind throughout the year

      "Legal Support Center" is here.. we translate the law in clear language, make access easier for you, and keep you always ready for your next legal step.

      With "Legal Support Center".. everything you need is now within your reach.`
    },
    ar: {
      title: "لماذا نحن؟",
      subtitle: "تجربة قانونية مختلفة.. تبدأ من فهمك، وتنتهي بتوجيهك وراحتك",
      mainText: `في "مركز المساندة القانونية"، ما جينا نعيد نفس اللي موجود.. جينا نعيد صياغة التجربة من الأساس.
      القانون مو لازم يكون معقَّد، ولا بلغة صعبة.
      خلينا كل شيء أقرب، أوضح، وأسهل.. بالطريقة التي تناسبك، مو الي تفرض عليك.

      بدأنا بسؤال واحد:
      كيف تكون الخدمة القانونية أكثر إنصافًا.. وأكثر إنسانية؟
      ومن هنا، مّمنا ميزاتنا:`,
      features: [
        "تجربة رقمية متكاملة: من استفسارك حتى استلام الاستشارة.. كل شئ عن بُعد، بدون تعقيد أو حاجة للحضور.",
        "خصوصية وأمان: بياناتك محمية بالكامل، واتصالك مشفَّر من البداية للنهاية.",
        "شفافية كاملة: أسعار واضحة وباقات مصممة على قد احتياجك.. بلا مصاريف خفية أو إضافية.",
        "محامون مرخّصون: استشارات مهنية من مستشارين قانونيين متخصيين، تعطيك امان وجودة تحت إشراف شريك قانوني معتمد.",
        "تكامل رقمي مباشر: ربط ذكي مع نفاذ وأنظمة الجهات الرسمية عشان نختصر عليك الوقت والإجراءات."
      ],
      conclusion: `مركز المساندة القانونية.. معك خطوة بخطوة
      سواء كنت:
      • تحتاج استشارة عاجلة،
      • أو تبحث عن راحة بال قانونية طول السنة

      "مركز المساندة القانونية" هنا.. نترجم القانون بلغة واضحة، نسهّل لك الوصول، ونخليك دايمًا مستعد لخطوتك القانونية التالية.

      مع "مركز المساندة القانونية".. كل ما تحتاجه أصبح في متناولك.`
    }
  };

  const currentContent = content[lang as keyof typeof content];

  return (
    <Container maxW="container.xl" py="4rem" dir={lang === "ar" ? "rtl" : "ltr"}>
      <VStack spacing="3rem" align="stretch">
        {/* Header Section */}
        <VStack spacing="2rem" textAlign="center">
          <Text
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="rgba(90, 119, 187, 1)"
            lineHeight="1.2"
          >
            {currentContent.title}
          </Text>
          
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            color="rgba(95, 97, 102, 1)"
            maxW="4xl"
            lineHeight="1.6"
          >
            {currentContent.subtitle}
          </Text>
        </VStack>

        {/* Main Content */}
        <Box
          bg="rgba(247, 248, 252, 1)"
          borderRadius="2xl"
          p={{ base: "2rem", md: "3rem", lg: "4rem" }}
          boxShadow="md"
        >
          <VStack spacing="2rem" align="stretch">
            {/* Main Text */}
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="rgba(46, 54, 81, 1)"
              lineHeight="1.8"
              whiteSpace="pre-line"
            >
              {currentContent.mainText}
            </Text>

            {/* Features List */}
            <VStack spacing="1.5rem" align="stretch">
              {currentContent.features.map((feature, index) => (
                <HStack key={index} align="flex-start" spacing="1rem">
                  <Box
                    w="8px"
                    h="8px"
                    bg="rgba(152, 28, 32, 1)"
                    borderRadius="50%"
                    mt="0.5rem"
                    flexShrink={0}
                  />
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="rgba(46, 54, 81, 1)"
                    lineHeight="1.6"
                  >
                    {feature}
                  </Text>
                </HStack>
              ))}
            </VStack>

            {/* Conclusion */}
            <Box
              bg="rgba(90, 119, 187, 0.1)"
              borderRadius="xl"
              p="2rem"
              borderLeft={lang === "ar" ? "none" : "4px solid rgba(90, 119, 187, 1)"}
              borderRight={lang === "ar" ? "4px solid rgba(90, 119, 187, 1)" : "none"}
            >
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="rgba(46, 54, 81, 1)"
                lineHeight="1.8"
                whiteSpace="pre-line"
                fontWeight="500"
              >
                {currentContent.conclusion}
              </Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};
