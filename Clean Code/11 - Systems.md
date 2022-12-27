---
created_at: "2022-12-10 21:36:28 -0500"
updated_at: "2022-12-10 21:36:28 -0500"
tags: ["programming", "architecture", "author:Robert C. Martin", "book:Clean Code"]
---
# Separate Constructing a System from Using It

## separate processes:
- startup: construction / wiring
- runtime: user-manipulation of the process

avoid small conveniences which mix concerns; construction is a concern, it should be the single concern of a single class

# Separation of Main

1. main function builds all objects necessary for the system
2. main passes objects to application
3. application uses already-initialized objects

# Factories

if you don't know when to build an object, but will need to build one eventually, use a Factory

# Dependency Injection

Inversion of Control; delegate responsibilities to other, dedicated objects

Injecting dependencies via the controller guarantees the object shares no part of dependency management

# Scaling Up

Systems can scale cleanly only if their concerns are well-separated.

# Cross-Cutting Concerns

common behaviors across multiple objects

# Java Proxies, Aspect Programming, and Testing, etc.

facilitate testing however possible: Reduce dependencies on concrete implementations wherever possible; rely on plain old objects or similar as much as possible in order to facilitate testing
