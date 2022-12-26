---
path: /home/sdavis/code/notes/.markdown/Clean\ Code/10\ -\ Classes.md
created_at: "2022-12-05 11:45:16 -0500"
updated_at: "2022-12-06 21:21:42 -0500"
tags: ["programming", "architecture", "author:Robert C. Martin", "book:Clean Code"]
---
# Class Organization

(Variables)
- Public Static
- Private Static
- Public Instance
- Private Instance

(Functions)
- Public Method
- Private Method

# Encapsulation

You can make something protected for the sake of testing.

# Classes Should Be Small

- Class names describe responsibilities
  - if a name is too generic, the class is doing too much
- classes should be able to be described briefly without words like if, and, or but

# Single Responsibility Principle

- code should have one reason to change
- better many small, well-defined modules than a few massive, ambiguous modules

Summary:
- many small classes
- one responsibility per class
- interop between classes to achieve complexity

# Cohesion

- small number of variables
- small number of functions
- each function operates on as many functions as possible

Many variables with few methods operating on just some means another class should be created 

# Maintaining Cohesion Results in Many Small Classes

When classes lose cohesion, split them

# Organizing for Change

- any change to committed code introduces risk
  - retesting is necessitated
- fix design as soon as you're having to change committed code
- open-closed principle: open for extension, closed for modification

# Isolating From Change

- rely on interfaces
  - allows for trivial mocking
- Dependency Inversion Principle: rely on abstractions
