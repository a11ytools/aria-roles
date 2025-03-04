# aria-roles

**aria-roles** is a lightweight utility library that provides a reliable way to fetch valid ARIA roles dynamically. It simplifies accessibility development by preventing hardcoded role values and enabling validation for better UI accessibility compliance.

## 🚀 Features
- 📜 Retrieve a complete, up-to-date list of all valid ARIA roles
- ✅ Validate whether a given role is a recognized ARIA role
- ⚡ Lightweight, fast, and dependency-free
- 🔍 Designed for use in accessibility tooling, testing, and frontend frameworks

## 📦 Installation
```sh
npm install @a11ytools/aria-roles
```

## 🔧 Usage
```js
import { getAriaRoles, isValidAriaRole } from "@a11ytools/aria-roles";

console.log(getAriaRoles()); // Returns an array of valid ARIA roles
console.log(isValidAriaRole("button")); // true
console.log(isValidAriaRole("fake-role")); // false
```

## 📜 License
This project is licensed under the MIT License.