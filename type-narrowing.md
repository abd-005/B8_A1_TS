
# Type Narrowing in TypeScript

## Introduction

Type narrowing lets TypeScript refine a broad type after a runtime check. It makes union types practical: code can safely use a value’s specific properties or methods without relying on an unsafe type assertion.

## Detailed Body

The `typeof` operator narrows primitive types. For example, a function accepting `string | number` can handle each case separately:

```ts
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
