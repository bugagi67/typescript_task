import Cart from "../service/Cart";
import Book from "../domain/Book";
import Movie from "../domain/Movie";
import MusicAlbum from "../domain/MusicAlbum";

const movie = new Movie(1005, "Мстители", 1000, "The Avengers", 2012, "США", "Avengers Asemble!", ["фантастика", "боевик", "фэнтези", "приключения"], "137 мин. / 02:17");
const music = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900)
const book = new Book(1, "Мастер и Маргарита", "Михаил Булгаков", 2000, 500);

test("creating a shopping cart", () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
})

test('adding to cart', () => {
  const cart = new Cart();
  cart.add(book);
  expect(cart.items.length).toBe(1);
})

test('deleting an item from the shopping cart by id', () => {
  const cart = new Cart();
  cart.add(movie);
  cart.add(music);
  cart.add(book);
  expect(cart.items.length).toBe(3);
  cart.remove(1005);
  expect(cart.items.length).toBe(2)
})

test('the cost of all items in the cart', () => {
  const cart = new Cart();
  cart.add(movie);
  cart.add(music);
  cart.add(book);
  expect(cart.sum()).toBe(3900);
})

test('the cost of all items in the cart', () => {
  const cart = new Cart();
  cart.add(movie);
  cart.add(music);
  cart.add(book);
  expect(cart.sumDiscount(10)).toBe(3510);
})