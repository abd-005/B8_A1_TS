# B8_A1_TS — Mission 1 TypeScript Assignment

A TypeScript assignment project from Programming Hero (Level 2 — Next Level, Mission 1) exploring the core concepts of TypeScript: optional parameters, type narrowing, tuples, generics, interfaces, classes with access modifiers, and async functions.

## Overview

This project contains a single solution file demonstrating 8 TypeScript patterns, plus two short concept notes. It uses strict mode (`strict: true`) with an ESNext target/module setup and no external dependencies.

## Project Structure

```
B8_A1_TS/
├── solution.ts            # All exercise implementations
├── tsconfig.json          # TypeScript configuration (strict mode)
├── type-narrowing.md      # Note: Type Narrowing in TypeScript
├── type-vs-interface.md   # Note: Type Aliases vs. Interfaces
└── .gitignore
```

## `solution.ts` — Implemented Concepts

### 1. Optional Parameters
`multiplyValue(value: number, multiplier?: number): number`
- Multiplies `value` by `multiplier` if provided.
- If no multiplier is given (and it isn't `0`), defaults to multiplying by `2`.
- Handles the `multiplier === 0` case explicitly so `0` is not treated as falsy.

### 2. Type Narrowing (`typeof`)
`processInput(x: string | number | boolean)`
- `string` → trimmed and lowercased
- `number` → multiplied by 10
- `boolean` → `"Active"` if `true`, `"Inactive"` otherwise

### 3. Tuples
`formatCoordinate(tuple: readonly [number, number, string]): string`
- Takes a readonly `[latitude, longitude, locationName]` tuple.
- Returns a formatted string when both coordinates are positive, otherwise an error message.

### 4. Generics (Variadic)
`concatenateArrays<T>(...arrays: T[][]): Array<T>`
- Accepts any number of arrays of type `T` and flattens them into a single array.

### 5. Interfaces & Filtering
```ts
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
```
`getPopularCourses(courses: Course[], minStudents: number): Course[]`
- Returns published courses with at least `minStudents` students.

### 6. Constrained Generics
`pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][]`
- Extracts the values of a given key from an array of objects (e.g., plucking all `title` values from `Course[]`).

### 7. Classes, Inheritance & Access Modifiers
- **`Employee`** — `protected name`, `private baseSalary`, with `getDetails()`.
- **`Manager extends Employee`** — adds a `private department` and `getRoleInfo()`.

### 8. Async / Promises
`validateAgeAsync(age: number): Promise<string | undefined>`
- Throws `"Access Denied: Age must be a positive value!"` if `age <= 0`.
- Throws `"Access Denied: Must be 18 or older"` if `age < 18`.
- Otherwise resolves with `"Access Granted"` after a 1-second delay.
- Errors are captured and returned as strings.

## Concept Notes

| File | Topic |
|------|-------|
| `type-narrowing.md` | How `typeof` narrows union types safely at runtime |
| `type-vs-interface.md` | Differences between `type` aliases (unions, tuples, primitives) and `interface` (object contracts, extension, declaration merging) |

## Configuration

`tsconfig.json`:
- `strict: true` — full strict type checking
- `target` / `module`: `esnext`
- `skipLibCheck: true`
- `types: []` — no `@types/*` packages included

## Getting Started

You need [TypeScript](https://www.typescriptlang.org/) installed. No `package.json` is included in this project, so the simplest approach is to use TypeScript via `npx`:

```bash
# Type-check the solution
npx tsc --noEmit

# Or compile it (output goes to ./solution.js by default)
npx tsc solution.ts

# Run the compiled output
node solution.js
```

> The functions in `solution.ts` are declarations without top-level calls, so running the file produces no output. To experiment, import the functions or add sample calls at the bottom of the file.
