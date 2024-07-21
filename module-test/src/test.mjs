// export const num = 35;

// export function add(num1, num2) {
//     return num1 + num2
// }

// export function User(name) {
//     this.name = name;
// }

const num = 35;

function add(num1, num2) {
    return num1 + num2
}

function User(name) {
    this.name = name;
}

export {num, add, User};


// export default function User() {};   가능
// export default const add () => {};   불가능
// export default let name;   불가능
// export default var num; 불가능