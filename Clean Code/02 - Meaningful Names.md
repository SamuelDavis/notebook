---
created_at: '2022-11-25 18:32:57 -0500'
updated_at: '2022-11-25 18:32:57 -0500'
tags: ['programming', 'architecture', 'author:Robert C. Martin', 'book:Clean Code']
---

# Use intention-revealing names

- avoid constant literals
- use longer, more explicit names
- rely on object orientation/custom types

# Avoid Disinformation

- don't use inappropriate keywords
  - "myList" which is not a List object
  - avoid enshrining implementation details
- avoid similar names that may be easily confused

# Make Meaningful Distinctions

- avoid context-meaningful but generally-meaningless words
  - for all intents and purposes, "data" and "info" are the same word
  - a1 and a2 are not meaningfully different
  - requiring context creates mental overhead

# Use Pronounceable Names

- make it easy and intuitive to discuss your code unambiguously

# Use Searchable Names

- the length of a variable name should correspond to its scope
  - single letter names for short, local functions

# Avoid Encodings

- compilers and tooling give you meta information about membership and type, etc

# Avoid Mental Mapping

- learn and use industry terms which accurately describe what you're doing
  - e.g. list, map, collection, array have discrete imprecations

# Class Names

- Noun[, Verb/Phrase]

# Method Names

- Verb[, Noun/Phrase]

## Prefixes

Setter
: set

Getter
: get

Guard
: is

Overridden, static constructor
: from

# Don't Be Cute

- avoid culturally or temporally bounded language

# Pick One Word Per Concept

- avoid e.g. "user", "account", "member"
- be consistent
- avoid synonyms

# Don't Pun

- don't reuse a label if the underlying implementation is different

# Solution Domain Names (preferred)

- computer science terms
- less likely to change than problem domain

# Problem Domain Names (if no solution name exists)

- business terms
- less likely to change than whim

# Add Meaningful Context

If variables are ambiguous...

- extract them to a custom type (preferable)
- add prefixes/suffixes (acceptable)

# Don't add Gratuitous Context

- shorter names are better
- don't repeat contextual information
- premeditate potential naming conflicts, e.g. Address, Email address, PostalAddress
- 
