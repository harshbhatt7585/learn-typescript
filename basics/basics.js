/**
 * Explicit Types
 * The advantage of Typescript over Javascript is that the Typescript have type checking during compilation
 * In javascript when providing a argument in the function, the javascript has allowed to pass any type of value
 * therefore we are also unsure that when will be the output and type of outpu. But int typescript we are restricted to
 * provide type of value means we need to provide the required type of value what the function need and we can define the
 * what type of value the function needs while defining the functions.
 */
// example 1
function getMyName(person, date) {
    console.log("".concat(person, ", ").concat(date));
}
getMyName("Harsh", new Date());
