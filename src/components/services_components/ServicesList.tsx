import { HStack } from "@chakra-ui/react";
import { ServiceCard } from "./ServiceCard";
import { type PlanProbs } from "../../types/types";

export const ServicesList = () => {
  return (
    <HStack
      w={"100%"}
      align={"stretch"}
      flexDir={{ base: "column", md: "row" }}
      justifyContent={"space-around"}
    >
      {plans.map((plan: PlanProbs, index: number) => (
        <ServiceCard key={index} plan={plan} />
      ))}
    </HStack>
  );
};

export const plans: PlanProbs[] = [
  {
    ref: "gold-plan",
    text: {
      ar: "أعلى مرونة قانونية للأفراد والعائلات",
      en: "The highest legal flexibility for individuals and families"
    },
    title: {
      en: "Gold Plan",
      ar: "الباقة الذهبية",
    },
    subtitle: {
      en: "The Gold Plan is designed to give you maximum benefit from legal consultations throughout the year, whether written or visual, with flexible and easy legal guidance.",
      ar: "الباقة الذهبية صُممت لتمنحك أقصى استفادة من الاستشارات القانونية على مدار العام، سواء كتابية أو مرئية، مع توجيهك قانونياً بمرونة وسهولة.",
    },
    description: [
      {
        en: "7 legal consultations (visual or written)",
        ar: "7 استشارات قانونية (مرئية أو كتابية)",
      },
      {
        en: "20 minutes per consultation",
        ar: "20 دقيقة لكل استشارة",
      },
      {
        en: "Annual price: SAR 999",
        ar: "سعر الباقة: 999 ريال سنويًا",
      },
    ],
    price: {
      en: "999",
      ar: "999",
    },
    whofor: [
      // {
      //   en: "Families needing frequent legal support",
      //   ar: "العائلات التي تحتاج دعمًا قانونيًا متكررًا",
      // },
      // {
      //   en: "Individuals with multiple inquiries throughout the year",
      //   ar: "الأفراد الذين لديهم أكثر من استفسار على مدار العام",
      // },
      // {
      //   en: "Those seeking flexible consultation experience combining visual and written formats",
      //   ar: "من يبحث عن تجربة استشارية مرنة تجمع بين المرئي والكتابي",
      // },
    ],
    features: [
      {
        en: "Personal status cases",
        ar: "قضايا الأحوال الشخصية",
      },
      {
        en: "Labor disputes",
        ar: "القضايا العمالية",
      },
      {
        en: "Traffic cases",
        ar: "القضايا المرورية",
      },
    ],
    info: {
      en: "The Gold Plan provides comprehensive legal coverage throughout the year with maximum flexibility.",
      ar: "الباقة الذهبية تمنحك تغطية قانونية شاملة طوال العام بأقصى مرونة",
    },
    Image: "Subscription Gold.png",
  },
  {
    ref: "silver-plan",
    text: {
      ar: "حل متوازن بتكلفة مدروسة",
      en: "A balanced solution with a studied cost"
    },
    title: {
      en: "Silver Plan",
      ar: "الباقة الفضية",
    },
    subtitle: {
      en: "The Silver Plan provides ideal coverage combining reasonable pricing with a good number of consultations, suitable for individuals and small families.",
      ar: "الباقة الفضية تمنحك تغطية مثالية تجمع بين السعر المناسب وعدد جيد من الاستشارات، لتلائم احتياجات الأفراد والأسر الصغيرة.",
    },
    description: [
      {
        en: "3 legal consultations (visual or written)",
        ar: "3 استشارات قانونية (مرئية أو كتابية)",
      },
      {
        en: "20 minutes per consultation",
        ar: "20 دقيقة لكل استشارة",
      },
      {
        en: "Annual price: SAR 499",
        ar: "سعر الباقة: 499 ريال سنويًا",
      },
    ],
    price: {
      en: "499",
      ar: "499",
    },
    whofor: [
      // {
      //   en: "Individuals or small families facing multiple inquiries during the year",
      //   ar: "الأفراد أو الأسر الصغيرة الذين يواجهون أكثر من استفسار خلال السنة",
      // },
      // {
      //   en: "Residents seeking periodic legal consultations",
      //   ar: "المقيمين الراغبين في استشارات قانونية دورية",
      // },
      // {
      //   en: "Those preferring balance between price and number of consultations",
      //   ar: "من يفضل التوازن بين السعر وعدد الاستشارات",
      // },
    ],
    features: [
      {
        en: "Personal status cases",
        ar: "قضايا الأحوال الشخصية",
      },
      {
        en: "Labor cases",
        ar: "القضايا العمالية",
      },
      {
        en: "Traffic cases",
        ar: "القضايا المرورية",
      },
    ],
    info: {
      en: "The Silver Plan offers year-long legal peace of mind with balanced pricing and professional service.",
      ar: "الباقة الفضية تمنحك الطمأنينة القانونية طوال العام بسعر متوازن وخدمة محترفة.",
    },
    Image: "Subscription Silver.png",
  },
  {
    ref: "bronze-plan",
    text: {
      ar: "حماية قانونية أساسية وسريعة",
      en: "Basic and quick legal protection"
    },
    title: {
      en: "Bronze Plan",
      ar: "الباقة البرونزية",
    },
    subtitle: {
      en: "The Bronze Plan is your optimal choice if you're looking for just one consultation, whether written or visual, to get a quick and accurate answer from a specialized lawyer.",
      ar: "الباقة البرونزية هي خيارك الأمثل إذا كنت تبحث عن استشارة واحدة فقط، سواء كتابية أو مرئية، للحصول على إجابة سريعة ودقيقة من محامٍ مختص.",
    },
    description: [
      {
        en: "1 legal consultation (visual or written)",
        ar: "1 استشارة قانونية (مرئية أو كتابية)",
      },
      {
        en: "20 minutes consultation duration",
        ar: "20 دقيقة مدة الاستشارة",
      },
      {
        en: "Annual price: SAR 95",
        ar: "سعر الباقة: 95 ريال سنويًا",
      },
    ],
    price: {
      en: "95",
      ar: "95",
    },
    whofor: [
      // {
      //   en: "Those needing quick legal consultation in appropriate language",
      //   ar: "الذين يحتاجون إلى استشارة قانونية سريعة بلغة مناسبة",
      // },
      // {
      //   en: "Individuals with one legal inquiry during the year",
      //   ar: "الأفراد الذين لديهم استفسار قانوني واحد خلال السنة",
      // },
      // {
      //   en: "Those seeking reliable legal service at simple cost",
      //   ar: "من يبحث عن خدمة قانونية موثوقة بتكلفة بسيطة",
      // },
    ],
    features: [
      {
        en: "Personal status cases",
        ar: "قضايا الأحوال الشخصية",
      },
      {
        en: "Labor cases",
        ar: "القضايا العمالية",
      },
      {
        en: "Traffic cases",
        ar: "القضايا المرورية",
      },
    ],
    info: {
      en: "The Bronze Plan gives you a safe entry point into the legal world with simple costs and approved protection.",
      ar: "الباقة البرونزية تمنحك بداية آمنة في عالم القانون، بتكلفة بسيطة وحماية معتمدة.",
    },
    Image: "Subscription Bronze.png",
  },
];