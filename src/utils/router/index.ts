import type { ImportGlobPageModules } from "@/module";
import { routerModules, layoutModules } from "@/module";

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
  return lazyImport(layoutModules, `/src/layout${path}/index.tsx`);
}
