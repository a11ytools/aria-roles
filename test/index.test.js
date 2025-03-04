import { describe, test, expect } from "vitest";
import { getAriaRoles, isValidAriaRole } from "../index.js";

describe("ARIA Roles Utility", () => {
  test("getAriaRoles returns an array", () => {
    expect(Array.isArray(getAriaRoles())).toBe(true);
  });

  test("getAriaRoles contains expected ARIA roles", () => {
    const roles = getAriaRoles();
    expect(roles).toContain("alert");
    expect(roles).toContain("button");
    expect(roles).toContain("tabpanel");
  });

  test("isValidAriaRole correctly validates roles", () => {
    expect(isValidAriaRole("button")).toBe(true);
    expect(isValidAriaRole("fake-role")).toBe(false);
  });
});
