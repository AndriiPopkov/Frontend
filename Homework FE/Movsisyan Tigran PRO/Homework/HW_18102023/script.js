class NumberArray {
    constructor(arr) {
        this.array = arr
    }
    getLastElem() {
        return this.array[this.array.length - 1]
    }
    getAbs() {
        return Math.abs(this.array[0] - this.array[this.array.length - 1])
    }
    getSum() {
        return this.array.reduce((acc, el) => el + acc, 0)
    }
    setArray(n) {
        return this.array.map(el => el * n)
    }
    createObject() {
        //    const res = {}
        //    for (let i = 0; i < this.array.length; i++) {
        //     res[`elem${i+1}`] = this.array[i]
        //    }
        //    return res

        return this.array.reduce((res, el, index) => {
            res[`elem${index + 1}`] = el
            return res
        }, {})
    }
}

let a = new NumberArray([10, 20, 30, 40])
console.log(a['array']);
console.log(a.getLastElem());
console.log(a.getAbs());
console.log(a.getSum());
console.log(a.setArray(3));
console.log(a.createObject());