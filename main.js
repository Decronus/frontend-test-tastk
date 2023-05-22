const list = [200, "asd", 1, 0, 77, 830, "qerdf", "alsdkf", 500];
function filterList(list) {
    const newList = [];
    list.forEach((el) => {
        if (typeof el === "number") {
            newList.push(el);
        }
    });
    return newList;
}
console.log(filterList(list));

function accum(string) {
    const lowercaseArray = string.toLowerCase().split("");
    let resultString = "";
    lowercaseArray.forEach((el, index) => {
        for (let i = 0; i <= index; i++) {
            i === 0 ? (resultString += el.toUpperCase()) : (resultString += el);
        }
        if (index + 1 !== lowercaseArray.length) {
            resultString += "-";
        }
    });
    return resultString;
}
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

const products = [
    { name: "Футболка", price: 20, quantity: 2 },
    { name: "Джинсы", price: 50, quantity: 1 },
    { name: "Носки", price: 5, quantity: 10 },
    { name: "Штаны", price: 30, quantity: 1 },
];
function income(products) {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
}
console.log(income(products));
