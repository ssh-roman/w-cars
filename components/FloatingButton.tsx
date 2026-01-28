"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingButton() {
  return (
    <button
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#FF3B3B] hover:bg-[#e53535] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center z-50"
      aria-label="Contactare suport"
    >
      <MessageCircle size={24} />
    </button>
  );
}
