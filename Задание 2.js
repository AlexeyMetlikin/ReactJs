function calculateArea(...params){
  for(let i = 0; i < params.length; i++){
    if((typeof params[i] !== 'number') || params[i] <= 0)
      return {
      area: null,
      figure: 'is not figure',
      input: params
    };
  }
  
  if(params.length % 2 == 0){
    result = GetQuadrilateralArea(params);
  }
  else if(params.length === 3){
    result = GetTriangleArea(params);
  }
  
  if(!result)
    return {
      area: null,
      figure: 'unknown figure',
      input: params
    };
  
  return result;
}

function GetQuadrilateralArea(params){  
  if(params.length === 2 && params[0] == params[1])
    return GetSquareArea(params);
  return GetRectangleArea(params);
}

function GetSquareArea(params){
  return {
    area: params[0] * params[1],
    figure: 'square',
    input: [params[0], params[1]]
  };
}

function GetRectangleArea(params){
  if(params.length === 2)
    return {
    area: params[0] * params[1],
    figure: 'rectangle',
    input: params
  };
  
  if(params.length === 4){
    let area;
    if(params[0] == params[2] && params[1] == params[3] ||
       params[0] == params[3] && params[1] == params[2])
      area = params[0] * params[1];
    else if(params[0] == params[1] && params[2] == params[3])
      area = params[0] * params[2];
    
    if(typeof area === 'number')
      return {
        area: area,
        figure: 'rectangle',
        input: params
      };
  }
  
  return null;
}

function GetTriangleArea(params){
  let p = (params[0] + params[1] + params[2]) / 2;
  let area = Math.sqrt(p * (p - params[0]) * (p - params[1]) * (p - params[2]));
  if(area)
    return {
      area: Math.sqrt(p * (p - params[0]) * (p - params[1]) * (p - params[2])),
      figure: 'triangle',
      input: params
    };
  return null;
}

console.log(calculateArea(4, 4, 0, 0));
console.log(calculateArea('10', '4', 4, 10));
console.log(calculateArea(10, 10, '4', 10));
console.log(calculateArea(10, 10, 4, 4));
console.log(calculateArea(2, 2));
console.log(calculateArea(1, 2, 3));
console.log(calculateArea(12, 4, 3));
console.log(calculateArea(2, '10'));
console.log(calculateArea(2, 10, 's'));