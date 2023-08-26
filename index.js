function add(...a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] !== "number") {
      return ["error", 0];
    } else {
      sum = sum + a[i];
    }
  }
  return ["success", sum];
}

function subtraction(...a) {
  let sub = a[0];
  for (let i = 1; i < a.length; i++) {
    if (typeof a[i] !== "number") {
      return ["error", 0];
    } else {
      sub = sub - a[i];
    }
  }
  return ["success", sub];
}

function multiplication(...a) {
  let mul = a[0];
  for (let i = 1; i < a.length; i++) {
    if (typeof a[i] !== "number") {
      return ["error", 0];
    } else {
      mul = mul * a[i];
    }
  }
  return ["success", mul];
}

function division(...a){

  let divi=a[0]
  for(let i=1;i<a.length;i++){
    if(typeof a[i]!="number"){
      return["error",0]
    }
    else{
      divi/=a[i]
    }
  }
  return["success",divi]
}

function ceils(...a) {
  let divi = a[0];
  for (let i = 1; i < a.length; i++) {
    if (typeof a[i] !== "number") {
      return ["error", 0];
    } else {
      divi = divi / a[i];
    }
  }
  return ["success", Math.ceil(divi)];
}

function floors(...a) {
  let divi = a[0];
  for (let i = 1; i < a.length; i++) {
    if (typeof a[i] !== "number") {
      return ["error", 0];
    } else {
      divi = divi / a[i];
    }
  }
  return ["success", Math.floor(divi)];
}

function factory(functionName) {
  switch (functionName) {
    case "add":
      return add;
    case "subtraction":
      return subtraction;
    case "multiplication":
      return multiplication;
    case "division":
      return division;
    case "ceils":
      return ceils;
    case "floors":
      return floors;
    default:
      return function () {
        return ["error", "Invalid choice"];
      };
  }
}


