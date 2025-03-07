# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2024-03-07

### Changed
- Renamed `roles` export to `ariaRoles` for better clarity and to avoid naming conflicts
- Renamed `getAriaRoles()` function to `getAllAriaRoles()` to better describe its purpose
- Added comprehensive JSDoc comments to improve developer experience
- Updated README with more detailed examples

## [1.0.1] - 2024-03-04

### Changed
- Fixed package configuration for proper TypeScript type definitions
- Updated documentation with more examples

## [1.0.0] - 2024-03-04

### Added
- Initial release
- Type-safe ARIA role definitions
- `getAriaRoles()` function to retrieve all valid ARIA roles
- `isValidAriaRole()` function to validate role strings
- `roles` object for type-safe access to role names 