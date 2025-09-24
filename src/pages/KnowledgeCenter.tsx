import { Text, VStack, HStack, Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ContactBanner } from "@/components/contact_components/ContactBanner";
import { ArticleList } from "@/components/knowledge_components/ArticleList";
import type { articleProbs } from "@/types/types";
import { ProceduresList } from "@/components/knowledge_components/ProceduresList";
import type { procedureProbs } from "@/types/types";
import { Tab } from "@/components/knowledge_components/Tab";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/languageSlice";
import { useTranslation } from "@/hooks/useTranslation";
export const procedures: procedureProbs[] = [
  {
    id: 1,
    title: {
      en: "Filing a Labor Lawsuit Online",
      ar: "رفع دعوى عمالية إلكترونيًا",
    },
    bgColor: "rgba(247, 234, 230, 1)",
    description: {
      en: "Step-by-step guidance for submitting a labor lawsuit electronically through official platforms, from complaint filing to case registration.",
      ar: "إرشادات خطوة بخطوة لتقديم دعوى عمالية عبر المنصات الرسمية، من تقديم الشكوى وحتى قيد الدعوى.",
    },
    subtitle: {
      ar: "سابتايتل: خطوات واضحة من الشكوى حتى قيد الدعوى عبر المنصات الرسمية.",
      en: "Clear steps from complaint submission to case registration through official platforms.",
    },
    featured: true,
    date: "",
    ref: "",
  },
  {
    id: 2,
    title: {
      en: "Submitting a Complaint to a Government Authority",
      ar: "تقديم شكوى لجهة حكومية",
    },
    bgColor: "rgba(237, 241, 255, 1)",
    description: {
      en: "Guidance on drafting, submitting, and following up on official complaints using the appropriate government platform.",
      ar: "إرشادات لصياغة وتقديم ومتابعة الشكاوى الرسمية عبر المنصة الحكومية المناسبة.",
    },
    subtitle: {
      en: "Drafting the complaint, submitting it through the proper platform, and tracking it using a reference number.",
      ar: "صياغة الشكوى، التقديم عبر المنصة المناسبة، والمتابعة برقم مرجعي.",
    },
    featured: true,
    date: "",
    ref: "",
  },
  {
    id: 3,
    title: {
      en: "Issuing an Electronic Power of Attorney",
      ar: "إصدار توكيل إلكتروني",
    },
    bgColor: "rgba(231, 242, 235, 1)",
    description: {
      en: "Simplified steps to issue or cancel a power of attorney online via the Ministry of Justice portal.",
      ar: "خطوات مبسطة لإصدار أو إلغاء التوكيل إلكترونيًا عبر بوابة وزارة العدل.",
    },
    subtitle: {
      ar: "إصدار أو إلغاء التوكيل بسهولة عبر بوابة العدل بخطوات مبسطة.",
      en: "Easily issue or cancel a power of attorney online through the Ministry of Justice portal.",
    },
    featured: true,
    date: "",
    ref: "",
  },
  {
    id: 4,
    title: {
      en: "Electronic Lease Contract",
      ar: "عقد إيجار إلكتروني",
    },
    bgColor: "rgba(242, 233, 246, 1)",
    description: {
      en: "Register your residential lease contract through the official platform to safeguard the rights of both parties.",
      ar: "تسجيل عقد الإيجار السكني عبر المنصة الرسمية لحماية حقوق الطرفين.",
    },
    subtitle: {
      en: "Registering the residential lease contract through the official platform to protect the rights of both parties.",
      ar: "تسجيل العقد السكني عبر المنصة الرسمية لحماية حقوق الطرفين.",
    },
    featured: true,
    date: "",
    ref: "",
  },
];


