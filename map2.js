const name = "faris"
const map = Array.prototype.map

const newName = map.call(name, eachLetter => {
    return `${eachLetter}is`
})

console.log(newName [2])