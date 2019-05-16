const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
entrepreneurs.forEach (entry=> {
  if (entry.year > 1969 && entry.year < 1981)
    console.log(`Name: ${entry.first} ${entry.last}, Birth year: ${entry.year}`)
})

// Sors une array qui contient le prénom et le nom des entrepreneurs ;

let fullName = []
entrepreneurs.forEach (entry=> {
    fullName.push(`${entry.first} ${entry.last}`)
})
console.log(fullName)

// Quel âge aurait chaque inventeur aujourd'hui ?
entrepreneurs.forEach (entry=> {
  age = 2019 - entry.year
    console.log(`${entry.first} ${entry.last} would be ${age} years old in 2019.`)
})

// Trie les entrepreneurs par ordre alphabétique du nom de famille.
let lastnames = []
 entrepreneurs.forEach(entry => {
   lastnames.push(entry.last)
})
 lastnames.sort()
console.log(lastnames)
