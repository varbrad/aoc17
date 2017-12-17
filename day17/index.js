const fs = require('fs')
const path = require('path')

const { solve1, solve2 } = require('./solve')

const input = 377

console.time('solve1()')
const p1 = solve1(input)
console.timeEnd('solve1()')
console.time('solve2()')
const p2 = solve2(input)
console.timeEnd('solve2()')

console.log('Day 17, Part 1:', p1)
console.log('Day 17, Part 2:', p2)
