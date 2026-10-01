import neginbox from "../assets/projects/neginbox.jpg";
import novaadmin from "../assets/projects/novaadmin.jpg";
import novatech from "../assets/projects/novatech.jpg";
import todoReact from "../assets/projects/todo-react.jpg";
import weather from "../assets/projects/weather.jpg";

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
    id: "neginbox",
    title: "NeginBox",
    description: {
      fa: "لندینگ پیج واکنش‌گرا برای تولیدکننده‌ی جعبه و بسته‌بندی با طراحی مینیمال و مدرن",
      en: "Responsive landing page for a box manufacturer with minimal, modern design",
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
    title: "NovaAdmin",
    description: {
      fa: "داشبورد ادمین واکنش‌گرا با داده‌های JSON، جستجو، فیلتر و نمودارهای تحلیلی",
      en: "Responsive admin dashboard with JSON data, search, filtering and analytics charts",
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
    title: "NovaTech",
    description: {
      fa: "فروشگاه اینترنتی واکنش‌گرا با جستجوی محصول، سبد خرید و فرآیند تسویه",
      en: "Responsive e-commerce website with product search, cart and checkout flow",
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
      fa: "اپلیکیشن مدیریت کارها با React، فیلتر وظایف و ذخیره‌سازی محلی",
      en: "Task management app built with React, featuring filters and local storage",
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
      fa: "اپلیکیشن آب‌وهوا با اتصال به API خارجی، جستجوی شهر و پیش‌بینی ۷ روزه",
      en: "Weather application with external API, city search and 7-day forecast",
    },
    image: weather,
    tech: ["JavaScript", "REST API", "CSS"],
    demo: "https://weather-app-chi-woad-77.vercel.app/",
    github: "https://github.com/mohsen-goli/weather-app",
    category: "css",
  },
];
