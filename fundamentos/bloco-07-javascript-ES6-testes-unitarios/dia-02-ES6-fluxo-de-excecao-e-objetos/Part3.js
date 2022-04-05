const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addNightShift = (obj, key, value) => {
    obj[`${key}`] = value;
    console.log(obj);
  }
  addNightShift(lesson2, 'turno', 'noite');

  const keyList = (object) => {
    console.log(Object.keys(object));
  }
  keyList(lesson1);

  const objectLength = (object) => {
    console.log(Object.keys(object).length);
  }
  objectLength(lesson1);

  const allLessons = {};
  Object.assign(allLessons, {lesson1, lesson2, lesson3})
  console.log(allLessons);

  const totalStudents = (obj) => {
    let total = 0;
    for (let index in obj) {
      total += obj[index].numeroEstudantes;
    }
    console.log(total);
  }
  totalStudents(allLessons);

  const getValueByNumber = (lesson, position) => {
    console.log(Object.values(lesson)[position])
  }

  getValueByNumber(lesson1, 0)
  
  const verifyPair = (obj, key, value) => {
    const objArray = Object.entries(obj);
    let verification = false;
    for (let index = 0; index < objArray.length; index += 1) {
      if (objArray[index][0] === key && objArray[index][1] === value) verification = true;
    }
     console.log(verification);
  };
verifyPair(lesson1, 'materia', 'Matemática');
