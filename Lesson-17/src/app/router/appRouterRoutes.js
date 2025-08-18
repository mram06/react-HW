import { frontRoutes } from "@/shared/config/routes/frontRoutes";

const pagesList = Object.keys(frontRoutes.pages);

// Статичне створення карти для динамічних імпортів сторінок (Vite-friendly)
const pageModules = import.meta.glob("../../pages/*.jsx");

export const appRouterRoutes = pagesList.map((page) => ({
  ...frontRoutes.pages[page],
  lazy: async () => {
    const key = `../../pages/${page}.jsx`;
    const importer = pageModules[key];
    if (!importer) {
      throw new Error(`Сторінку "${page}" не знайдено: очікував файл ${key}`);
    }
    const mod = await importer();
    return { Component: mod.default };
  },
}));
