import { describe, expect, test } from 'bun:test';

import { hello } from './index.js';

describe('hello() function', () => {
  test('greets the user by name', () => {
    const name = 'Charlie';
    const greeting = hello(name);
    expect(greeting).toBe(`Hello ${name}!`);
  });
});
