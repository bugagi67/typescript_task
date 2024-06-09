import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Mobile from './domain/Mobile';

const cart = new Cart();
console.log(cart.items);

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
const book = new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225)
const mobile = new Mobile(11, "Apple", 100000, "IOS")
cart.add(movie);
cart.add(music);
cart.add(book);
cart.add(mobile);
console.table(cart.items);
cart.increase(mobile);
cart.increase(mobile);
cart.increase(book);
cart.increase(book);
console.table(cart.items);
cart.decrease(mobile);
cart.decrease(book);
console.table(cart.items);
console.log(cart.items[2].count)
console.log(cart.items[2]._price)

