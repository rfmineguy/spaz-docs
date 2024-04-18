---
outline: deep
---

# Sample Program

The following is a sample of a program that asks for 2 numbers, and an operation and performs the corresponding operation and displays the result.

```spaz
"Enter a number: " print .
input
"Enter a number: " print .
input
"Enter an operator: " print .
input
;
"Result: " println .
if , "*" == {
	.
	, ,, * println .
	exit .
}
.
;
if , "+" == {
	.
	, ,, + println .
	exit .
}
.
;
if , "-" == {
	.
	, ,, - println .
	exit .
}
.
;
if , "/" == {
	.
	, ,, / println .
	exit .
}
"The entered operator is not implemented" println .
```
