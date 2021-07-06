// Your code here
function mapToNegativize(sourceArray) {
    

    return sourceArray.map( x => x * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x )
}

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map( x => x**2)
}


function reduceToTotal(sourceArray, startingPoint = 0) {
    let reducer = (accumulator, currentValue) => accumulator + currentValue

    return sourceArray.reduce(reducer, startingPoint)
}

function reduceToAllTrue(sourceArray) {
    let reducer = (accumulator, currentValue) => {
        if (!!accumulator == true && !!currentValue == true) {
            return true
        }else{
            return false
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray) {
 let reducer = (accumulator, currentValue) => {
     if(!!accumulator == true || !!currentValue == true) {
         return true
     }else{
         return false
     }
 }
 return sourceArray.reduce(reducer, false, true)
}