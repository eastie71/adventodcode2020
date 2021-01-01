let test_seat_map = [
  "L.LL.LL.LL",
  "LLLLLLL.LL",
  "L.L.L..L..",
  "LLLL.LL.LL",
  "L.LL.LL.LL",
  "L.LLLLL.LL",
  "..L.L.....",
  "LLLLLLLLLL",
  "L.LLLLLL.L",
  "L.LLLLL.LL"
]

let puzzle_seat_map = [
  "LLLLLLL.L.LL.L.LLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLL.L.LLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL",
	"LLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLL..LLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLL..LL.L.LLLLLLLLLLLLLLLLLLL.LLLL.",
	"LLLLLLLLL.LLLL.LLLL.LLL.LLL.LLLLL.L.LLLL.LLLL.LLLLLLLL.LLLLLLLLL.LL.LL.LLLLLLL.L.LLLL.LLLLL",
	"LLLLLLLLLLLLLL.LLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL",
	"LLLL.LLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL",
	"LLLLLLLLL..LLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLL.L..L.LLLLLLL.LLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL..LLLLLL.LLLLLLLLLLLL.LLLLLLLL.LLL.LL.LLLLLLLLL.LLLL.LLLLL",
	".L......LL..LL.LLL..L...L...L.............L........L.L......L..L...LLL....LLL..L..LL.....LL",
	"LLLLLLL.LLLL.L.LLLLLL.LLLLL.LLLLL.LLLLLL.LLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LL.LL",
	"LLLLLLLLL.LLLL.LLLL..LLLLLL.LLLLL.LL.LL.LLLLLLLLLLLLL..LLL.LLLLLLLLLLLLLLL.LLLLL.LLLL.LLL.L",
	"LLLL.LLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLL.L.LLL.LLLLLLLL.LLLLL..LLLLLLLLLLLLLL.LLLLL",
	"LLLLLLLLL.LLLL.LLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLLL",
	"LLLLLLLLL.LLLL.L.LL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL..LLLLL.LLLLLLLLL.LLL..LLLLL",
	"LLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLL.LLLL.L.LLLLLLL.LLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLL.LLLLL",
	"LLLLLLLLLLLLLL.LLLLLLLLLLLL.L.LLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLL.LLL.LL.L.LLLLL",
	"LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL.L.LLLLLLLLLLLLLL.LLLL.LLLLL",
	".L....L..L....L...L..L..LL..L..L...LLL.LLL.L..........LL.L.LL..L.L...LLL..........L....LL.L",
	"LLLLLLLLL.LLLL.LLLL.LL.LLLLLLLL.L.LLLLLL..LLLLLL.LLLLL.LLLLL.LL.LLLLL..LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLL.LLLL.LLLL.LLLLLLLL.LLLL.L.LLL.LLLLLLLLLLLLLLLLLL.LLLLL..LLLLLLLLL.LLLLLLLL.L",
	"LLL.LLLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLL.LL.LLLL.LLLL..LLLLLLLL.LL.LLLLLLLLLL.LL.LLLL.LLLLL",
	"LLLLLLLLL.LL.LLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLL.LLL.LLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLL",
	"LL...LLLL.LLLL.LLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLL..LLLLLLLLL.LLLL.LLL.L",
	"LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL..LLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLL.L.LLLL.LLLL.LLLL.LLLLL",
	"..LL.LLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
	"LL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLL..LLLLLL.LLLLLLLLL.LL.L.LLLL.",
	"LLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLL.LLLLLL.LLLLL.L.LLLLL.LLLLLLLL.LLLLLL.LLLL.LLLL.LLLLLLLLLL",
	"L........L.LL.....L..L...L....L....L.LL..L.........L..L..L......L.......L...L..L..........L",
	"LLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL",
	"LLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LL.LLL.LLLLLLL.LLLLL.LLLLLLLL.L.LLLLL.LLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLLLLL.L.LLLL.LL.LLLLLLLL.L..LLLLLLLLLLLLL.LLLLLL.LLLLLLL..LLLLLLL.LLLLLL..LLLL.LLLLL",
	"LLLLLLLLL.L.LL.LLLL.LLLLLLL.LLLLL.LLLLLL.LLL.LL.LLLLL..LLLLLLLL.LLLLLL.LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLL",
	"LLLLLLL.LLLLLLLLLL..LLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLL.L.LLL.LL.LLLLLL.LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLL.L.LL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLL.",
	"..L.L.....LL.L.L..L.L....LLLL.L.L..L..L.L.L.......LL.L...LL..L.L.....L....L....LLL....L.L..",
	"LLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.LL",
	"LL.LLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
	"LLLLLLLLLLLLLLL.LLL.L.LLLLL.LLLLL.LLLLLLLLLLLLLLLLL.LL.LLLLLLLL.LL..LLLLLLLLLLLL.LLLLLLLLLL",
	"LLLLLLLLL.LLLL.LLLLLLLLLLLL.LLLLL.LL.LLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL..LLL.LLLLL",
	"LLLLLLL.L.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLL.L.LLLLLLLL.LLLLLL.LLLLLLLLLLLLL..LLLLL",
	"LLLL.LLLL.LLLL.LLLL.LLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL",
	"...L.........LL.L..L.L.L......LL.......L........L...LL...LL.LL.........L...LL...L.LLL..L.L.",
	"LLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLLL.L.LLLL.LLLLL",
	"LL..LLLLL.L.LL.LLLL.LLLL.LL.LLLLL.LLLLLL.LLLLL.LLLLLLL.LLLLLLLL.LLLLL..LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLL.LLL.L.LL.LLLLL",
	"LLLLLLLLLLLLLLLLLLL.LLLLLLL..LLLL.LLLLLL.LLLLL.L.LLL.LLLLLLLLLL.LLLLLL..LLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLL.LLL.LLLLL",
	"..LL..LL....LL......L......LLL.L......L.L.L.L....L.LL....L...L.....L...L.L...LL....L.L.....",
	"LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL.L.LLLLL.LLLLL.LLLLLLLLL..LLLLLLLL.LLLLLLL.LL",
	"LLL.LLLLL.LLLLLL.LL.LLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLLLLLLLL.L.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLL.L.LLL..LLLLLLLLLLL.LL.LLLLLLLLLLLL.L.LLLLL",
	"LLLLLLLLL.LLLL.L.LL.L.LLLLL.LLLLLLLLLLLL..LLLLL.LLLLL.LLL.LLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLL",
	"LLLLL.LLL.LLLL.LLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL",
	"LLLLLLL.LLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL",
	"LLLLLLLLL.LLLL.LLLLLLLLLLLLL.LLL.LLLLLLLLLLL.LLL.LLLLLLLLLLLLLL..LLLLLL.LLLLLLLLLLLLL.LLLLL",
	"L.L.LL.L.....L...L.........LLLL.....L.L..LL.LL..L.L.....L.....L..L.L.L....L.L..L..L..LL..LL",
	"LLLLL.LLL.LLLL.LLLL.LLLLLLL.LL.LL..LLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LL.L.LL.LL",
	"LLLLLLLLL.LLLL.LLL..LLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLL",
	"LLLLLLLLL.LLLL.LLLL.LL.LLLL.LLLLL.LLL.LL.LL.LLLL.L.LLL.LLLLLLLLLLLLLLLLLLLLLL.LL..LLL.LLLLL",
	"LLLLLLLLL.LLLLLLL.L.LLLLLLL.LLLL..LLLLLL.LLL.LLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLL.LLL.LLLL.",
	"LLLLLLLLL.LLLL.LLLL.LLLLLLLLLLL.L.LLLLLL..LLLLLL.LLLLL.LLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLLLLLL",
	"LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLL.LLLLLL..L.LLLLLLLLLLLL.LLLLLLLLLLL.LL.L...LL.LLLLL",
	"L.L.L.LLL.L....L...L...L.LL..LL....LLLLL.L..LLL...L..L.......L.LL...L.L.L......LL...L.L.L.L",
	"LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL.L.LLLL.LLLLLLL.L.LLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLL.LLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLL..LLLLLLLL.LLLLLLLLLLLLLLLL.LLL..LLLLL",
	"LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLL.LL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLL",
	"LLL.LLLLL.LLLLL.LL..LLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLL.LLLL.L.LLLLL.LLLLL.LLLLLL.LL.LLLLLLLLL..LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL",
	"LLLLLLLLLL.LLL.LLLL.LLLL.LL.LLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLLLLLLL.LLLL.LLLLLLL.LLLLL..LLLLL..LLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LL",
	"LLLLLLL.LLLLL..LLLL.LLLLLLLLLLLLL.LLLLLL.L.LLLLL.LLLLLLLLLLLLLLLLLLLLL.L.LLLL.LL.LLLLLLLLLL",
	"LLLL.LLLL.LLLL.LLLLLLLLLLLL.LLLLL.LLLL.L.LLLLLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLL",
	"................L...LLL..LL....L.....L..L.LL..L....LL.L...LL.LL..L.L.L.....LLL.L....L.....L",
	"LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLL.LLLLLLLLL",
	"LLLLLLLLL.LLLL.LLLL.LLLLLL..LLLLL.LL.LLL.LLLLLLLLLLLLL.LL.LLLLL.LLLLLL.LLL.LLLLL.LLLL.LLLLL",
	"LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLL",
	"LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLL.LLLL.LL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLL..LLLLLLLLLLLLL.LLLLLLL.LLLLLLLL..LLLLLLLLLLLL.L.LLL",
	".LL...LLL.L.LL.LLLL.LLLLLLL.LLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLLLL.LLLL.LLLLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLL.LL.LLL.LLLLLLLLLLL.L.LLLLLLLLLLLLLLL.LLLLLLLLL.LLL.LLLLLL",
	"LLLLLLLLL.LLLL.L.LL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL",
	"....L...L....LL.L.L..L.L..L...LL....LL.....L.L...LL.L.L.......LL.L....LLL...L..LL.L....LLLL",
	"LLLLLLLLL.LL.LLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLLLL",
	"LLLLLLLLLLLLLL.LLLL.L.LLLLL.LLLLLLLLLLLL..LLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL",
	"LLLLLLLL.L.LL..LLL..LLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLL",
	"LLLLLLLLLLLLLLLLLLL.LLLL.LL.LLLLL.LLLLLL.LLLLLLL.L.LLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLLLL",
	"LLLLLLLLL.LLLL.LLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLL",
	"LLLLLLLLL.LLLL.LLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLL..LLLLLLLLL.LLLLLLLLLL"
]

