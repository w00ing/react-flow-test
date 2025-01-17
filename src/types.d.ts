// types.d.ts or somewhere appropriate in your codebase
import type { Edge } from "@xyflow/react";
import type { AppNode } from "./your-node-definitions-file"; // e.g. the file with BuiltInNode, PositionLoggerNode, etc.

/** Basic structure for each screen in the navigation JSON. */
export interface NavigationScreen {
  name: string;
  component: string;
  options?: Record<string, any>;
  initialParams?: Record<string, any>;
  children?: NavigationScreen[];
}

/** Basic structure for each route definition (navigator). */
export interface NavigationRouteDef {
  navigatorVar: string;
  navigatorType: string;
  screens?: NavigationScreen[];
  options?: {
    initialRouteName?: string;
    screenOptions?: Record<string, any>;
    [key: string]: any; // For any extra properties
  };
}

/** Basic structure for each file-level entry in the navigation JSON. */
export interface NavigationFile {
  file: string;
  routeDefs: NavigationRouteDef[];
}
