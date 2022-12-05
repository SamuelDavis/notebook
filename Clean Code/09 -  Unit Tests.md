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
