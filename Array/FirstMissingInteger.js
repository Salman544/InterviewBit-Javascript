
//https://www.interviewbit.com/problems/first-missing-integer/
function firstMissingInteger(a) {
    let firstPositveInteger = Number.MIN_VALUE
    let temp = a.sort().filter(e => e > 0)
    if (temp.length === 1) { return 1 }
    for(const [index, elm] of temp.entries()) {
        if(elm !== index+1) {
            firstPositveInteger = index+1
            break
        }
    }
    let bool = firstPositveInteger === Number.MIN_VALUE
    return bool ? temp[temp.length -1] + 1 : firstPositveInteger
}

console.log(firstMissingInteger([-8, -7, -6]))
