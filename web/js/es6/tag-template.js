function passthru(literals, ...substitutions) {
    console.log(literals)
    console.log(substitutions)
}

// passthru('abc', 'd', 'e', 'f')

const name = '[allen]'
// const gender = 'nan'
// const addr = 'Nanjing'

// passthru`xyz${name} x1 ${gender} x2 $${addr}end`

let message1 = `Multiline\nstring`,
message2 = String.raw({raw: `Multili${name}ne\nstring`}, [])

let message3 = passthru(`Multili${name}ne\nstring`)


// console.log(message1)
console.log(message2)
