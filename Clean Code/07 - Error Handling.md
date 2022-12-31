---
created_at: '2022-11-27 21:37:13 -0500'
updated_at: '2022-11-30 09:46:33 -0500'
tags: ['programming:architecture', 'author:Robert C. Martin', 'book:Clean Code']
---

# Use Exceptions Rather Than Return Codes

Don't force caller to do validation

# Write Your Try-Catch-Finally Statement First

- Limit the scope of your try statement to that which throws exceptions
- Write tests which force exceptions

# Use Unchecked Exceptions

checked exception: documenting in your code what exceptions can be thrown - violates open/close, creates too much clutter

# Provide Context with Exceptions

- what is the cause of the exception?
- where did the exception occur?
- clarify how intent was violated

# Define Exception Classes in Terms of a Caller's Needs

## wrap third party code to reduce dependency

if an api is providing more functionality/exceptions than you need, wrap it

# Define the Normal Flow

Don't execute normal code in catch statements; avoid/surpress exceptions by having the invoked method return a valid Special Case object providing the expected result

# Don't Return Null

Throw an exception or return a Special Case object if possible

# Don't Pass Null

assertions / argument validation passes on the problem; nulls proliferate
