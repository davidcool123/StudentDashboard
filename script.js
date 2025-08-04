const students = [
    {name: 'Alice', grade: 85},
    {name: 'Bob', grade: 58},
    {name: 'Charlie', grade: 95},
    {name: 'Diana', grade: 72},
    {name: 'Eli', grade: 66}
];

const total = students.length;






const average = students.reduce((sum, s) => sum + s.grade, 0) / total;

const passing = students.filter(s => s.grade >= 70);


const labels = students.map(s => {
    const status = s.grade >= 70 ? 'Pass' : 'Fail';
    return {
        name: s.name,
        grade: s.grade,
        status: status
    };
});

const dashboard = document.getElementById('dashboard');

dashboard.innerHTML = '';

const statsSection = document.createElement('section');
statsSection.innerHTML = `
  <p><strong>Total Students:</strong> ${total}</p>
  <p><strong>Class Average:</strong> ${average.toFixed(2)}</p>
  <p><strong>Passing Students:</strong> ${passing.map(student => student.name).join(', ')}</p>
`;
dashboard.appendChild(statsSection);

const gradesSection = document.createElement('section');
const gradesHeading = document.createElement('h3');
gradesHeading.textContent = 'Student Grades';
gradesSection.appendChild(gradesHeading);

const ul = document.createElement('ul');

labels.forEach(label => {
    const li = document.createElement('li');
    li.className = label.status === 'Pass' ? 'pass' : 'fail';
    li.textContent = `${label.name} - ${label.grade} (${label.status})`;
    ul.appendChild(li);
});

gradesSection.appendChild(ul);
dashboard.appendChild(gradesSection);