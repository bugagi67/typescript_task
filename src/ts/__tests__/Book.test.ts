import Book from "../domain/Book";

test('Creating a Book class', () => {
  const book = new Book(1, "Мастер и Маргарита", "Михаил Булгаков", 1000, 500);
  const expected = {
    id: 1,
    name: "Мастер и Маргарита", 
    author: "Михаил Булгаков",
    _price: 1000,
    pages: 500, 
    count: 1
  }

  expect(book).toEqual(expected)
})