function createGreeting (name, age) {
let yearOfBirth = 2020 - age
  return `Sup, my name is yousef and i am 26 years old. 
  I was born in ${yearOfBirth}`
}

let greeting1 = createGreeting()
console.log(greeting1)