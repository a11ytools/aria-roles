// Import the library with TypeScript types
import {
  getAllAriaRoles,
  isValidAriaRole,
  ariaRoles,
  AriaRole,
} from '@a11y-tools/aria-roles';

// Example 1: Type-safe role definition
const buttonRole: AriaRole = ariaRoles.button;
// TypeScript would catch this error:
// const invalidRole: AriaRole = 'not-a-valid-role';

// Example 2: Using the type guard for validation
function setAccessibleRole(element: HTMLElement, role: string): void {
  if (isValidAriaRole(role)) {
    // TypeScript knows 'role' is of type AriaRole here
    element.setAttribute('role', role);

    // We can safely use it with ariaRoles
    if (role === ariaRoles.button) {
      // Add button-specific behavior
      element.tabIndex = 0;
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          element.click();
        }
      });
    }
  } else {
    console.warn(`Invalid ARIA role: ${role}`);
  }
}

// Example 3: Working with the complete list of roles
function createRoleSelector(container: HTMLElement): void {
  const roles = getAllAriaRoles();

  const select = document.createElement('select');
  select.setAttribute('aria-label', 'Choose an ARIA role');

  roles.forEach((role) => {
    const option = document.createElement('option');
    option.value = role;
    option.textContent = role;
    select.appendChild(option);
  });

  container.appendChild(select);
}

// Example 4: Type-safe component props in React (pseudocode)
/*
interface AccessibleButtonProps {
  role?: AriaRole;
  children: React.ReactNode;
  onClick: () => void;
}

function AccessibleButton({ role = ariaRoles.button, children, onClick }: AccessibleButtonProps) {
  return (
    <div 
      role={role} 
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {children}
    </div>
  );
}
*/
