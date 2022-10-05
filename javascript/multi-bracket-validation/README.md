# Challenge Summary

- Write a function called validate brackets
- Arguments: string
- Return: boolean
  - representing whether or not the brackets in the string are balanced
- There are 3 types of brackets:
  - Round Brackets : ()
  - Square Brackets : []
  - Curly Brackets : {}

## Whiteboard Process

[validate brackets whiteboard](./img/validate-brackets.png)

## Approach & Efficiency

We chose to take the approach of iterating through the string that was inserted into the function, and pushing the characters into an empty stack if they met a certain condition - in this case, if they are an opening bracket. Then, if we came across a closing bracket, we would peek into the stack. Using a 'bracketDictionary' that assigned the opening and closing brackets to eachother, if the value on the top of the stack matches the current closing bracket, then that value would be popped off the top of the stack. When we get to the end of the string, if the stack is empty then the function returns true, otherwise if it has values inside of the stack, the function returns false. The BigO for time is O(n) and space is O(n).

## Solution

You would need to create the 'bracketDictionary' that assigns opening brackets to their matching closing bracket. Then all you would need to do is call the function with a string as an argument. The function will return true if brackets are found with both an opening and closing bracket. A single bracket will return false, an opening bracket without a closing bracket will return false, a pair of opening and closing brackets that are separated by another non-matching bracket will return false..
