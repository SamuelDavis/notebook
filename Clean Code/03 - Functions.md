---
path: /home/sdavis/code/notes/.markdown/Clean\ Code/03\ -\ Functions.md
created_at: "2022-11-25 18:32:57 -0500"
updated_at: "2022-11-25 18:32:57 -0500"
tags: ["programming", "architecture", "author:Robert C. Martin", "book:Clean Code"]
---
# Small!

Width: < 150 characters
Height: <= 20 lines

Sub-blocks should be function calls
- keeps it short
- provides self-documentation

# Do One Thing

A function should go no more than one level of abstraction below the function name.
*Or*
If a function name is simply a restatement of it's implementation, then it is unnecessary.

# One Level of Abstraction per Function

- high level: getHtml
- low level: concat("\\n")

# The Stepdown Rule

Each level of abstraction should have it's own function, each invoking only one level below itself.

# Switch Statements

Switch statements are acceptable in abstract factories generating polymorphic objects

# Use Descriptive Names

Longer, more descriptive names are desirable

# Function Arguments

Fewer is better. Arguments are a different level of abstraction. Testing is combinatorially complex.

# Common Monadic Forms

## Checks
```php
function fileExists(string $path): bool;
```
## Transforms
```ts
function readFile(string $path): File;
```
## Events
```ts
function saveFailed(stdClass $record): void;
```

# Flag Arguments

Better multiple functions than functions with flags.

# Dyadic Functions

convert to monadic functions by converting to member function or creating a separate class to wrap

# Triadic Functions

each new argument is combinatorially more complicated

# Argument Objects

reduce number of args by grouping args together into domain objects

```php
// worse
function makeCircle(float $x, float $y, float $radius): Circle;
// better
function makeCircle(Point $point, float $radius): Circle;
```

# Argument Lists

functions accepting argument lists technically collapse that list to a single argument, e.g.

```php
// monadic
function concat(string ...$args): string;
// dyadic
function format(string $template, string ...$args): string;
```

# Verbs and Keywords

- monads: verb/noun pair
- dyads, etc. may use keywords to imply argument order, e.g.
```php
function assertExpectedEqualsActual($expected, $actual): void;
```

# Have No Side Effects

side effects may cause unexpected state changes
temporal couplings
  - function is only safe to call at certain times
	  - perhaps due to modified state

# Output Arguments

in OO, `this` is the output argument

# Command Query Separation

read state, write state, not both

```php
if (set('foo', 'bar'))
// vs
if (propertyExists('foo'))
  setProperty('foo', 'bar');
```

# Prefer Exceptions to Returning Error Codes

exceptions propagate naturally, return codes do not

# Extract Try/Catch Blocks

try/catch blocks bifercate between normal processing and error processing; simplify the logic as much as possible

# Error Handling Is One Thing

functions do one thing => error handling is one thing; unique functions for error cases

# Don't Repeat Yourself

everything in programming is an attempt to reduce duplication

# Structured Programming

Dijkstra's structured programming rules are not relevant in small functions

