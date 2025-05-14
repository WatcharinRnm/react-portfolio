import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: {
        title: "Hi, I'm Watcharin",
        desc: "I'm a backend developer passionate about building scalable web applications."
      },
      about: {
        title: "About Me",
        desc: "I specialize in server-side development with Node.js, PHP, and REST APIs."
      },
      projects: {
        title: "My Projects",
        items: [
          { name: "API Service", desc: "RESTful API built with Node.js and Express", link: "https://github.com/yourusername/api-service" },
          { name: "Parking System", desc: "Web-based parking management system in PHP", link: "https://github.com/yourusername/parking-system" }
        ]
      },
      contact: {
        title: "Contact Me",
        email: "Email: watcharin@example.com"
      }
    }
  },
  th: {
    translation: {
      home: {
        title: "สวัสดีครับ ผมชื่อวัชรินทร์",
        desc: "ผมเป็นนักพัฒนา backend ที่หลงใหลการสร้างระบบเว็บที่ขยายตัวได้ดี"
      },
      about: {
        title: "เกี่ยวกับฉัน",
        desc: "ถนัดการพัฒนาฝั่งเซิร์ฟเวอร์ด้วย Node.js, PHP และ REST API"
      },
      projects: {
        title: "โปรเจกต์ของฉัน",
        items: [
          { name: "API Service", desc: "RESTful API ที่พัฒนาด้วย Node.js และ Express", link: "https://github.com/yourusername/api-service" },
          { name: "Parking System", desc: "ระบบจัดการลานจอดรถด้วย PHP", link: "https://github.com/yourusername/parking-system" }
        ]
      },
      contact: {
        title: "ติดต่อฉัน",
        email: "อีเมล: watcharin@example.com"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'th',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
