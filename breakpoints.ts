// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

export type TBreakpointNames = "mobile" | "tablet" | "laptop" | "desktop";

export interface TBreakpoint {
  name: TBreakpointNames;
  value: number;
}

export const breakpoints: TBreakpoint[] = [
  { name: "mobile", value: 320 },
  { name: "tablet", value: 768 },
  { name: "laptop", value: 1280 },
  { name: "desktop", value: 1600 },
];

export function getBreakpoint(name: TBreakpointNames): number | undefined {
  const breakpoint = breakpoints.find((item) => item.name === name);
  return breakpoint?.value || undefined;
}
