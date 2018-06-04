const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kitten.unshift(name)
  return kitten
}

function destructivelyRemoveLastKitten() {
  kitten.pop()
  return kitten
}

function destructiveRemoveFirstKitten() {
  kitten.shift()
  return kitten
}

function appendKitten(name) {
  return [...kitten, name]
}

function prependKitten(name) {
  return [name, ...kitten]
}

function removeLastKitten() {
  
}