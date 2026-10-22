function groupStudentsByMajor(students) {
    return students.reduce((groups, student) => {
        if (!groups[student.major]) {
            groups[student.major] = [];
        }

        groups[student.major].push(student);
        return groups;
    }, {});
}

const students = [
    {name: "bibil", major: "Informatika"},
    {name: "nabila", major: "Sistem Informasi"},
    {name: "tania", major: "Informatika"},
    {name: "mirna", major: "Sistem Informasi"}
];

const result = groupStudentsByMajor(students);

console.log(JSON.stringify(result, null, 2));