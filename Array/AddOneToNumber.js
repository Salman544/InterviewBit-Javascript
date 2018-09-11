function addOneToNumber(a) {
    return String(Number(a.join('')) + 1).split('').map(e => Number(e)) 
}
