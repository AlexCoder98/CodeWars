function kebabize(str) {
    return str.split("").map((char, index) => char.match(/[^0-9]/) ? char.match(/[A-Z]/) ? (index == 0 ? char.toLowerCase() : `-${char.toLowerCase()}`) : char : "").join("");
}

const result = kebabize("AbstractSingletonProxyFactoryBean");
// console.log(result);