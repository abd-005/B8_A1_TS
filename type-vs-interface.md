# Type Aliases vs. Interfaces in TypeScript

## Introduction

Type aliases and interfaces both name types, and both can describe object shapes. Their differences become important when you need unions, declaration merging, or a particular extension pattern.

## Detailed Body

A `type` alias can represent more than an object: it can name a union, tuple, primitive, or function type. An `interface` is mainly used to describe object-like contracts.

```ts
type Status = "loading" | "success" | "error";

interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}