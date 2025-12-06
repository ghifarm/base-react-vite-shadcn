import { motion } from "framer-motion";
import { X, Home, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay (Mobile Only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        >
         HALO   
        </div>
      )}

      {/* Sidebar */}
    </>
  );
}
