let simple_test_game_numbers = [ // 2020th =  436
  0, 3, 6
]

let another_simple_test_game_numbers = [ // 2020th = 1836 
  3, 1, 2
]

let puzzle_game_numbers = [
  13, 16, 0, 12, 15, 1
]

let result = document.querySelector(".result")

// JUST LEARNING HOW ARRAYS WORK....
// let seenNumbers = new Array()
// seenNumbers[0] = new Array()
// seenNumbers[0][0] = 1
// seenNumbers[0][1] = 4

// console.log("Seen NUmber 0: " + seenNumbers[0] + " length is " + seenNumbers[0].length)

// seenNumbers[3] = new Array()
// seenNumbers[3][0] = 2
// console.log("Seen NUmber 3: " + seenNumbers[3] + " length is " + seenNumbers[3].length)
// if (seenNumbers[0])
//   console.log("Seen Numbers 0 EXISTS")
// else
//   console.log("Seen Numbers 0 DOES NOT EXIST")

// if (seenNumbers[3])
//   console.log("Seen Numbers 3 EXISTS")
// else
//   console.log("Seen Numbers 3 DOES NOT EXIST")

// if (seenNumbers[4])
//   console.log("Seen Numbers 4 EXISTS")
// else
//   console.log("Seen Numbers 4 DOES NOT EXIST")

const getTurnResultForNumberGame = (numbers, turnNumber) => {
  let seenNumbers = new Array()
  let currentTurn = 1
  let currentNumber = 0
  // Start with initial numbers - assume they are all unique numbers
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    seenNumbers[number] = new Array()
    seenNumbers[number][0] = currentTurn
    currentTurn++
  }

  // Calculate the result for the particular turn number
  for (; currentTurn < turnNumber; currentTurn++) {
    //console.log("Turn number: " + currentTurn + ", Current Number = " + currentNumber)
    if (!seenNumbers[currentNumber]) {
      seenNumbers[currentNumber] = new Array()
      seenNumbers[currentNumber][0] = currentTurn
      currentNumber = 0 
    } else if (seenNumbers[currentNumber].length == 1) {
      seenNumbers[currentNumber][1] = currentTurn
      currentNumber = seenNumbers[currentNumber][1] - seenNumbers[currentNumber][0]
      //console.log("Here 1")
    } else {
      seenNumbers[currentNumber].shift()
      seenNumbers[currentNumber][1] = currentTurn
      currentNumber = seenNumbers[currentNumber][1] - seenNumbers[currentNumber][0]
      //console.log("Here 2")
    }
  }
  return currentNumber
}

result.innerHTML = "2020 Question 15A - 2020th Value is = " + getTurnResultForNumberGame(puzzle_game_numbers, 2020)