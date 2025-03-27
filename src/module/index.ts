import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ImportGlobModules<T = any> = Record<string, T>;

interface PageModule {
  default: React.ComponentType;
}

export type ImportGlobPageModules = ImportGlobModules<PageModule>;

const routerModules: ImportGlobPageModules = import.meta.glob(
  "/src/pages/**/index.tsx",
  { eager: true },
);

const layoutModules: ImportGlobPageModules = import.meta.glob(
  "/src/layout/**/index.tsx",
  { eager: true },
);

export { routerModules, layoutModules };
