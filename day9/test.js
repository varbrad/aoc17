const expect = require('unexpected')

const { solve1, solve2 } = require('./solve')

describe('Day 9', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      expect(solve1('{}'), 'to be', 1)
    })
    it('Example 2', function() {
      expect(solve1('{{{}}}'), 'to be', 6)
    })
    it('Example 3', function() {
      expect(solve1('{{},{}}'), 'to be', 5)
    })
    it('Example 4', function() {
      expect(solve1('{{{},{},{{}}}}'), 'to be', 16)
    })
    it('Example 5', function() {
      expect(solve1('{<a>,<a>,<a>,<a>}'), 'to be', 1)
    })
    it('Example 6', function() {
      expect(solve1('{{<ab>},{<ab>},{<ab>},{<ab>}}'), 'to be', 9)
    })
    it('Example 7', function() {
      expect(solve1('{{<!!>},{<!!>},{<!!>},{<!!>}}'), 'to be', 9)
    })
    it('Example 8', function() {
      expect(solve1('{{<a!>},{<a!>},{<a!>},{<ab>}}'), 'to be', 3)
    })
  })
  describe('Part 2', function() {
    it('Example 1', function() {
      expect(solve2('<>'), 'to be', 0)
    })
    it('Example 2', function() {
      expect(solve2('<random characters>'), 'to be', 17)
    })
    it('Example 3', function() {
      expect(solve2('<<<<>'), 'to be', 3)
    })
    it('Example 4', function() {
      expect(solve2('<{!>}>'), 'to be', 2)
    })
    it('Example 5', function() {
      expect(solve2('<!!>'), 'to be', 0)
    })
    it('Example 6', function() {
      expect(solve2('<!!!>>'), 'to be', 0)
    })
    it('Example 7', function() {
      expect(solve2('<{o"i!a,<{i<a>'), 'to be', 10)
    })
  })
})
