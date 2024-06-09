import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Mobile from '../domain/Mobile';

const movie = new Movie(
  1005,
  'Мстители',
  1000,
  'The Avengers',
  2012,
  'США',
  'Avengers Asemble!',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  '137 мин. / 02:17'
);
const music = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
const book = new Book(1, 'Мастер и Маргарита', 'Михаил Булгаков', 2000, 500);
const mobile = new Mobile(11, 'Apple', 100000, 'IOS');

test('creating a shopping cart', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('adding to cart', () => {
  const cart = new Cart();
  cart.add(book);
  expect(cart.items.length).toBe(1);
});

test('deleting an item from the shopping cart by id', () => {
  const cart = new Cart();
  cart.add(movie);
  cart.add(music);
  cart.add(book);
  cart.add(mobile);
  expect(cart.items.length).toBe(4);
  cart.remove(1005);
  expect(cart.items.length).toBe(3);
});

test('the cost of all items in the cart', () => {
  const cart = new Cart();
  cart.add(movie);
  cart.add(music);
  cart.add(book);
  expect(cart.sum()).toBe(3900);
});

test('the cost of all items in the cart', () => {
  const cart = new Cart();
  cart.add(movie);
  cart.add(music);
  cart.add(book);
  expect(cart.sumDiscount(10)).toBe(3510);
});

test('checking not to add duplicate classes', () => {
  const cart = new Cart();
  cart.add(movie);
  cart.add(movie);
  cart.add(music);
  cart.add(music);
  expect(cart.items.length).toBe(2);
});

test('', () => {
  const cart = new Cart();
  cart.add(book);
  cart.increase(book);
  cart.decrease(book);

  expect(cart.items[0]._price).toBe(2000);
  expect(cart.items[0].count).toBe(1);
});

test('', () => {
  const cart = new Cart();
  cart.add(book);
  cart.increase(book);
  cart.decrease(book);

  expect(cart.items[0]._price).toBe(2000);
  expect(cart.items[0].count).toBe(1);
});

test('', () => {
  const cart = new Cart();
  cart.add(mobile);
  cart.add(mobile);

  expect(cart.items[0]._price).toBe(200000);
  expect(cart.items[0].count).toBe(2);
});
