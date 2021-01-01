// Note: 0 in bus data means ANY bus
// Expected result = 1068781
let test_bus_data1 = [
	7,13,0,0,59,0,31,19
]

// Expected result = 3417
let test_bus_data2 = [
  17,0,13,19
]

// Expected result = 754018
let test_bus_data3 = [
  67,7,59,61
]

// Expected result = 1261476
let test_bus_data4 = [
  67,7,0,59,61
]

// Expected result = 1202161486
let test_bus_data5 = [
  1789,37,47,1889
]

let puzzle_bus_data = [
  17,0,0,0,0,0,0,41,0,0,0,0,0,0,0,0,0,523,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,19,0,0,0,23,0,0,0,0,0,0,0,787,0,0,0,0,0,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29
]

let result = document.querySelector(".result")

const busMatchesTimeRequired = (bus_id, time_required) => {
  return (time_required % bus_id) == 0 
}

// This ran for 1/2 hour on puzzle data before I gave up and killed it. It worked for the test data in less than 1 second!
const getTimestampResultSlow = (bus_data) => {
  let currentTime = 0
  let currentBusNum = 0
  let currentFactor = 1

  currentTime += bus_data[currentBusNum]*currentFactor
  currentBusNum++
  while (currentBusNum < bus_data.length) {
    let busId = bus_data[currentBusNum]
    if (busId == 0) {
      currentTime++
      currentBusNum++
    } else {
      if (busMatchesTimeRequired(busId, currentTime)) {
        currentTime++
        currentBusNum++
      } else {
        currentFactor++
        currentBusNum = 0
        currentTime = bus_data[currentBusNum]*currentFactor
      }
    }
  }
  return bus_data[0]*currentFactor
}

// This takes microseconds on the puzzle data!
const getTimestampResultFast = (bus_data) => {
  let currentStartTime = 0
  let currentTestTime = 0
  let currentBusNum = 0
  let currentStepSize = 0

  currentStartTime = 0
  currentStepSize = bus_data[0] 
  currentBusNum++
  while (currentBusNum < bus_data.length) {
    let busId = bus_data[currentBusNum]
    if (busId == 0) {
      currentBusNum++
    } else {
      currentTestTime = currentStartTime + currentBusNum
      if (busMatchesTimeRequired(busId, currentTestTime)) {
        currentStepSize = currentStepSize*busId
        currentBusNum++
      } else {
        currentStartTime += currentStepSize
      }
    }
  }
  return currentStartTime
}
result.innerHTML = "2020 Question 13B - Timestamp Result = " + getTimestampResultFast(puzzle_bus_data)