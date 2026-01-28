import { TrendingDown, Star, Shield, Clock } from "lucide-react";
import { testimonials } from "@/lib/data";

const iconMap = {
  price: TrendingDown,
  star: Star,
  shield: Shield,
  clock: Clock,
};

export default function ValueProposition() {
  return (
    <section id="steps" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F4D] mb-3">
            Veți ce spun alții despre noi
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Zile mii de clienți mulțumiti au ales AutoRent pentru nevoile lor de
            transport.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => {
            const Icon = iconMap[item.iconType];
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 bg-[#0D28EF]/8 rounded-2xl flex items-center justify-center">
                  <Icon size={24} className="text-[#0D28EF]" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0D28EF] to-[#4d8aff] flex items-center justify-center text-white text-xs font-bold">
                    {item.author[0]}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {item.author}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
