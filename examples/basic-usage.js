// Import the library
import {
  getAllAriaRoles,
  isValidAriaRole,
  ariaRoles,
} from '@a11ytools/aria-roles';

// Example 1: Get all ARIA roles
console.log('All ARIA roles:');
console.log(getAllAriaRoles());

// Example 2: Validate roles
console.log('\nValidating roles:');
console.log(`Is 'button' a valid role? ${isValidAriaRole('button')}`);
console.log(`Is 'custom-role' a valid role? ${isValidAriaRole('custom-role')}`);

// Example 3: Using the ariaRoles object
console.log('\nUsing ariaRoles object:');
console.log(`Button role: ${ariaRoles.button}`);
console.log(`Alert role: ${ariaRoles.alert}`);

// Example 4: Practical usage with DOM
console.log('\nPractical DOM usage example (pseudocode):');
console.log(`
// Create an element with a valid ARIA role
const element = document.createElement('div');
element.setAttribute('role', ariaRoles.button);

// Validate user input
function setElementRole(element, roleName) {
  if (isValidAriaRole(roleName)) {
    element.setAttribute('role', roleName);
    console.log('Role set successfully');
  } else {
    console.error('Invalid ARIA role provided');
  }
}
`);
