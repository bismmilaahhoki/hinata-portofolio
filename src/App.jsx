import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [dark, setDark] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [byakugan, setByakugan] = useState(false);

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className={dark 
      ? "bg-black text-white min-h-screen transition-all duration-500" 
      : "bg-gradient-to-br from-purple-200 via-pink-200 to-white text-black min-h-screen transition-all duration-500"
    }>

      {/* CURSOR */}
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50"
        style={{
          background: dark ? "#a78bfa" : "#ffffff",
          boxShadow: "0 0 20px #a78bfa"
        }}
        animate={{ x: cursor.x - 12, y: cursor.y - 12 }}
      />

      {/* NAV */}
      <div className="p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Hinata Mode</h1>
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 bg-purple-500 text-white rounded-xl shadow-lg hover:scale-105 transition"
        >
          Switch Mode ⚡
        </button>
      </div>

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Hinata Dual Mode
        </motion.h1>

        <p className="mt-4 text-lg opacity-70">
          Soft 🌸 vs Savage ⚡
        </p>

        {/* BUTTON */}
        <motion.button
          onClick={() => setByakugan(!byakugan)}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-6 py-3 bg-white text-black rounded-2xl shadow-xl hover:scale-105 transition"
        >
          Activate Byakugan 👁️
        </motion.button>

        {/* EYE */}
        <motion.div
          className="w-40 h-40 rounded-full mt-8"
          animate={
            byakugan
              ? {
                  scale: 1.4,
                  boxShadow: "0 0 80px #c4b5fd",
                  background:
                    "radial-gradient(circle, white 30%, #a78bfa 70%)",
                }
              : {
                  scale: 1,
                  background: "#ddd",
                }
          }
        />
        {/* ABOUT */}
<section className="py-20 px-6 text-center">
  <h2 className="text-3xl font-bold mb-4">About Project</h2>
  <p className="max-w-2xl mx-auto opacity-70">
    Website ini dibuat sebagai implementasi desain UI interaktif berbasis konsep dualitas karakter.
    Mengambil inspirasi dari versi lembut dan kuat, sistem ini menghadirkan pengalaman visual yang dinamis.
  </p>
</section>

{/* TUJUAN */}
<section className="py-20 px-6 text-center bg-purple-100 dark:bg-gray-900">
  <h2 className="text-3xl font-bold mb-4">Tujuan</h2>
  <ul className="space-y-2">
    <li>Mengembangkan UI interaktif berbasis animasi</li>
    <li>Menerapkan konsep dual mode dalam desain web</li>
    <li>Meningkatkan pengalaman pengguna</li>
  </ul>
</section>

{/* TEKNOLOGI */}
<section className="py-20 px-6 text-center">
  <h2 className="text-3xl font-bold mb-4">Teknologi</h2>
  <p>React JS • Tailwind CSS • Framer Motion</p>
</section>

{/* KESIMPULAN */}
<section className="py-20 px-6 text-center bg-purple-100 dark:bg-gray-900">
  <h2 className="text-3xl font-bold mb-4">Kesimpulan</h2>
  <p className="max-w-2xl mx-auto opacity-70">
    Website ini berhasil menggabungkan desain estetika dan interaksi modern untuk menciptakan pengalaman pengguna yang unik dan menarik.
  </p>
</section>
      </section>

      {/* STORY */}
      {[
        "Hinata kecil yang pemalu...",
        "Dia mulai menemukan keberanian...",
        "Versi kuat muncul dalam dirinya!",
      ].map((text, i) => (
        <section key={i} className="h-screen flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold"
          >
            {text}
          </motion.h2>
        </section>
      ))}
    </div>
  );
}