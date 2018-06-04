const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kitten
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kitten
}

function destructiveRemoveFirstKitten() {
  kittens.shift()
  return kitten
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kitten]
}

function removeLastKitten() {
  return kittens.slice(0, kitten.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}