/**
 * Explicit Types
 * The advantage of Typescript over Javascript is that the Typescript have type checking during compilation
 * In javascript when providing a argument in the function, the javascript has allowed to pass any type of value
 * therefore we are also unsure that when will be the output and type of outpu. But int typescript we are restricted to
 * provide type of value means we need to provide the required type of value what the function need and we can define the 
 * what type of value the function needs while defining the functions.
 */


// example 1
function getMyName(person: string, date: Date) {
    console.log(`${person}, ${date}`)
}

getMyName("Harsh",  new Date())



/**
 * Primitve types: string, number, boolean
 * any: this type means any value, but will act as a regular javascript
 * noImplicitAny: When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any
 */


// type annotation on variables
let myName: string = "Harsh"
// if we don't define 'myName' as string, the typescript auto sets the type annoation of any variable with the type of value it is assigned,
// this is called contextual typing


// Return type annotation in function: we can also define what type of value the function will and must return
function getANumber(): number {
    return 0
}

async function getANumber(): Promise<number> {
    return 0
}


// contextaul typeing alo applies in anonomous functions
const names = ["Harsh", "Neel", "Aadi"]
names.forEach((s) => {
    console.log(s.toUpperCase())
}) 

// the parameter's type annotation is an object type
function printCoord(pt: {x: number, y: number}) {
    console.log(pt.x)
    console.log(pt.y)
}

// we can also add optional properties in object types
function printCoord2(pt: {x: number, y:number, z?: number}) {
    console.log(pt.x)
    console.log(pt.y)
    if (pt.z) {
        console.log(pt.z)
    } 
}

// typescript also provides union types, which means you can define two possible types of a same variable or a argument
function getANumber2(num: number | string) {
    if (typeof(num) === "string") {
        return Number(num)
    }
    return num
}


// type aliases 
// to write more clean code insead of writing type annotation in function argument
// we can create type aliases
type Coordinates = {
    x: number,
    y: number,
    z?: number
}
function printCoord3(pt: Coordinates) {
    console.log(pt.x)
    console.log(pt.y)
    if (pt.z) {
        console.log(pt.z)
    }
}


// interface is another wat to name an object types
interface Coordinates2 {
    x: number,
    y: number,
    z?: number
}

function printCoord4(pt: Coordinates2) {
    console.log(pt.x)
    console.log(pt.y)
    if (pt.z) {
        console.log(pt.z)
    }
}
