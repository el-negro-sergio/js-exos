x = ""
x = prompt("You want to calcule de factoriel of what number?")

function factorial(x)
{

  if (x == 0)
    return 1;
  else
    return x * factorial(x-1);

}
console.log(factorial(x))
