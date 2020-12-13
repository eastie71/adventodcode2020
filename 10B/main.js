let test_adapters = [
  28,33,18,42,31,14,46,20,48,47,24,23,49,45,19,38,39,11,1,32,25,35,8,17,7,9,4,2,34,10,3
]

let simple_test_adapters = [
  16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4
]

let puzzle_adapters = [
  8, 131, 91, 35, 47, 116, 105, 121, 56, 62, 94, 72, 13, 82, 156, 102, 12, 59, 31, 138, 46, 120, 7, 127, 126, 111, 2, 123, 22, 69, 18, 157, 75,
  149, 88, 81, 23, 98, 132, 1, 63, 142, 37, 133, 61, 112, 122, 128, 155, 145, 139, 66, 42, 134, 24, 60, 9, 28, 17, 29, 101, 148, 96, 68, 25, 19,
  6, 67, 113, 55, 40, 135, 97, 79, 48, 159, 14, 43, 86, 36, 41, 85, 87, 119, 30, 108, 80, 152, 158, 151, 32, 78, 150, 95, 3, 52, 49
]

let result = document.querySelector(".result")

const getDistinctAdaptorCount = (adapters) => {
  adapters.sort((a,b) => a - b)
  let currCountJolt1Differences = 0
  let count3jolt1Diffs = 0
  let count2jolt1Diffs = 0
  let count1jolt1Diffs = 0
  for (let i = 0; i < adapters.length-1; i++) {
    const adapter = adapters[i];
    const nextAdapter = adapters[i+1]
    if (i == 0) {
      if (adapter == 1)
        currCountJolt1Differences++
    }
    console.log(nextAdapter + " - " + adapter)
    if ((nextAdapter - adapter) == 1) {
      currCountJolt1Differences++
    } else if ((nextAdapter - adapter) == 3) {
      if (currCountJolt1Differences > 0)
        currCountJolt1Differences--
      console.log("Current Jolt1 diffs = " + currCountJolt1Differences)
      if (currCountJolt1Differences == 1)
        count1jolt1Diffs++
      else if (currCountJolt1Differences == 2)
        count2jolt1Diffs++
      else if (currCountJolt1Differences == 3)
        count3jolt1Diffs++
      currCountJolt1Differences = 0
    } else {
      alert("Something went wrong - unexpected jolt difference")
      alert(nextAdapter + " - " + adapter)
    }
    if (currCountJolt1Differences == 4) {
      count3jolt1Diffs++
      currCountJolt1Differences = 1
    }
  }
  console.log("Count of 1 = " + count1jolt1Diffs + ", count of 2 = " + count2jolt1Diffs + ", count of 3 = " + count3jolt1Diffs)

  // Set of 3 1Jolt Diffs have 7 different combinations, Set of 2 1Jolt Diff 4 combinations, 1Jolt Diff has 2 combinations (either off or on)
  // So answers is: 7^count3jolt1Diffs * 4^count2jolt1Diffs * 2^count1joltDiffs
  let result = Math.pow(7, count3jolt1Diffs) * Math.pow(4, count2jolt1Diffs) * Math.pow(2, count1jolt1Diffs)

  return result
}

result.innerHTML = "2020 Question 10A - Total Distinct Possible Adaptor Ways = " + getDistinctAdaptorCount(puzzle_adapters)
