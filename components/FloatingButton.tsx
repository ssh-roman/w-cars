"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingButton() {
  return (
    <button
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#E8630A] hover:bg-[#D4570A] text-white shadow-lg shadow-[#E8630A]/25 hover:shadow-xl hover:shadow-[#E8630A]/30 transition-all duration-200 hover:scale-105 flex items-center justify-center z-50"
      aria-label="Contactare suport"
    >
      <MessageCircle size={24} />
    </button>
  );
}
