import { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { cars } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wrent.md";

  // Static routes
  const staticRoutes = ["", "/fleet", "/about", "/contact", "/terms", "/privacy"];

  // Generate sitemap entries for all static routes in all locales
  const staticEntries = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
      priority: route === "" ? 1 : 0.8,
    }))
  );

  // Generate sitemap entries for all car detail pages in all locales
  const carEntries = locales.flatMap((locale) =>
    cars.map((car) => ({
      url: `${baseUrl}/${locale}/fleet/${car.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...carEntries];
}
