---
created_at: '2022-11-30 10:15:53 -0500'
updated_at: '2022-12-05 09:41:47 -0500'
tags: ['programming:architecture', 'author:Robert C. Martin', 'book:Clean Code']
---

# The Three Laws of TDD

1. You may not write production code until you've written a failing unit test.
2. You may not write more of a unit test than is sufficient to fail, and not compiling is failing.
3. You may not write more production code than is sufficient to pass the currently failing test.

# Keeping Tests Clean

Clean tests should not break when production code changes, unless those changes are broken.

# Tests Enable the -ilities

Clean tests protect against regressions.

# Clean Tests

- Build, execute, assert

Use as simple APIs as possible; build a suite of test helpers which extract away any complicated construction logic.

# A Dual Standard

Test environments may have less efficient helpers than production code.

# One Assert Per Test

Avoid doing too much in a single test.

# Single Concept Per Test

Trying to test multiple things (an entire user flow) in one test means edge cases will be missed.

# F.I.R.S.T.

- Fast: fast enough that they can willingly be run regularly
- Independent: tests should be complete in themselves
- Repeatable: if tests have external dependencies, then failures will be ambiguous
- Self-Validating: tests must clearly output success/failure
- Timely: tests should be written before production code
