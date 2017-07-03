balanceParen = (string) => {
    return !string.split("").reduce(function(prev, char) {
        if(prev < 0) {return prev;}
        if(char==="(") {return ++prev;}
        if(char===")") {return --prev;}
        return previous;
    },0);
}

console.log(balanceParen("()()()()"));
