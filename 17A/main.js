let test_cube_state = [ // Should be 112 active after 6th cycle
  "###",
  "..#",
  ".#."
]

let puzzle_cube_state = [
  ".##.####",
  ".#.....#",
  "#.###.##",
  "#####.##",
  "#...##.#",
  "#######.",
  "##.#####",
  ".##...#."
]

let result = document.querySelector(".result")

let currentActiveState = []
let newActiveState = []
let currentXSize
let currentYSize
let currentZSize

const buildLocation = (x_ord, y_ord, z_ord) => {
  return x_ord + ", " + y_ord + ", " + z_ord
}

const setupActiveCubeState = (cubeState) => {
  let activeCubes = []
  for (let y_ord = 0; y_ord < cubeState.length; y_ord++) {
    const y_element = cubeState[y_ord];
    for (let x_ord = 0; x_ord < y_element.length; x_ord++) {
      const cube = y_element[x_ord];
      if (cube == '#') {
        activeCubes.push(buildLocation(x_ord, y_ord, 0))
      }
    }
  }
  return activeCubes
}

const getActiveNeighbourCount = (x_pos, y_pos, z_pos) => {
  let location
  let count = 0
  
  for (let currXPos = x_pos-1; currXPos <= x_pos+1; currXPos++) {
    for (let currYPos = y_pos-1; currYPos <= y_pos+1; currYPos++) {
      for (let currZPos = z_pos-1; currZPos <= z_pos+1; currZPos++) {
        location = buildLocation(currXPos, currYPos, currZPos)
        if (currXPos != x_pos || currYPos != y_pos || currZPos != z_pos) {
          if (currentActiveState.find(element => element == location)) {
            //console.log(location)
            count++
          }
        }
      }
    }
  }
  return count
}

const initialSetup = (initialCubeState) => {
  currentActiveState = setupActiveCubeState(initialCubeState)
  currentXSize = initialCubeState[0].length
  currentYSize = initialCubeState.length
  currentZSize = 1
} 

const getActiveCount = (numberOfCycles) => {
  let currentPos = 0
  for (let i = 0; i < numberOfCycles; i++) {
    currentXSize += 2
    currentYSize += 2
    currentZSize += 2
    currentPos -= 1
    newActiveState = []
  
    for (let xPos = currentPos; xPos <= (currentPos + currentXSize); xPos++) {
      for (let yPos = currentPos; yPos <= (currentPos + currentYSize); yPos++) {
        for (let zPos = currentPos; zPos <= (currentPos + currentZSize); zPos++) {
          let neighbourCount = getActiveNeighbourCount(xPos, yPos, zPos) 
          let location = buildLocation(xPos, yPos, zPos)
          let active = currentActiveState.find(element => element == location)
          //console.log("For location: " + location + ", Count = " + neighbourCount + " and Active = " + active)
          if (active && (neighbourCount == 3 || neighbourCount == 2)) {
            newActiveState.push(location)
          } else if (!active && (neighbourCount == 3)) {
            newActiveState.push(location)
          }
        }
      }
    }
  
    currentActiveState = newActiveState.slice()
  }
  console.log(currentActiveState)
  return (currentActiveState.length)
}

initialSetup(puzzle_cube_state)

result.innerHTML = "2020 Question 17A (3 dimensions) - Number of Cubes in Active state after 6th cycle = " + getActiveCount(6)