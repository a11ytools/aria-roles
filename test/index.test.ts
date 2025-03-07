import { describe, test, expect } from 'vitest';
import { getAllAriaRoles, isValidAriaRole, ariaRoles } from '../index.js';

describe('ARIA Roles Utility', () => {
  test('getAllAriaRoles returns an array', () => {
    expect(Array.isArray(getAllAriaRoles())).toBe(true);
  });

  test('getAllAriaRoles contains expected ARIA roles', () => {
    const roles = getAllAriaRoles();
    expect(roles).toContain(ariaRoles.alert);
    expect(roles).toContain(ariaRoles.button);
    expect(roles).toContain(ariaRoles.tabpanel);
  });

  test('isValidAriaRole correctly validates roles', () => {
    expect(isValidAriaRole(ariaRoles.button)).toBe(true);
    expect(isValidAriaRole('fake-role')).toBe(false);
  });

  test('ariaRoles object provides type-safe access to role names', () => {
    expect(ariaRoles.button).toBe('button');
    expect(ariaRoles.alert).toBe('alert');
    expect(ariaRoles.tabpanel).toBe('tabpanel');
    // TypeScript would catch this at compile time: ariaRoles.nonexistent
  });
});
