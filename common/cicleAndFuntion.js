function foo(car, names = null, state = null) {
    if (car > 1) {
        console.log('you have a car')
    } else {
        console.log('you have not a car')
        if (state) {
            console.log("you are a liar")
        }
    }
    for (const name of names) {
        if (names) {
            console.log(`your name is ${name}`)
        } else {
            console.log('your name is empty')
        }
    }
    for (let i = 0; i < 20; i++) {
        if (names) {
            console.log(`your name is ${name}`)
        } else {
            console.log('your name is empty')
        }
    }

}

const arrayName = ['Leo', 'Igor', 'lol', 'other', 'else']
foo(0, arrayName[0], true)