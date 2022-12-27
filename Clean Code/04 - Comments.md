---
created_at: "2022-11-25 18:32:57 -0500"
updated_at: "2022-11-25 18:32:57 -0500"
tags: ["programming", "architecture", "author:Robert C. Martin", "book:Clean Code"]
---
# Comments

Comments compensate for failing to express intent
Comments are undesirable can deviate and mislead without generating bugs in performance like code does

# Comments Do Not Make Up For Bad Code

Better to rewrite than to comment bad code

# Explain Yourself In Code

Better to write a function named what the comment would be

# Good Comments

- Legal Comments
- Informative Comments
  - providing examples of regex matches
- Explanation of Intent
  - document non-self-documenting code
- Clarification
  - decorate unalterable code (e.g. standard library)
- Warning of Consequences
  - e.g. running a particular test may be very slow
- TODO Comments
- Amplification
  - draw attention to some subtle side effect
- Javadocs in Public APIs

# Bad Comments

- Mumbling
  - imprecise comments which may have multiple interpretations
- Redundant Comments
- Misleading Comments
- Mandated Comments
- Journal Comments
  - duplication of source control
- Noise Comments
  - idle chit-chat/venting rather than rewriting
- Scary Noise
  - copy/paste comments restating the obvious

# Don't Use a Comment When You Can Use A Function

variable names provide documentation

# Position Markers

easily become background noise

# Closing Brace Comments

better to abstract / shorten blocks by creating separate functions

# Attributions and Bylines

duplicates source control

# Commented-Out Code

source control can remember deleted code for you

# HTML Comments

messy

# Nonlocal Information

comments should be co-located with what they're describing to preserve likelihood of upkeep during change

# Too Much Information

extraneous information that could be externally linked

# Inobvious Connection

comments which don't clearly connect to the code they're annotating

# Function Headers

better to improve function name / definition

# Javadocs in Nonpublic Code

just clutter; devs can read the code if they have to


