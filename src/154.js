// Flatmap

const school = [{
    name: 'class m1',
    students: [{
        name: 'Eme',
        grade: 8.1,
    }, { 
        name: 'Anne',
        grade: 9.3
    }]
}, {
    name: 'class m2',
    students: [{
        name: 'lily',
        grade: 8.9
    }, {
        name: 'Robert',
        grade: 7.7
    }]
}]

const getGradeStudent = student => student.grade;
const getGradeClass = class1 => class1.students.map(getGradeStudent);

const grades1 = school.map(getGradeClass);

console.log(grades1);

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

const grades2 = school.flatMap(getGradeClass);
console.log(grades2);