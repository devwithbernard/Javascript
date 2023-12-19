// TODO: Static properties and methods

class Product{
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static compare(productA, productB) {
        return productA.date - productB.date;
    }
    createTodDays(title, date) {
        return new this("title", new Date());
    }

}

const products = [
    new Product('HTML', new Date(2019, 1, 1)),
    new Product('CSS', new Date(2019, 0, 1)),
    new Product('JavaScript', new Date(2019, 11, 1)),
];

products.sort(Product.compare);
/*
Products:
[
  Product { title: 'CSS', date: 2019-01-01T00:00:00.000Z },
  Product { title: 'HTML', date: 2019-02-01T00:00:00.000Z },
  Product { title: 'JavaScript', date: 2019-12-01T00:00:00.000Z }
]
*/

console.log(products);

// Static property
class Book{
    static publisher = 'Ilay Kantor';

    constructor(title, date, author) {
        this.title = title;
        this.date = date;
        this.author = author;
    }

    static recent(bookA, bookB) {
        return bookA.date - bookB.date;
    }

    static sortByTile(bookA, bookB) {
        return  bookA.title.toLowerCase().localeCompare(bookB.title.toLowerCase());
    }
}

const books = [
    new Book('Sans Famille', new Date(1884, 2, 1), 'Hector Malot'),
    new Book("L'ordonance", new Date(2011, 5, 19), 'Soro Guefala'),
    new Book('On se chamaille pour un siège', new Date(2008,0, 5), 'Samuel ***')
];

books.sort(Book.sortByTile);
console.log('Books sorted by title:', books);

books.sort(Book.recent);
console.log('Books sorted by date:', books);