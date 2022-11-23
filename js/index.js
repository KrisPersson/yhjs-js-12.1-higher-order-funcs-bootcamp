// Övning 1
// Skriv ett program som nedan array returnerar en ny array med de tal som är jämna (använd modulus % operatorn).

// Skriv programmet först med en for-loop och sedan igen där du använder metoden filter(). Använd arrow functions.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenForLoop(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(getEvenForLoop(numbers))

function getEvenFilter(arr) {
    return arr.filter(num => {
        if (num % 2 === 0) {
            return num
        }
    })
}

// console.log(getEvenFilter(numbers))

// -----------------------------------------------

// Övning 2
// Returnera i en ny array alla böcker av författaren Jules Verne från nedanstående array. Använd metoden filter().

let books = [
{ author: 'Oscar Wilde', title: 'The importance of being earnest'},
{ author: 'Lewis Carroll', title: 'Alice in wonderland'},
{ author: 'Jules Verne', title: 'Around the world in eighty days'},
{ author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
]


const julesVerneBooks = books.filter(book => {
    if (book.author.toLowerCase() === 'jules verne') {
        return book
    }
})

// console.log(julesVerneBooks)


// -----------------------------------------------

// Övning 3
// Skriv ett program som summerar ihop allas ålder och returnerar summan. Använd metoden reduce().

let people = [
  { age: 10, name: 'Gun-Britt'},
  { age: 20, name: 'Conny'},
  { age: 30, name: 'Aurora'},
  { age: 40, name: 'Kalle'},
  { age: 55, name: 'Max'},
]

function sumAge(arr) {
    return arr.reduce((acc, person) => acc + person.age, 0)
}

// console.log(sumAge(people))

// -----------------------------------------------

// Övning 4
// Skriv ett program som från nedanstående array retunerar det högsta talet, använd reduce().

let numbers2 = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6];

function getHighest(arr) {
    return arr.reduce((acc, num) => {
       return num > acc ? num : acc
    })
}

// console.log(getHighest(numbers2))

// -----------------------------------------------
// Övning 5
// Skriv ett program som returnerar alla titlar och skriver sedan ut dessa med console.log. Använd metoden map().

let books2 = [
  { author: 'Oscar Wilde', title: 'The importance of being earnest'},
  { author: 'Lewis Carroll', title: 'Alice in wonderland'},
  { author: 'Jules Verne', title: 'Around the world in eighty days'},
  { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
]

function printBooks(arr) {
    arr.map(book => console.log(book.title))
}

// printBooks(books2)

// -----------------------------------------------

// Övning 6
// Skriv ett program som kollar om alla är under 40 och returnerar true eller false.

let people2 = [
  { age: 10, name: 'Gun-Britt'},
  { age: 20, name: 'Conny'},
  { age: 30, name: 'Aurora'},
  { age: 40, name: 'Kalle'},
  { age: 55, name: 'Max'},
]

function isEveryoneUnderForty(arr) {
    return arr.length === arr.filter(person => person.age < 40).length
}


// console.log(isEveryoneUnderForty(people2))

//------------------------------------------------

// Övning 7
// Nu ska vi bygga en reseguide! Skapa upp en array som innehåller ett antal land-objekt. Var land-objekt har egenskapen name som innehåller namnet på landet och egenskapen continent som innehåller vilken kontinent landet ligger i. Alla värdsdelar ska finnas med med minst ett land från varje världsdel.

// Skriv sedan ett program som gör följande:

// Skriver ut namnet på alla länder.
// Skriver ut namnet på alla kontinenter.
// Skriver ut namnet på alla länder i Europa.
// Du kan söka efter land eller kontinent och få tillbaka ett resultat av sökningen.


class Country {
    constructor(name, continent) {
        this.name = name;
        this.continent = continent
    }
    printName() {
        console.log(this.name)
    }
    printContinent() {
        console.log(this.continent)
    }
}

const countries = [
    new Country("Sweden", "Europe"),
    new Country("Norway", "Europe"),
    new Country("Denmark", "Europe"),
    new Country("England", "Europe"),
    new Country("Ivory Coast", "Africa"),
    new Country("Egypt", "Africa"),
    new Country("Ethiopia", "Africa"),
    new Country("South Africa", "Africa"),
    new Country("USA", "North America"),
    new Country("Canada", "North America"),
    new Country("Brazil", "South America"),
    new Country("Argentina", "South America"),
    new Country("Ecuador", "South America"),
    new Country("Bolivia", "South America"),
    new Country("Japan", "Asia"),
    new Country("China", "Asia"),
    new Country("South Korea", "Asia"),
    new Country("India", "Asia"),
    new Country("Australia", "Oceania"),
    new Country("New Zeeland", "Oceania")
]

function runTravelGuideProgram(arr) {
    // Print all countries
    arr.map(country => console.log(country.name))

    // Print all continents
    const continents = []
    arr.map(cou => {
        if (!continents.includes(cou.continent)) {
            continents.push(cou.continent)
        }
    })
    continents.map(continent => console.log(continent))

    // Print all european countries
    const euroCountries = arr.filter(country => country.continent === 'Europe')
    euroCountries.map(country => console.log(country.name))

}

function searchCountries(arr, searchTerm) {
    const searchResults = []
    arr.map(country => {
        if (searchTerm === country.name || searchTerm === country.continent) {
            searchResults.push(country)
        }
    })
    searchResults.map(country => console.log(country.name))
}


runTravelGuideProgram(countries)
searchCountries(countries, 'Asia')