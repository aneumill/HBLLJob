

function reverseString(string)
{
    let newString=""
    for (let i=string.length-1; i >= 0; i--)
    {
        newString+=string[i]
    }
    return newString
}

console.log("Reverse String Function")
console.log(reverseString("Megszentségteleníthetetlenségeskedéseitekért"))


function highest(int1, int2, int3)
{
    return Math.max(int1, int2, int3);
}
console.log("Highest Input")
console.log(highest(5,23,3))

//Fibonnaci Solution 
function fibonnaci(number)
{
    fibonnaci_array = [0, 1];
    for (let index = 0; index < number; index++)
    {
    next_number = fibonnaci_array[index] + fibonnaci_array[index + 1]
    fibonnaci_array.push(next_number)
    }
    final_number = fibonnaci_array[number]
    return final_number
}
console.log("Fibonnaci Sequence")
console.log(fibonnaci(5))


//Factorial Solution
function factorial(fact_number)
{
    final_number = 1;
    for (let index = 1; index <= fact_number; index++)
    {
        final_number = (final_number * index);
    }
    return final_number
}
console.log("Factorial Sequence")
console.log(factorial(5))



