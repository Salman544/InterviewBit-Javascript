
// https://www.interviewbit.com/problems/find-duplicate-in-array/ 

function findDuplicate(a) {
    let temp = a
    let duplicates = []
    temp.forEach(element => {
        let abs = Math.abs(element)
        if (temp[abs] >=0) {
            temp[abs] = -temp[abs] 
        } else if (!duplicates.includes(Math.abs(temp[abs]))) {
            duplicates.push(Math.abs(temp[abs]))
        }
    })

    return duplicates
}
