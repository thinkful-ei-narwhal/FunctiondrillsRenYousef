function getYearOfBirth (age) {
  return 2020 - age
}

function createGreeting (name, age) {
    if (typeof name !== 'string' || typeof age !== 'number'){
        throw new Error 
    }
  const yob = 2020 - age
  return `Sup, my name is ${name} and i am 26 years old. 
  I was born in ${yearOfBirth}`

}

function yearOfBirth (age) {
  if (age < 0) {
    throw new Error('Age can not be negative')
    return 'cant be negative'
  }
  try {
      const greeting1 = createGreeting('yousef', '26')
  }catch (e)
}


const greeting1 = createGreeting()
console.log(greeting1)

