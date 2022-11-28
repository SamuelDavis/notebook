# Data Abstraction

make implementation irrelevant; manipulate the concept, not the data

# Data/Object Anti-Symmetry

## modeling
- Data Structure: expose data with no meaningful function
- Object: hide data with meaningful abstractions

## paradigms
- Procedural Code:
  - easy to add new functions without changing structures
    - data is simply arguments to functions
  - hard to add new structures without changing functions
    - functions have no case for handling new structure
- Object Oriented Code:
  - easy to add new classes without changing functions
    - polymorphism
  - hard to add new functions without changing classes
    - add new function to base class/interface, inheritors must implement

# The Law of Demeter

> Any method _f_ of class _C_ should only call the methods of...
> - _C_
> - An object created by _f_
> - An object passed as an argument to _f_
> - An object held in an instance of _C_
> 
> ...and should not call methods on objects returned from the allowed.
> 
> "Talk to friends, not to strangers."

# Train Wrecks

Long chains digging deeply into nested objects requires a function to know too much about the rest of the application, but data structures are fine.

# Hybrids

Avoid: a mixed object and data structure; hard to add to, hard to change.

## Hiding Structure

Objects do something; don't ask for internals. Instead of asking for internals, move implementation into the object.

# Data Transfer Objects

data structures which collect raw data (e.g. database row, socket data) into a known, compiler-parsable structure.

"Beans" are data transfer objects which have getters/setters for every property and no other methods

# Active Record

*data structures* with _database methods only_. Put business rules in separate classes.

# Conclusion

- for behavior, objects
- for data, structures

