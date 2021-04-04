/**
 * returns true if value is odd, false if val is even
 eg. isOdd(3) = true, isOdd(2) = false
 remember != reverses the statment 
 * @param { number } val the value to test
 * @returns { Boolean } value indicating if the argument was odd or even
 */
export function isOdd(val){
  return val % 2 > 0
}

/**
  * Shuffles the elements within the provided array (arr) randomly
  * @param { Array } arr the array of elements to shuffle
  * @returns { Array } shuffled array
  */
export function shuffle(arr) {
    let _arr = arr;
    let currentIndex = _arr.length, tempValue, randomIndex;

    // while there are elements left to shuffle....
    while (currentIndex != 0) {
      // pick an element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1; // use full version when inside iterators (currentIndex = currentIndex - 1)

      // swap it with a different element
      tempValue = _arr[currentIndex];
      _arr[currentIndex] = _arr[randomIndex];
      _arr[randomIndex] = tempValue;
    };

    return _arr;
}

export function getRandomColour() {
  const letters = '0123456789ABCDEF'; // possible values to make a hex colour
  let colour = '#'; // hex colour starts with a #
  // (i++) = (i += 1) = (i = i + 1); so ++ just increments by 1
  for( let i = 0; i < 6; i++) { // i = iterator value to count how many loops we have finished
    // each iteration of the for loop
    // grab a new value from the possible 'letters' array 
    // and add it to the end of the 'colour' string
    colour += letters[Math.floor(Math.random() * 16)];
  }

  return colour; // return the new random colour
}