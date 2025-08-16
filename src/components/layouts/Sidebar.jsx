import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <motion.aside
            initial={false}
            animate={isOpen ? "visible" : "hidden"}
            variants={{
                hidden: { width: "4rem" },
                visible: { width: "16rem" }
            }}
            transition={{ duration: 0.3 }}
            className="bg-brandBlue h-screen flex flex-col shadow-lg overflow-hidden"
        >
            <div className="flex item-center justify-between gap-4 p-4">
                {isOpen &&  <p>
                    Devices
                </p>}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-lg font-bold text-black text-left"
            >
                {!isOpen ? <FaBars /> : <FaBarsStaggered />}
            </button>
            </div>

            <div className="flex-1 flex flex-col gap-4 p-2">
                {["Dashboard", "Settings", "Profile"].map((item, i) => (
                    <motion.div
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-lg"
                        initial={false}
                        animate={{
                            opacity: 1,
                            width: isOpen ? "auto" : 0
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <span><IoHome fontSize={20} /></span>
                        {isOpen && <span className="text-black text-base">Links</span>}
                    </motion.div>
                ))}
            </div>
        </motion.aside>
    );
}
