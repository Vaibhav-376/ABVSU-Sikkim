"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/layout/Footer";
import Navbarin from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[9999]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <FaSpinner className="text-blue-500 text-5xl animate-none" />
      </motion.div>
    </div>
  );
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        {loading && <Preloader />}

        <div className="fixed top-0 left-0 w-full z-50">
          <Navbarin />
        </div>

        <div className="pt-[188px] min-h-[70vh]">
          {children}
        </div>

        {/* <div className="mb-4 bg-gray-100 py-5 px-6">
          <OurPartnersLogoSlider title={"Government Partners"} images={govPartnersImages} />
        </div> */}

        <Footer />
      </body>
    </html>
  );
}
