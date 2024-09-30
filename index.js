// // code your solution here


function superbowlWin(records) {
    const winRecord = records.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
}

// Example usage:
const results = [
    { year: 2018, result: "L" },
    { year: 2019, result: "W" },
    { year: 2020, result: "L" },
];

console.log(superbowlWin(results)); // Output: 2019





