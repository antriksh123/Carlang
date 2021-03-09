# Sphinx

A simple and effective programming language which transpiles to JavaScript.

## Language Features

### Data Types

1. String
2. Number
3. Boolean

### Variable Assignment

To assign a variable in Sphinx we use the `set` keyword. The `set` keyword is followed by the identifier and then the value. For instance, `set x 2` will assign variable x with a value of 2. The data type inferred will be number in this case.

### Function Declaration

Declaring a function in Sphinx is super simple. If you are coming from JavaScript or Golang then you will be really familiar with declaring functions in Sphinx.

To declare a function, use the `func` keyword. The `func` keyword is followed by the identifier. Now if there are no parameters in your function then you can simply close the function with curly braces. This is how a function looks in Sphinx.

```
func thisIsFunction {

}
```

The above `thisIsFunction` takes no parameters thus there are no `()` around it. To accept parameters in your function, add paranthesis after the identifier like so:

```
func thisIsFunction ( withParameters ) {

}
```

Now Sphinx is space-sensitive so you need your parameters to have spaces around it. The reason is that the tokens are easy and efficiently parsed because of the spaces.