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

//  Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois?\n")
console.log('\n')

books.forEach(entry => {
    if (entry.rented > 1){
      console.log(`${entry.title} has been rented at least once`)
    }
    else{
    console.log(`${entry.title} has not been rented yet`);
  }
})

// Quel est livre le plus emprunté ?

console.log("\nQuel est livre le plus emprunté ?\n")
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
console.log("\nQuel est le livre le moins emprunté ?\n")
books.forEach(book => {
  if (book.rented == rent[0]) {
    console.log(`Le livre qui a été le moins emprunté est ${book.title} (${book.rented} fois).`)
  }

})



// Trouve le livre avec l'ID: 873495 ;

console.log("\nTrouve le livre avec l'ID: 873495 \n")
const resultat1 = books.find( book => book.id === 873495);
console.log(resultat1.title)


// Supprime le livre avec l'ID: 133712 ;
console.log("\nSupprime le livre avec l'ID: 133712\n")

const resultat2 = books.find(book => book.id === 133712);
console.log(resultat2)

let value = 133712

books = books.filter(item => item.id !== value)

console.log(books)

// Trie les livres par ordre alphabétique.
console.log("\nTrie les livres par ordre alphabétique.\n")
let names = []
 books.forEach(book => {
   names.push(book.title)
})
 names.sort()
