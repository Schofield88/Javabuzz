describe('Fizzbuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new Fizzbuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
  });
});
