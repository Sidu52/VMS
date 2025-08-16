import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animation/animation";
import ResponsiveTable from "../components/Table/Table";

export default function Devices() {

    const columns = ["Name", "Email", "Role","Name", "Email", "Role"];
    const data = [
        { Name: "John Doe", Email: "john@example.com", Role: "Admin" },
        { Name: "Jane Smith", Email: "jane@example.com", Role: "Editor" },
    ];

    return (
        <div>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
            >
                Hello with fade up!
            </motion.div>
            <ResponsiveTable columns={columns} data={data} />
        </div>
    );
}
