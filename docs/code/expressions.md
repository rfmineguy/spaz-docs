---
outline: deep
---

# Expressions

## Infix vs Postfix

In other languages expressions are typically expressed in `infix` notation. Infix notation basically means that the operation lies in between two terms.

Example:
`4 + 5`

Additionally, infix requires that you include parenthesis to change the order of evaluation from the normal order of operations.

Example:
`4 + 5 * 3` != `(4 + 5) * 3`

In postfix though this is not an issue! The order of operations is built into the syntax and requires no parenthesis to indicate them.

## Spaz Expressions
Now that you have a basic understanding of postfix, you will be able to understand the format of expressions in Spaz.

> Grammar:<br>
> `expression := term`<br>
> `expression := stack_op`<br>
> `expression := procedure_call`<br>
> `expression := expression expression operator`<br>


### Example
```spaz
5 9 + 9 *
```

This simple spaz expression translates directly to `(5 + 9) * 9` in normal infix notation. For more thorough explanation see [Infix vs Postfix](#infix-vs-postfix).

### Mathematical Operations
----
There is nothing surprising when it comes to the mathematical operations supported. They include:
* `+` - performs addition on the last two values on the stack
* `-` - performs subtraction on the last two values on the stack
* `*` - performs multiplication on the last two values on the stack
* `/` - performs division on the last two values on the stack
* `%` - performs modulus on the last two values on the stack

----
### Stack Operations
Spaz expressions also support stack operations, which are operations that directly interface with the current state of the "runtime stack".

There are currently three planned stack operations.
* `;` - duplicate the top of the stack
* `,` - peek the top of the stack
* `.` - pop the top of the stack

----
### Procedure Calls
Procedure calls in spaz are considered expressions in Spaz.
They are classified as any identifying label following an expression.

> Grammar:
> `procedure_call := <expression> <id>`

#### Example
```spaz
4 9 + 4 * print
```
> `print` is one of the various built-in procedures that are able to be used

In this example we are printing the result of the expression `4 9 + 4 *`

> [!NOTE]
> Support for making your own procedures is planned, but not implemented

---
#### Built in procedure calls
| Procedure | Description |
| --------- | ----------- |
| print     | display the value at the top of the stack with no newline |
| println   | display the value at the top of the stack *with* newline |
| input     | waits for terminal input and stores what it at the top of the stack |
| exit      | exits the program immediately (no exit code argument) |
| showstack | displays the current state of the stack |
