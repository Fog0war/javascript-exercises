const fibonacci = function(n) {
    if (n < 1 || isNaN(n) == "true") {
        return "OOPS";
    } else if (n===1 || n===2) {
        return 1;
    } 
    let FibSeq = [1, 1]; 
    for (let i=1; i <= (n-2); i++) {
        FibSeq.push((FibSeq[i] + FibSeq[i-1]))
    };
    return FibSeq[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
