let listItems = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];
//let students = ['Simão', 'Raquel', 'Luiz', 'Paulo'];

let students = [
  { name: 'Adriana', bootcamp: 'WebDev' },
  { name: 'Andrea', bootcamp: 'WebDev' },
  { name: 'Brenda', bootcamp: 'WebDev' },
  { name: 'Gabriella', bootcamp: 'WebDev' },
  { name: 'Jason', bootcamp: 'WebDev' },
  { name: 'John', bootcamp: 'WebDev' },
  { name: 'Lucas', bootcamp: 'WebDev' },
  { name: 'Luis', bootcamp: 'WebDev' },
  { name: 'Luisa', bootcamp: 'WebDev' },
  { name: 'Luiz', bootcamp: 'WebDev' },
  { name: 'Majid', bootcamp: 'WebDev' },
  { name: 'Matulan', bootcamp: 'WebDev' },
  { name: 'Miguel', bootcamp: 'WebDev' },
  { name: 'Paulo', bootcamp: 'WebDev' },
  { name: 'Philip', bootcamp: 'WebDev' },
  { name: 'Raquel', bootcamp: 'WebDev' },
  { name: 'Simão', bootcamp: 'WebDev' },
];

//Create a component called StudentList
//import into App.js
//map over an array of student objects and print the name and the bootcamp
//Bonus: Add a default image to each one

function StudentList() {
  return (
    <div>
      <h2>Student List</h2>

      {students.map((student, index) => {
        return (
          <div key={index}>
            <img
              src="https://static.independent.co.uk/2020/09/22/09/Untitled.png?width=1200"
              alt="long cat"
              style={{ width: '10em' }}
            />
            <p> Name: {student.name}</p>
            <p> Bootcamp: {student.bootcamp}</p>
          </div>
        );
      })}

      {/*
    hbs for comparison
    {{#each students}}
    <p>{{this}}</p>
    {{/each}}
 */}
    </div>
  );
}

export default StudentList;