export const articles: articleProbs[] = [
  {
    id: 1,
    title: {
      en: "The Difference Between Legal Consultation and Legal Representation",
      ar: "الفرق بين الاستشارة القانونية والتمثيل القانوني",
    },
    description: {
      en: "Legal consultation involves getting professional advice from a lawyer regarding your legal rights and options, whereas legal representation means that a lawyer acts on your behalf in legal proceedings or negotiations. Understanding this difference helps you know what services you need and when.",
      ar: "تشمل الاستشارة القانونية الحصول على نصيحة مهنية من محامٍ بشأن حقوقك القانونية وخياراتك، في حين يعني التمثيل القانوني أن المحامي يتصرف نيابة عنك في الإجراءات القانونية أو المفاوضات. فهم هذا الفرق يساعدك على معرفة الخدمات التي تحتاجها ومتى.",
    },
    image: "./article1.jpg",
    date: "2023-06-01",
    ref: "/article/1",
    featured: true,
    subtitle: {
      ar: "دليل مبسط يساعدك على تقديم شكوى عمالية عبر المنصات الرسمية من البداية حتى صدور الحكم.",
      en: "A simple guide that helps you file a labor lawsuit through the official platforms from the beginning to the issuance of a judgment.",
    },
  },
  {
    id: 2,
    title: {
      en: "How to File a Labor Lawsuit Step by Step",
      ar: "كيفية رفع دعوى عمالية خطوة بخطوة",
    },
    description: {
      en: "Filing a labor lawsuit requires following a set of legal steps starting from gathering evidence, submitting complaints to labor offices, and possibly going to court. This article guides you through the entire process clearly and legally.",
      ar: "يتطلب رفع دعوى عمالية اتباع مجموعة من الخطوات القانونية بدءًا من جمع الأدلة، وتقديم الشكاوى إلى مكاتب العمل، وربما اللجوء إلى المحكمة. يرشدك هذا المقال خلال العملية بالكامل بشكل واضح وقانوني.",
    },
    image: "./article2.jpg",
    date: "2023-06-10",
    ref: "/article/2",
  },
  {
    id: 3,
    title: {
      en: "Women’s Rights Under the New Personal Status Law",
      ar: "حقوق النساء في ظل قانون الأحوال الشخصية الجديد",
    },
    description: {
      en: "Explore the rights and protections granted to women under the latest Personal Status Law reforms, including marriage, divorce, custody, and inheritance matters.",
      ar: "استكشف الحقوق والحمايات التي منحها قانون الأحوال الشخصية الجديد للنساء، بما في ذلك مسائل الزواج والطلاق والحضانة والميراث.",
    },
    image: "./article3.jpg",
    date: "2023-07-01",
    ref: "/article/3",
  },
  {
    id: 4,
    title: {
      en: "Can a Resident File a Case Against Their Employer? And How?",
      ar: "هل يمكن للمقيم رفع قضية ضد صاحب العمل؟ وكيف؟",
    },
    description: {
      en: "This article explains the rights of residents to take legal action against their employers, the grounds for lawsuits, and the procedures to follow in the Saudi legal system.",
      ar: "يوضح هذا المقال حقوق المقيمين في اتخاذ إجراءات قانونية ضد أصحاب العمل، وأسباب الدعاوى، والإجراءات التي يجب اتباعها في النظام القانوني السعودي.",
    },
    featured: true,
    subtitle: {
      ar: "تعرّف على الكلمات الأساسية التي تفتح لك فهم أوسع لعالم القانون وتختصر عليك الطريق.",
      en: " Learn the key terms that open up a broader understanding of the legal world and shorten your path.",
    },

    image: "./article2.jpg",
    date: "2023-07-15",
    ref: "/article/4",
  },
  {
    id: 5,
    title: {
      en: "When Do You Need a Power of Attorney — and How to Issue It Electronically?",
      ar: "متى تحتاج إلى توكيل رسمي وكيف تصدره إلكترونيًا؟",
    },
    featured: true,
    subtitle: {
      ar: "اعرف متى يكفيك استشارة سريعة، ومتى تحتاج محامٍ يمثلّك أمام المحكمة.",
      en: " Learn when you need a quick consultation, and when you need a lawyer to represent you before the court.",
    },
    description: {
      en: "A Power of Attorney (POA) allows you to delegate legal authority to someone else. Learn when it's necessary, the types of POA, and how to issue one electronically according to Saudi regulations.",
      ar: "يتيح التوكيل الرسمي لك تفويض السلطة القانونية لشخص آخر. تعرّف على متى يكون ذلك ضروريًا وأنواع التوكيلات وكيفية إصدارها إلكترونيًا وفقًا للأنظمة السعودية.",
    },
    image: "./article3.jpg",
    date: "2023-08-01",
    ref: "/article/5",
  },
  {
    id: 6,
    title: {
      en: "The Difference Between Administrative, Criminal, and Civil Lawsuits",
      ar: "الفرق بين الدعاوى الإدارية والجنائية والمدنية",
    },
    description: {
      en: "Understand the distinctions between administrative, criminal, and civil lawsuits in Saudi Arabia, including when to file each and their legal procedures.",
      ar: "تعرف على الفروق بين الدعاوى الإدارية والجنائية والمدنية في السعودية، ومتى يتم رفع كل منها والإجراءات القانونية الخاصة بها.",
    },
    image: "./article1.jpg",
    date: "2023-08-20",
    ref: "/article/6",
  },
  {
    id: 7,
    title: {
      en: "What Should You Look Out for Before Signing Any Contract?",
      ar: "ما الذي يجب الانتباه إليه قبل توقيع أي عقد؟",
    },
    description: {
      en: "Contracts bind you legally. Learn key points to check in any contract to avoid disputes or unfair terms, including obligations, penalties, and termination clauses.",
      ar: "تربطك العقود قانونيًا. تعلّم النقاط الأساسية التي يجب مراجعتها في أي عقد لتجنب النزاعات أو الشروط غير العادلة، بما في ذلك الالتزامات والغرامات وبنود الإنهاء.",
    },
    image: "./article1.jpg",
    date: "2023-09-05",
    ref: "/article/7",
  },
  {
    id: 8,
    title: {
      en: "10 Legal Terms You Need to Know",
      ar: "عشرة مصطلحات قانونية يجب أن تعرفها",
    },
    description: {
      en: "Familiarize yourself with 10 common legal terms in Saudi law that help you better understand contracts, lawsuits, and legal advice.",
      ar: "تعرف على عشرة مصطلحات قانونية شائعة في القانون السعودي تساعدك على فهم العقود والدعاوى والنصائح القانونية بشكل أفضل.",
    },
    image: "./article2.jpg",
    date: "2023-09-20",
    ref: "/article/8",
  },
];

