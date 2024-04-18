"use client";
import UpperNavBar from "./UpperSideBar/page";
import Dashboard from "./dashboard/page";
import { motion, useScroll } from "framer-motion";
export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="w-full">
        <Dashboard />
      </div>
    </>
  );
}
