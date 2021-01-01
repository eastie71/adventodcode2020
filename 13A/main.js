
let test_arrival_time = 939
let test_bus_data = [
	7,13,59,31,19
]

let puzzle_arrival_time = 1008141
let puzzle_bus_data = [
  17,41,523,13,19,23,787,37,29
]

let result = document.querySelector(".result")

const getClosestTimeForBus = (bus_id, time_required) => {
  let currentTime = 0
  let currentFactor = 1
  while (currentTime < time_required) {
    currentTime = bus_id*currentFactor 
    currentFactor++
  }
  return currentTime
}

const getBusIdResult = (bus_data, time_required) => {
  let result = 0
  let busTime
  let bestBusId = -1
  let bestDiff = -1

  for (let i = 0; i < bus_data.length; i++) {
    const busId = bus_data[i]

    busTime = getClosestTimeForBus(busId, time_required)
    let currDiff = busTime - time_required
    if (bestDiff == -1 || currDiff < bestDiff) {
      bestDiff = currDiff
      bestBusId = busId
    }
  }
  return bestDiff*bestBusId
}

result.innerHTML = "2020 Question 13A - Bus Id Result = " + getBusIdResult(puzzle_bus_data, puzzle_arrival_time)