export const KnowledgeCenter = () => {
  const navigate = useNavigate();
  const lang = useSelector(selectLanguage);


  const filteredArticles = articles.filter((article) => article.featured);
  return (
    <VStack w={"100vw"}>
      <ContactBanner
        bgPos="0% /27%"
        img="About.jpg"
        title={lang === "en" ? "Knowledge Center" : "مركز المعرفة"}
        subtitle=""
        description=""
      />
      <Text
        mt={"5%"}
        fontWeight={600}
        fontSize={{ base: "1.25rem", lg: "1.75rem" }}
        color={"rgba(46, 54, 81, 1)"}
      >
        {useTranslation("knowledge-center.subtitle")}
      </Text>
      <VStack align={"start"} w={"100%"} p={"4rem"}>
        <HStack
          flexDir={{ base: "column", md: "row" }}
          w={"100%"}
          align={"start"}
          justifyContent={"space-between"}
        >
          <VStack>
            <Text
              fontSize={{ base: "1.25rem", lg: "1.75rem" }}
              color={"rgba(46, 54, 81, 1)"}
            >
              {useTranslation("knowledge-center.title")}
            </Text>
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
          </VStack>
          <Box
            as="button"
            color={"rgba(90, 119, 187, 1)"}
            bgColor={"transparent"}
            border={"1px solid rgba(90, 119, 187, 1)"}
            borderRadius={"2xl"}
            px={"1.5rem"}
            py={"0.5rem"}
            fontSize={{ base: "1.25rem", lg: "1.75rem" }}
            onClick={() => navigate("/articles")}
          >
            {useTranslation("knowledge-center.showall")}
          </Box>
        </HStack>
        <Text
          color={"rgba(95, 97, 102, 1)"}
          fontWeight={400}
          fontSize={{ base: "1rem", lg: "1.1rem" }}
        >
          {useTranslation("knowledge-center.subtitle1")}

        </Text>
        {/* <HStack> */}

        <ArticleList articles={filteredArticles} />

        {/* </HStack> */}
      </VStack>
      <VStack
        className="contact-hero"
        position="relative" // Changed from absolute to relative
        left={0}
        zIndex={10}
        overflow="hidden" // Prevents image from overflowing
        bgSize="cover"
        bgRepeat="no-repeat"
        w="100%"
        align={"stretch"}
      >
        <Image
          src={`knowledge.jpg`}
          alt={"Home image"}
          loading={"eager"}
          decoding={"async"}
          fetchPriority={"high"}
          top={0}
          left={0}
          w="100%"
          minH={{ base: "25rem", md: "10rem" }}
          h="100%"
          objectFit="cover" // Equivalent to bgSize="cover"
          objectPosition={"center"} // Equivalent to bgPos
        />
        <VStack
          p={8}
          className="overlay"
          textAlign="center"
          color={"white"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={"1.5rem"}
        >
          <Text fontSize={{ base: "1.2rem", md: "2rem" }} fontWeight={500}>
            {useTranslation("knowledge-center.title2")}
          </Text>
          <Text fontSize={{ base: "1rem", md: "1.25rem" }} fontWeight={400}>
            {useTranslation("knowledge-center.subtitle2")}
          </Text>
        </VStack>
      </VStack>

      <VStack
        align={"start"}
        w={{ base: "90%", md: "80%" }}
        mt={"2rem"}
        mb={"2rem"}
        mr={"5%"}
        ml={"5%"}
      >
        <VStack>
          <Text
            color={"rgba(46, 54, 81, 1)"}
            fontSize={{ base: "1.5rem", lg: "2rem" }}
            fontWeight={600}
          >
            {lang === "en" ? "Legal procedures" : "  إجراءات وخطوات"}
          </Text>
          <svg
            viewBox="0 0 228 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.90738 9.54731C39.4266 2.98749 136.738 -5.01571 225.83 15.4501"
              stroke="#981C20"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </VStack>
        <Text
          color={"rgba(95, 97, 102, 1)"}
          fontSize={{ base: "1rem", lg: "1.4rem" }}
          fontWeight={400}
        >
          {lang === "ar" ? " أدلة عملية تشرح لك كيف تُنجز معاملاتك القانونية خطوة بخطوة — من التقديم الإلكتروني وحتى المتابعة." : " Practical guides that explain how to complete your legal transactions step by step — from electronic submission to follow-up."}
        </Text>

        <ProceduresList procedures={procedures} />
      </VStack>

      <VStack
        w={{ base: "90%", md: "80%" }}
        mt={"2rem"}
        mb={"2rem"}
        align={"start"}
      >
        <VStack>
          <Text
            color={"rgba(46, 54, 81, 1)"}
            fontSize={{ base: "1.5rem", lg: "2rem" }}
            fontWeight={600}
          >
            {lang === "en" ? "Lates laws and regulations" : " أحدث القوانين والتشريعات"}
          </Text>
          <svg
            viewBox="0 0 228 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.90738 9.54731C39.4266 2.98749 136.738 -5.01571 225.83 15.4501"
              stroke="#981C20"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </VStack>
        <Text
          color={"rgba(95, 97, 102, 1)"}
          fontSize={{ base: "1rem", lg: "1.4rem" }}
          fontWeight={400}
        >
          {lang === "ar" ? " أدلة عملية تشرح لك كيف تُنجز معاملاتك القانونية خطوة بخطوة — من التقديم الإلكتروني وحتى المتابعة." : " Practical guides that explain how to complete your legal transactions step by step — from electronic submission to follow-up."}
        </Text>
        <VStack w={"100%"} justifyContent={"space-around"}  >
          <Tab
            links={[
              { en: "All", ar: "الكل" },
              { en: "Personal", ar: "الاحوال الشخصية " },
              { en: "Contacts", ar: "العقود" },
              { en: "Labor", ar: "العمل" }
            ]}
            contents={[
              [
                {
                  id: 6,
                  title: { en: "Support", ar: "قوانين الزواج 2025" },
                  description: {
                    en: " Multilingual support — because justice shouldn’t be bound by language",
                    ar: " أحدث التعديلات المتعلقة بالزواج والحقوق الأسرية، بلغة واضحة ومبسطة تناسب الجميع.",
                  },
                  date: "16 مارس 2025",
                },
                {
                  id: 8,
                  title: { en: "Support", ar: "قوانين الزواج 2025" },
                  description: {
                    en: " Multilingual support — because justice shouldn’t be bound by language",
                    ar: " أحدث التعديلات المتعلقة بالزواج والحقوق الأسرية، بلغة واضحة ومبسطة تناسب الجميع.",
                  },
                  date: "16 مارس 2025",
                },
                {
                  id: 9,
                  title: { en: "Support", ar: "قوانين الزواج 2025" },
                  description: {
                    en: " Multilingual support — because justice shouldn’t be bound by language",
                    ar: " أحدث التعديلات المتعلقة بالزواج والحقوق الأسرية، بلغة واضحة ومبسطة تناسب الجميع.",
                  },
                  date: "16 مارس 2025",
                },
              ],
              [
                {
                  id: 6,
                  title: { en: "Support", ar: "قوانين الزواج 2025" },
                  description: {
                    en: " Multilingual support — because justice shouldn’t be bound by language",
                    ar: " أحدث التعديلات المتعلقة بالزواج والحقوق الأسرية، بلغة واضحة ومبسطة تناسب الجميع.",
                  },
                  date: "16 مارس 2025",
                },
                {
                  id: 8,
                  title: { en: "Support", ar: "قوانين الزواج 2025" },
                  description: {
                    en: " Multilingual support — because justice shouldn’t be bound by language",
                    ar: " أحدث التعديلات المتعلقة بالزواج والحقوق الأسرية، بلغة واضحة ومبسطة تناسب الجميع.",
                  },
                  date: "16 مارس 2025",
                },
                {
                  id: 9,
                  title: { en: "Support", ar: "قوانين الزواج 2025" },
                  description: {
                    en: " Multilingual support — because justice shouldn’t be bound by language",
                    ar: " أحدث التعديلات المتعلقة بالزواج والحقوق الأسرية، بلغة واضحة ومبسطة تناسب الجميع.",
                  },
                  date: "16 مارس 2025",
                },
              ],

              [
                {
                  id: 6,
                  title: { en: "Support", ar: "قوانين الزواج 2025" },
                  description: {
                    en: " Multilingual support — because justice shouldn’t be bound by language",
                    ar: " أحدث التعديلات المتعلقة بالزواج والحقوق الأسرية، بلغة واضحة ومبسطة تناسب الجميع.",
                  },
                  date: "16 مارس 2025",
                },
                {
                  id: 8,
                  title: { en: "Support", ar: "قوانين الزواج 2025" },
                  description: {
                    en: " Multilingual support — because justice shouldn’t be bound by language",
                    ar: " أحدث التعديلات المتعلقة بالزواج والحقوق الأسرية، بلغة واضحة ومبسطة تناسب الجميع.",
                  },
                  date: "16 مارس 2025",
                },
                {
                  id: 9,
                  title: { en: "Support", ar: "قوانين الزواج 2025" },
                  description: {
                    en: " Multilingual support — because justice shouldn’t be bound by language",
                    ar: " أحدث التعديلات المتعلقة بالزواج والحقوق الأسرية، بلغة واضحة ومبسطة تناسب الجميع.",
                  },
                  date: "16 مارس 2025",
                },
              ],
              [
                {
                  id: 6,
                  title: { en: "Support", ar: "قوانين الزواج 2025" },
                  description: {
                    en: " Multilingual support — because justice shouldn’t be bound by language",
                    ar: " أحدث التعديلات المتعلقة بالزواج والحقوق الأسرية، بلغة واضحة ومبسطة تناسب الجميع.",
                  },
                  date: "16 مارس 2025",
                },
                {
                  id: 8,
                  title: { en: "Support", ar: "قوانين الزواج 2025" },
                  description: {
                    en: " Multilingual support — because justice shouldn’t be bound by language",
                    ar: " أحدث التعديلات المتعلقة بالزواج والحقوق الأسرية، بلغة واضحة ومبسطة تناسب الجميع.",
                  },
                  date: "16 مارس 2025",
                },
                {
                  id: 9,
                  title: { en: "Support", ar: "قوانين الزواج 2025" },
                  description: {
                    en: " Multilingual support — because justice shouldn’t be bound by language",
                    ar: " أحدث التعديلات المتعلقة بالزواج والحقوق الأسرية، بلغة واضحة ومبسطة تناسب الجميع.",
                  },
                  date: "16 مارس 2025",
                },
              ],
            ]}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};
