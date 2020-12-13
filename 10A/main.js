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

const getJoltDifferences = (adapters) => {
  adapters.sort((a,b) => a - b)
  let jolt1DiffCount = 0
  let jolt3DiffCount = 0
  for (let i = 0; i < adapters.length-1; i++) {
    const adapter = adapters[i];
    const nextAdapter = adapters[i+1]
    if (i == 0) {
      if (adapter == 1)
        jolt1DiffCount++
      else if (adapter == 3)
        jolt3DiffCount++
    }
    console.log(nextAdapter + " - " + adapter)
    if ((nextAdapter - adapter) == 1)
      jolt1DiffCount++
    else if ((nextAdapter - adapter) == 3)
      jolt3DiffCount++
    else {
      alert("Something went wrong - unexpected jolt difference")
      alert(nextAdapter + " - " + adapter)
    }
  }
  // Alwaya add extra jolt3
  jolt3DiffCount++
  console.log("Total of 1jolt diff = " + jolt1DiffCount + ", 3jolt diff = " + jolt3DiffCount)
  return (jolt1DiffCount * jolt3DiffCount)
}

result.innerHTML = "2020 Question 10A - Total Jolt Differences = " + getJoltDifferences(puzzle_adapters)