let result = document.querySelector(".result")
let currentSeatMap = []

const getAdjacentOccupiedCount = (row_pos, col_pos) => {
  let count = 0
  let fromRow = row_pos
  let fromCol = col_pos
  let toRow 
  let toCol

  // North
  toRow = 0
  toCol = col_pos
  rowNum = fromRow
  colNum = fromCol
  while (rowNum >= toRow) {
    if (rowNum != row_pos || colNum != col_pos) {
      if (currentSeatMap[rowNum][colNum] == '#') {
        count++
        break
      } else if (currentSeatMap[rowNum][colNum] == 'L') {
        break
      }
    }
    rowNum--
  }

  // North East
  toRow = 0
  toCol = currentSeatMap[0].length
  rowNum = fromRow
  colNum = fromCol
  while (rowNum >= toRow && colNum < toCol) {
    if (rowNum != row_pos || colNum != col_pos) {
      if (currentSeatMap[rowNum][colNum] == '#') {
        count++
        break
      } else if (currentSeatMap[rowNum][colNum] == 'L') {
        break
      }
    }
    colNum++
    rowNum--
  }

  // East
  toRow = row_pos
  toCol = currentSeatMap[0].length
  rowNum = fromRow
  colNum = fromCol
  while (colNum < toCol) {
    if (rowNum != row_pos || colNum != col_pos) {
      if (currentSeatMap[rowNum][colNum] == '#') {
        count++
        break
      } else if (currentSeatMap[rowNum][colNum] == 'L') {
        break
      }
    }
    colNum++
  }

  // South East
  toRow = currentSeatMap.length
  toCol = currentSeatMap[0].length
  rowNum = fromRow
  colNum = fromCol
  while (rowNum < toRow && colNum < toCol) {
    if (rowNum != row_pos || colNum != col_pos) {
      if (currentSeatMap[rowNum][colNum] == '#') {
        count++
        break
      } else if (currentSeatMap[rowNum][colNum] == 'L') {
        break
      }
    }
    colNum++
    rowNum++
  }

  // South
  toRow = currentSeatMap.length
  toCol = col_pos
  rowNum = fromRow
  colNum = fromCol
  while (rowNum < toRow) {
    if (rowNum != row_pos || colNum != col_pos) {
      if (currentSeatMap[rowNum][colNum] == '#') {
        count++
        break
      } else if (currentSeatMap[rowNum][colNum] == 'L') {
        break
      }
    }
    rowNum++
  }

  // South West
  toRow = currentSeatMap.length
  toCol = 0
  rowNum = fromRow
  colNum = fromCol
  while (rowNum < toRow && colNum >= toCol) {
    if (rowNum != row_pos || colNum != col_pos) {
      if (currentSeatMap[rowNum][colNum] == '#') {
        count++
        break
      } else if (currentSeatMap[rowNum][colNum] == 'L') {
        break
      }
    }
    colNum--
    rowNum++
  }

  // West
  toRow = row_pos
  toCol = 0
  rowNum = fromRow
  colNum = fromCol
  while (colNum >= toCol) {
    if (rowNum != row_pos || colNum != col_pos) {
      if (currentSeatMap[rowNum][colNum] == '#') {
        count++
        break
      } else if (currentSeatMap[rowNum][colNum] == 'L') {
        break
      }
    }
    colNum--
  }

  // North East
  toRow = 0
  toCol = 0
  rowNum = fromRow
  colNum = fromCol
  while (rowNum >= toRow && colNum >= toCol) {
    if (rowNum != row_pos || colNum != col_pos) {
      if (currentSeatMap[rowNum][colNum] == '#') {
        count++
        break
      } else if (currentSeatMap[rowNum][colNum] == 'L') {
        break
      }
    }
    colNum--
    rowNum--
  }

  console.log("For seat: (" + row_pos + "," + col_pos + "): Count = " + count)
  return count
}

