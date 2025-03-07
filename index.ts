/**
 * Type definition for all valid ARIA roles according to the WAI-ARIA specification.
 * This provides type safety when working with ARIA roles.
 */
export type AriaRole =
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'button'
  | 'cell'
  | 'checkbox'
  | 'columnheader'
  | 'combobox'
  | 'complementary'
  | 'contentinfo'
  | 'definition'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'form'
  | 'grid'
  | 'gridcell'
  | 'group'
  | 'heading'
  | 'img'
  | 'link'
  | 'list'
  | 'listbox'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'search'
  | 'searchbox'
  | 'separator'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tablist'
  | 'tabpanel'
  | 'term'
  | 'textbox'
  | 'timer'
  | 'toolbar'
  | 'tooltip'
  | 'tree'
  | 'treegrid'
  | 'treeitem';

/**
 * Array of all valid ARIA roles.
 * @internal This is primarily used internally but exported for advanced use cases.
 */
export const ARIA_ROLES: AriaRole[] = [
  'alert',
  'alertdialog',
  'application',
  'article',
  'banner',
  'button',
  'cell',
  'checkbox',
  'columnheader',
  'combobox',
  'complementary',
  'contentinfo',
  'definition',
  'dialog',
  'directory',
  'document',
  'feed',
  'figure',
  'form',
  'grid',
  'gridcell',
  'group',
  'heading',
  'img',
  'link',
  'list',
  'listbox',
  'listitem',
  'log',
  'main',
  'marquee',
  'math',
  'menu',
  'menubar',
  'menuitem',
  'menuitemcheckbox',
  'menuitemradio',
  'navigation',
  'none',
  'note',
  'option',
  'presentation',
  'progressbar',
  'radio',
  'radiogroup',
  'region',
  'row',
  'rowgroup',
  'rowheader',
  'scrollbar',
  'search',
  'searchbox',
  'separator',
  'slider',
  'spinbutton',
  'status',
  'switch',
  'tab',
  'table',
  'tablist',
  'tabpanel',
  'term',
  'textbox',
  'timer',
  'toolbar',
  'tooltip',
  'tree',
  'treegrid',
  'treeitem',
];

/**
 * Object that provides type-safe access to ARIA role names.
 * Use this to avoid hardcoding role strings in your code.
 *
 * @example
 * // Instead of:
 * element.setAttribute('role', 'button');
 *
 * // Use:
 * element.setAttribute('role', ariaRoles.button);
 */
export const ariaRoles: Record<AriaRole, AriaRole> = ARIA_ROLES.reduce(
  (acc, role) => {
    acc[role] = role;
    return acc;
  },
  {} as Record<AriaRole, AriaRole>
);

/**
 * Returns an array of all valid ARIA roles.
 *
 * @returns {AriaRole[]} Array of all valid ARIA role names
 *
 * @example
 * const roles = getAllAriaRoles();
 * // roles = ['alert', 'alertdialog', 'application', ...]
 */
export const getAllAriaRoles = (): AriaRole[] => {
  return ARIA_ROLES;
};

/**
 * Validates if a string is a valid ARIA role.
 * This function acts as a type guard in TypeScript.
 *
 * @param {string} role - The role string to validate
 * @returns {boolean} True if the role is valid, false otherwise
 *
 * @example
 * if (isValidAriaRole('button')) {
 *   // TypeScript knows 'button' is of type AriaRole here
 *   element.setAttribute('role', 'button');
 * }
 */
export const isValidAriaRole = (role: string): role is AriaRole => {
  return ARIA_ROLES.includes(role as AriaRole);
};
