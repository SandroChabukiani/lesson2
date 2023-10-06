// pirveli davaleba
const users = [
  { name: 'Temo', age: 25 },
  { name: 'Lasha', age: 21 },
  { name: 'Ana', age: 28 }
];
function youngestPerson(users) {
    if (users.length === 0) {
      return null; 
    }
  
    let youngestPerson = users[0]; 
  
    for (let i = 1; i < users.length; i++) {
      if (users[i].age < youngestPerson.age) {
        youngestPerson = users[i];
      }
    }
  
    return youngestPerson.name;
}  
const youngestName = youngestPerson(users);
console.log(`Youngest person: ${youngestName}` );

//meore davaleba

function changeUser(user) {
  const changed = { ...user };

  changed.name = "Bond... James Bond";
  changed.age = user.age + 15; 
  changed.email = "007@gmail.com";

  return changed;
}

const user = {
  name: "sandro chabukiani",
  age: 4949,
  email: "chabukianisandro0@gmail.com",
};

const changed = changeUser(user);
console.log(changed); 
console.log(user); 


//mesame davaleba
function dice() {
  return Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
}

function Foo() {
  let player1 = 0;
  let player2 = 0;

  while (true) {
    const roll = dice();

    switch (roll) {
      case 3:
        player1++;
        console.log(`პირველმა მოთამაშემ გააგორა 3! ცდა: ${player1}`);
        return;

      default:
        player1++;
        console.log(`პირველმა გააგორა ${roll}. ცდა: ${player1}`);
    }

    const roll2 = dice();

    switch (roll2) {
      case 3:
        player2++;
        console.log(`მეორე მოთამაშემ გააგორა 3! ცდა: ${player2}`);
        return;

      default:
        player2++;
        console.log(`მეორემ გააგორა ${roll2}. ცდა: ${player2}`);
    }
  }
}

Foo();
