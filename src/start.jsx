import { motion } from "framer-motion";
import {
  FaFlask,
  FaAtom,
  FaGlobe,
  FaMicroscope
} from "react-icons/fa";

const subjects = [
  {
    title: "العلوم الكيميائية",
    icon: <FaFlask size={40} />,
    color: "from-pink-500 to-red-400",
    link: "https://nafsexam1.vercel.app/"
  },
  {
    title: "العلوم الفيزيائية",
    icon: <FaAtom size={40} />,
    color: "from-blue-500 to-cyan-400",
    link: "https://nafsexam4.vercel.app/"
  },
  {
    title: "علوم الأرض والفضاء",
    icon: <FaGlobe size={40} />,
    color: "from-green-500 to-emerald-400",
    link: "https://nafsexam2.vercel.app/"
  },
  {
    title: "علوم الحياة",
    icon: <FaMicroscope size={40} />,
    color: "from-purple-500 to-indigo-400",
    link: "https://nafsexam3.vercel.app/"
  }
];

export default function Start() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center p-6">

      {/* العنوان */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
      >
        منصة  تدريب اختبار نافس
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white/90 mb-10 text-center max-w-xl"
      >
        اختر الفرع الذي تريد اختباره وابدأ رحلتك في التعلم والتقييم بطريقة ممتعة وتفاعلية 🚀
      </motion.p>

      {/* الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">

        {subjects.map((subject, index) => (
          <motion.a
            key={index}
            href={subject.link}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-2xl shadow-2xl p-6 text-white bg-gradient-to-br ${subject.color} flex flex-col items-center justify-center gap-4 cursor-pointer`}
          >
            <div className="bg-white/20 p-4 rounded-full backdrop-blur">
              {subject.icon}
            </div>

            <h2 className="text-xl font-bold text-center">
              {subject.title}
            </h2>

            <button className="mt-2 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              ابدأ الآن
            </button>
          </motion.a>
        ))}

      </div>

      {/* الفوتر */}
           <div className="text-center text-white  p-3">جميع الحقوق محفوظة لدى المعلمة / رقية حسين حامظي <span className="text-[20px]">©</span> {new Date().getFullYear()}</div>

    </div>
  );
}