const countOccupiedSeats = (seating_map) => {
  let count = 0
  let rowWidth = seating_map[0].length
  for (let rowNum = 0; rowNum < seating_map.length; rowNum++) {
    for (let colNum = 0; colNum < rowWidth; colNum++) {
      let seat = seating_map[rowNum][colNum]
      if (seat == '#')
        count++
    }
  }
  return count
}

const getNumberOfOccupiedSeats = (seating_map) => {
  let newSeatMap = []
  let currSeatCount = -1

  currentSeatMap = [...seating_map]
  let rowWidth = currentSeatMap[0].length

  let temp = 0
  while (true) {
    
    newSeatMap = []
    for (let rowNum = 0; rowNum < currentSeatMap.length; rowNum++) {
      newSeatMap[rowNum] = ""
      for (let colNum = 0; colNum < rowWidth; colNum++) {
        let seat = currentSeatMap[rowNum][colNum]
  
        switch (seat) {
          case '.':
            newSeatMap[rowNum] += seat
            break
          
          case '#':
            if (getAdjacentOccupiedCount(rowNum, colNum) >= 5) {
              newSeatMap[rowNum] += 'L'
            } else {
              newSeatMap[rowNum] += seat
            }
            break          
          
          case 'L':
            if (getAdjacentOccupiedCount(rowNum, colNum) == 0) {
              newSeatMap[rowNum] += '#'
            } else {
              newSeatMap[rowNum] += seat
            }
            break
  
          default:
            alert("Unexpected Seat Type Found!")
            return -1
        }
      }
    }

    let newSeatCount = countOccupiedSeats(newSeatMap)
    if (currSeatCount == newSeatCount) {
      currSeatCount = newSeatCount
      break
    }
    currentSeatMap = [...newSeatMap]
    currSeatCount = newSeatCount
    console.log(currentSeatMap)

    // temp++
    // if (temp == 150)
    //   break
  }
  return currSeatCount 
} 

// Note: This will take around 1 minute to calculate
result.innerHTML = "2020 Question 11B - Total Occupied Seats = " + getNumberOfOccupiedSeats(puzzle_seat_map)