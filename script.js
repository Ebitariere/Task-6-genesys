let students= [
    { name: "mia", scores: {math: 10, english: 16, science:12}},
    { name: "vera", scores: {math: 9, english: 15, science:14}},
    { name: "james", scores: {math: 8, english: 14, science:13}},
    { name: "john", scores: {math: 7, english: 13, science:12}},
    { name: "alex", scores: {math: 6, english: 12, science:17}}
]

function calculateAverage(students) {
    let scores= Object.values(students.scores);
    let total= scores.reduce((sum,score)=> sum+ score, 0);
    return total / scores.length; 
}

 students.forEach(students=> {console.log(students.name + "'s average is " + calculateAverage(students));
 });