import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface NavLink {
  href: string;
  label: string;
  en: string;
  ar: string;
}

interface NavState {
  links: NavLink[];
  activeLink: string;
  isArabic: boolean;
}

const initialState: NavState = {
  links: [
    { href: "/", label: "Home",en: "Home", ar: "الرئيسية" },
    { href: "/about", label: "About", en: "About", ar: "من نحن" },
    { href: "/why-us", label: "Why Us", en: "Why Us", ar: "لماذا نحن" },
    { href: "/services", label: "Services", en: "Services", ar: "خدماتنا" },
    { href: "/knowledge-center", label: "Knowledge Center", en: "Knowledge Center", ar: "مركز المعرفة" },
    // { href: "/blogs", label: "Blogs", en: "Blogs", ar: "المدونات" },
    // { href: "/articles", label: "Articles", en: "Articles", ar: "المقالات" },
    { href: "/faq", label: "FAQ", en: "FAQ", ar: "الاسئلة الشائعة" },
    { href: "/contact", label: "Contact", en: "Contact", ar: "اتصل بنا" },
  ],
  activeLink: "/",
  isArabic: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setActiveLink: (state, action: PayloadAction<string>) => {
      state.activeLink = action.payload;
    },
    setArabic: (state, action: PayloadAction<boolean>) => {
      state.isArabic = action.payload;
      state.links = state.links.map((link) => ({
        ...link,
        label: action.payload ? link["ar"] ?? link.label : link["en"] ?? link.label,
      }));
    },
  },
});

export const { setActiveLink, setArabic } = navSlice.actions;
export default navSlice.reducer;
