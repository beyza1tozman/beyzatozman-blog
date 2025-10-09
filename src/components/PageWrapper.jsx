import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageWrapper({ children, currentPath }) {
  const [path, setPath] = useState(currentPath || "");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  if (!path) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
