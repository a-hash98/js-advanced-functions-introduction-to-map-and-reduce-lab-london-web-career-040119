// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(val => -val)
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    return sourceArray.map(val => val*2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(val => val*val)
}

function reduceToTotal(sourceArray, startingPoint=0){
    return sourceArray.reduce((partial_sum, a) => partial_sum + a, startingPoint);
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }