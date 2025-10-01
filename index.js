//1
let user = {
  name: 'John',
  years: 30,
  lo : false
};

// const { name, years, isAdmin = false } = user;
// alert(isAdmin);

//2
const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
  Haa  :100
};

function topSalary(obj) {
  const arraySalaries = Object.entries(obj);
  if (arraySalaries.length == 0) {
    console.log('obj is empty');
  } else {
    let maxValue = 0;
    let nameUser = '';
    // arraySalaries.forEach((user) => {
    //   if (user[1] > maxValue) {
    //     maxValue = user[1];
    //     nameUser = user[0];
    //   }
    // });
 
    for (const [name, value] of arraySalaries) {
        //const [name, value] = arr;

      if (value > maxValue) {
        maxValue = value;
        nameUser = name;
      }
    }
    console.log(nameUser);
  }
}
topSalary(salaries);

arraySalaries = [['John', 100], ['Pete', 300],['Mary', 250]];