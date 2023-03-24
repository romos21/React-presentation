const MemoExample = require("./pages/MemoExample/MemoExample")


const t0 = performance.now()
MemoExample()
const t1 = performance.now()

console.log(`time spent ${t1-t0} milliseconds`)