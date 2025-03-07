# aria-roles

**aria-roles** is a lightweight utility library that provides a reliable way to fetch valid ARIA roles dynamically. It simplifies accessibility development by preventing hardcoded role values and enabling validation for better UI accessibility compliance.

## 🚀 Features
- 📜 Retrieve a complete, up-to-date list of all valid ARIA roles
- ✅ Validate whether a given role is a recognized ARIA role
- 🔒 Type-safe access to ARIA role names
- ⚡ Lightweight, fast, and dependency-free
- 🔍 Designed for use in accessibility tooling, testing, and frontend frameworks

## 📦 Installation
```sh
npm install @a11ytools/aria-roles
```

## 🔧 Usage

### Basic Usage
```js
import { getAllAriaRoles, isValidAriaRole, ariaRoles } from "@a11ytools/aria-roles";

// Get all valid ARIA roles
console.log(getAllAriaRoles()); // Returns an array of valid ARIA roles

// Validate a role
console.log(isValidAriaRole("button")); // true
console.log(isValidAriaRole("fake-role")); // false

// Type-safe access to role names
element.setAttribute('role', ariaRoles.button);
element.setAttribute('role', ariaRoles.tabpanel);
```

### TypeScript Usage
```ts
import { AriaRole, ariaRoles, isValidAriaRole } from "@a11ytools/aria-roles";

// Type-safe role definition
const myRole: AriaRole = ariaRoles.button;

// Type narrowing with isValidAriaRole
function setRole(element: HTMLElement, role: string) {
  if (isValidAriaRole(role)) {
    // TypeScript knows 'role' is of type AriaRole here
    element.setAttribute('role', role);
  } else {
    console.warn(`Invalid ARIA role: ${role}`);
  }
}
```

### React Example
```tsx
import React from 'react';
import { ariaRoles } from '@a11ytools/aria-roles';

function AccessibleButton({ children, onClick }) {
  return (
    <div 
      role={ariaRoles.button} 
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
```

### Vue Example
```vue
<template>
  <div 
    :role="ariaRoles.button"
    @click="onClick"
    tabindex="0"
    @keydown="handleKeyDown"
  >
    <slot></slot>
  </div>
</template>

<script>
import { ariaRoles } from '@a11ytools/aria-roles';

export default {
  setup() {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick();
      }
    };
    
    return {
      ariaRoles,
      handleKeyDown
    };
  },
  methods: {
    onClick() {
      // Handle click
    }
  }
}
</script>
```

## 🧪 Testing Examples

```tsx
import { render, screen } from '@testing-library/react';
import { ariaRoles, isValidAriaRole } from '@a11ytools/aria-roles';

// React Testing Library - use ariaRoles for type-safe queries
test('Component uses correct ARIA roles', () => {
  render(<MyComponent />);
  
  // Query elements by their roles using ariaRoles
  const button = screen.getByRole(ariaRoles.button);
  const navigation = screen.getByRole(ariaRoles.navigation);
  
  // Verify elements have proper attributes
  expect(button).toHaveAttribute('aria-pressed', 'false');
  expect(navigation).toBeInTheDocument();
});

// Validate all roles in a component
test('All roles are valid', () => {
  const { container } = render(<MyComponent />);
  
  // Check that all role attributes are valid
  container.querySelectorAll('[role]').forEach(element => {
    const role = element.getAttribute('role');
    expect(isValidAriaRole(role)).toBe(true);
  });
});
```

## 🔄 API Reference

### `getAllAriaRoles()`
Returns an array of all valid ARIA roles as strings.

```ts
function getAllAriaRoles(): AriaRole[]
```

### `isValidAriaRole(role)`
Validates if a string is a valid ARIA role. In TypeScript, this function acts as a type guard.

```ts
function isValidAriaRole(role: string): role is AriaRole
```

### `ariaRoles`
An object that provides type-safe access to all ARIA role names. Each property is named after an ARIA role and returns the role name as a string.

```ts
const ariaRoles: Record<AriaRole, AriaRole>
```

### `AriaRole` (TypeScript only)
A TypeScript type that represents all valid ARIA roles.

```ts
type AriaRole = 'alert' | 'alertdialog' | 'application' | /* ... */;
```

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📜 License
This project is licensed under the MIT License.
