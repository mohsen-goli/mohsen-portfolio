import neginbox from "../assets/projects/neginbox.jpg";
import novaadmin from "../assets/projects/novaadmin.jpg";
import novatech from "../assets/projects/novatech.jpg";
import todoReact from "../assets/projects/todo-react.jpg";
import weather from "../assets/projects/weather.jpg";
import rosaStore from "../assets/projects/rosa-store.jpg";
import rosaAdmin from "../assets/projects/rosa-admin.jpg";

export type ProjectCategory = "react" | "js" | "css";

export interface Project {
  id: string;
  title: string;
  description: {
    fa: string;
    en: string;
  };
  image: string;
  tech: string[];
  demo: string;
  github: string;
  category: ProjectCategory;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "rosa-store",
    title: "ROSA Beauty Store",
    description: {
      fa: "فروشگاه آنلاین محصولات زیبایی با React و TypeScript، شامل نمایش محصولات و تجربه خرید مدرن.",
      en: "A modern beauty e-commerce store built with React and TypeScript, featuring product browsing and a shopping experience.",
    },
    image: rosaStore,
    tech: ["React", "TypeScript", "Vite"],
    demo: "https://rosa-beauty-store.vercel.app/",
    github: "https://github.com/mohsen-goli/rosa-beauty-store",
    category: "react",
    featured: true,
  },
  {
    id: "rosa-admin",
    title: "ROSA Admin",
    description: {
      fa: "داشبورد مدیریتی پروژه ROSA برای مشاهده و مدیریت اطلاعات فروشگاه.",
      en: "An admin dashboard for viewing and managing ROSA store information.",
    },
    image: rosaAdmin,
    tech: ["React", "TypeScript"],
    demo: "https://rosa-admin.vercel.app/",
    github: "https://github.com/mohsen-goli/rosa-admin",
    category: "react",
    featured: true,
  },
  {
    id: "neginbox",
    title: "NeginBox",
    description: {
      fa: "وب‌سایت معرفی و سفارش تخت‌باکس با طراحی فارسی و راست‌چین و راه‌های ارتباطی مستقیم.",
      en: "A Persian RTL landing page for an under-bed storage business, with direct customer contact options.",
    },
    image: neginbox,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://neginbox.vercel.app/",
    github: "https://github.com/mohsen-goli/neginbox-landing",
    category: "css",
    featured: true,
  },
  {
    id: "novaadmin",
    title: "NovaAdmin Dashboard",
    description: {
      fa: "داشبورد مدیریتی با نمایش آمار، جدول سفارش‌ها، فیلتر و مرتب‌سازی اطلاعات.",
      en: "An admin dashboard featuring analytics, order tables, filtering, and sorting.",
    },
    image: novaadmin,
    tech: ["JavaScript", "Chart.js", "CSS"],
    demo: "https://nova-admin-dashboard-two.vercel.app/",
    github: "https://github.com/mohsen-goli/Dashboard-project",
    category: "js",
    featured: true,
  },
  {
    id: "novatech",
    title: "NovaTech E-commerce",
    description: {
      fa: "فروشگاه اینترنتی لوازم دیجیتال با جست‌وجوی محصولات، سبد خرید و فرایند تسویه‌حساب.",
      en: "A digital accessories store with product search, a shopping cart, and checkout flow.",
    },
    image: novatech,
    tech: ["JavaScript", "CSS", "LocalStorage"],
    demo: "https://e-commerce-project-theta-kohl.vercel.app/",
    github: "https://github.com/mohsen-goli/E-commerce-project",
    category: "js",
    featured: true,
  },
  {
    id: "todo-react",
    title: "Todo Pro Max",
    description: {
      fa: "اپلیکیشن مدیریت کارها با React برای تمرین ساخت کامپوننت‌ها و مدیریت وضعیت.",
      en: "A React task management app for practicing components and state management.",
    },
    image: todoReact,
    tech: ["React", "JavaScript", "CSS"],
    demo: "https://todo-react-app-wheat-theta.vercel.app/",
    github: "https://github.com/mohsen-goli/todo-react-app",
    category: "react",
  },
  {
    id: "weather",
    title: "Weather App",
    description: {
      fa: "اپلیکیشن آب‌وهوا با جست‌وجوی شهر و دریافت پیش‌بینی از API هواشناسی.",
      en: "A weather app with city search and forecast data from a weather API.",
    },
    image: weather,
    tech: ["JavaScript", "REST API", "CSS"],
    demo: "https://weather-app-chi-woad-77.vercel.app/",
    github: "https://github.com/mohsen-goli/weather-app",
    category: "css",
  },
];
