import type { ImportGlobPageModules } from "@/modules";
import { routerModules, layoutModules } from "@/modules";

export function lazyImport(modules: ImportGlobPageModules, path: string) {
  const module = modules[path];
  if (!module) {
    throw new Error(`Module ${path} not found`);
  }

  return module.default;
}

export function lazyImportRoute(path: string) {
  return lazyImport(routerModules, `/src/pages${path}/index.tsx`);
}

export function lazyImportLayout(path: string) {
  return lazyImport(layoutModules, `/src/layouts${path}/index.tsx`);
}
