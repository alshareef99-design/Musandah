import "./App.css";
import { VStack } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Services } from "./pages/Services";
// import { Blogs } from "./pages/Blogs";
// import { Articles } from "./pages/Articles";
import { Contact } from "./pages/ContactUs.tsx";
import { About } from "./pages/AbostUs.tsx";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { NotFound } from "./pages/NotFound";
import { useLanguage } from "./hooks/useLanguage.ts";
import { useEffect } from "react";
// import { ViewAllArticles } from "./components/ViewAllArticles";
import { KnowledgeCenter } from "./pages/KnowledgeCenter";
import useDirection from "./hooks/useDirection.ts";
import useFontFamily from "./hooks/useFontFamily";
import { ServiceDetails } from "@/components/services_components/ServiceDetails.tsx";
// import BlogDetails from "./pages/BlogDetails";
import {ArticleDetails} from "@/components/knowledge_components/ArticleDetails.tsx";
// import { ViewAllBlogs } from "./components/ViewAllBlogs.tsx";
import { TermsandConditions } from "./pages/TermsAndConditions";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { FrequentQuestions } from "./pages/FrequentQuestions.tsx";
// import TimedPopup from './components/SubscribeNow.tsx'
import { Toaster } from "./components/ui/toaster.tsx";
import { ViewAllArtciles } from "./components/knowledge_components/ViewAllArtciles.tsx";
import { WhyUs } from "./pages/WhyUs";

function App() {
  const { direction } = useLanguage();
  useDirection();

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);
  // useDynamicLangSwitch(); // activates automatic switching
  useFontFamily(); // dynamically switches fonts

  return (
    <VStack minH="100vh" gap={0}>
      <BrowserRouter>
        <Header />
        <main>
          {/* <TimedPopup /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/knowledge-center" element={<KnowledgeCenter />} />
            <Route path="/knowledge-center/:id" element={<ArticleDetails />} />
            <Route path="/articles" element={<ViewAllArtciles />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-conditions" element={<TermsandConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<FrequentQuestions />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </main>
        <Footer />
      </BrowserRouter>
    </VStack>
  );
}

export default App;
