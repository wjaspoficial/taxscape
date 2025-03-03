
import { motion } from "framer-motion";
import { PageHeader } from "@/components/tax-reform/PageHeader";
import { TaxReformTabs } from "@/components/tax-reform/TaxReformTabs";

export default function TaxReform() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-6xl"
    >
      <PageHeader />
      <TaxReformTabs />
    </motion.div>
  );
}
