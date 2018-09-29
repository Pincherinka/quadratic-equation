module.exports = function solveEquation(equation) {
  
  //getting a, b, c from the string where ax2 + bx + c is input string values

  const x1Position = equation.search('x');
  let a = toInt(equation.slice(0, x1Position-3));

  let subEquation = equation.substring(x1Position+4);
  const x2Position = subEquation.search('x');
  let b = toInt(subEquation.slice(0, x2Position-3));

  let c = toInt(subEquation.slice(x2Position+2));

  //check D - descriminant D = b2 − 4ac

  const D = b*b - 4*a*c;
  
  // calc x1 and x2  - result values
  let result = [];
  if (D >= 0) {
    let x1 = Math.round((-b + Math.sqrt(D))/(2*a));
    let x2 = Math.round((-b - Math.sqrt(D))/(2*a));

    result.push(x1, x2);    
    result.sort((a, b) => a - b);

  } else result.push(0, 0); 

  return result;
  }

//make a, b, c integer values
function toInt (str) {
  if (isNaN(str) === true)
    { 
      let sign = str.slice(0, 1);     
      str = str.substring(2);
      
      return parseInt(sign + str);

    } else return parseInt(str);
}


