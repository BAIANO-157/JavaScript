// valores falsy
console.log(!!0);        // false
console.log(!!"");       // false
console.log(!!null);     // false   

// Valores truthy
console.log(!!1);         // true
console.log(!!"texto");   // true
console.log(!![]);        // true (Array vazios são objetos, logo são truthy)
console.log(!!{});        // true (Objetos vazios são truthy)