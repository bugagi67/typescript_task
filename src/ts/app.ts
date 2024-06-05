import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(
  new Movie(
    1005,
    'Мстители',
    1000,
    'The Avengers',
    2012,
    'США',
    'Avengers Asemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин. / 02:17'
  )
);
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
console.log(movie);
console.log(music);

console.log(cart.items);
console.log(`Сумма = ${cart.sum()}`);
console.log(`Сумма с скидкой = ${cart.sumDiscount(10)}`);
console.log(cart.remove(1005));
console.log(cart.items);
console.log(cart.remove(1001));
console.log(cart.items);
