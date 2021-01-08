// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts";
import { getBreakpoint } from "./breakpoints";

Deno.test("Breakpoints test", () => {
  assertEquals(getBreakpoint("mobile"), "320");
});
