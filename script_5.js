const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//  1) Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("1) Est-ce que tous les livres ont été au moins empruntés une fois?")

let rented = []
books.forEach(book => {rented.push(book.rented)})

console.log(rented);

for(let index in rented){  console.log(rented[index]!== 0);
};
console.log('all books have been rented, at lease once')





// 2) Quel est livre le plus emprunté ?

console.log("\n2) Quel est livre le plus emprunté ?\n")
let rent = []
books.forEach(book => {
  rent.push(book.rented)
})
console.log(rent.sort(function(a, b){return a - b}))

let length= rent.length-1
books.forEach(book => {
  if (book.rented == rent.slice(length)) {
    console.log(`Le livre qui a été le plus emprunté est ${book.title} (${book.rented} fois).`)
  }

})

// Quel est le livre le moins emprunté ?
console.log("\n3) Quel est le livre le moins emprunté ?\n")
books.forEach(book => {
  if (book.rented == rent[0]) {
    console.log(`Le livre qui a été le moins emprunté est ${book.title} (${book.rented} fois).`)
  }

})



// Trouve le livre avec l'ID: 873495 ;

console.log("\n4) Trouve le livre avec l'ID: 873495 \n")
const resultat1 = books.find( book => book.id === 873495);
console.log(resultat1.title)


// Supprime le livre avec l'ID: 133712 ;
console.log("\n5) Supprime le livre avec l'ID: 133712\n")

console.log("\nThe book: 133712 has been removed, look:\n")

books.shift();
console.log(books)

// Trie les livres par ordre alphabétique.
console.log("\n6) Trie les livres par ordre alphabétique.\n")
let titles = []
 books.forEach(book => {
   titles.push(book.title)
})
 titles.sort()
 console.log(titles)
