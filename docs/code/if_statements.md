---
outline: deep
---

# If Statements

If statements in Spaz are constructed by following the following grammar.

> [!NOTE]
> At the moment if statements do not support **else** or **else if** blocks, this is planned for the future though.

> Grammar: 
> `if := "if" <expression> <block>`

## Example
```spaz
if 3 5 < {
    "3 is less than 5" print .
}
```
- Even though this example shows a simple expression as the condition
