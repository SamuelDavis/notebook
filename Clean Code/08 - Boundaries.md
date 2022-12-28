---
created_at: '2022-11-30 09:46:08 -0500'
updated_at: '2022-11-30 09:46:08 -0500'
tags: ['programming', 'architecture', 'author:Robert C. Martin', 'book:Clean Code']
---

# Using Third-Party Code

- Reserve stdlib/third party code for use internal to an object
- Pass custom objects with well defined interfaces around your systems

# Exploring and Learning Boundaries

Writing tests which illustrate how to use third party code

# Learning Tests Are Better Than Free

Learning tests can highlight unexpected changes in third party code

# Using Code That Does Not Yet Exist

Don't interact with third parties directly

Define interfaces you wish existed, then do the bloody work of making them interop with their external/third party implementations

# Clean Boundaries

Refer to third parties as little as possible using adapters
