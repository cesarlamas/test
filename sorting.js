const data = [
  {
    id: '00000000-0000-0000-0000-000000000000',
    name: 'Juan carlos',
    surname: 'Perez',
    age: 44,
    profession: [
      {
        speciality: 'backend programmer',
        experienceDays: '1825',
      },
      {
        speciality: 'frontend programmer',
        experienceDays: '181',
      },
    ],
  },
  {
    id: '00000000-0000-0000-0000-000000000001',
    name: 'Maria',
    surname: 'Gonzalez',
    age: 33,
    profession: [
      {
        speciality: 'backend programmer',
        experienceDays: '750',
      },
      {
        speciality: 'frontend programmer',
        experienceDays: '365',
      },
    ],
  },
  {
    id: '00000000-0000-0000-0000-000000000002',
    name: 'Pedro',
    surname: 'Rodriguez',
    age: 55,
    profession: [
      {
        speciality: 'backend programmer',
        experienceDays: '3650',
      },
      {
        speciality: 'frontend programmer',
        experienceDays: '730',
      },
    ],
  },
];

function bubbleSort(arr, sortBy) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j][sortBy] > arr[j + 1][sortBy]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

// Calulo total de días de experiencia por persona
function calculateTotalExperienceDays(arr) {
  return arr.map((person) => {
    let totalExperienceDays = person.profession.reduce((total, prof) => total + parseInt(prof.experienceDays), 0);
    return { ...person, totalExperienceDays };
  });
}

// sorting by age
const sortByAge = bubbleSort(data.slice(), 'age');
console.log('Sorted by Age:', sortByAge);

// Sorting by total experience days
const peopleWithTotalExperienceDays = calculateTotalExperienceDays(data);
const sortByExperienceDays = bubbleSort(peopleWithTotalExperienceDays.slice(), 'totalExperienceDays');
console.log('Sorted by Total Experience Days:', sortByExperienceDays);

// En el caso de que se quisera ordenar de mayor a menor se podría hacer un reverse al array