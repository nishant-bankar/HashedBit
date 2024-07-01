let studentsData = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }},
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }},
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }}
];

studentsData = studentsData.map(student => {
    const studentName = Object.keys(student)[0];
    const average = Object.values(student)[0];
    return { [studentName]: { average: (Object.values(average).reduce((acc, val) => acc + val, 0) / 5) }};
});

console.log(studentsData);
