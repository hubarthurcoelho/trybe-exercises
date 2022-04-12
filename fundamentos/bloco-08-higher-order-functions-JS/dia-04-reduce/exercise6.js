const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const media = grades.map((element, index) => {
    let total = element.reduce((acc, curr) => acc + curr);
    const resposta = total / element.length;
    return resposta;
})

const finalArray = students.map((element, index) => (
    {
        name: element,
        average: media[index]
}));

console.log(finalArray);
