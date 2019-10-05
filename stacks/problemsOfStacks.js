/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
 */

 function valid(string){
    let pairs = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    };
    let stack = [];
    for(let i = 0; i < string.length; i++){
        let char = string[i];
        if(pairs[char]){
            stack.push(char);
        }else if(char === '}' || char === ']' || char === ')'){
            if(pairs[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
 }