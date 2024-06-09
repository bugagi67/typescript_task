import Buyable from '../domain/Buyable';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    if (item instanceof MusicAlbum || item instanceof Movie) {
      if (!this._items.some((cartItem) => cartItem.id === item.id)) {
        this._items.push(item);
      }
      false;
    } else {
      const trueItem = this._items.find((cartItem) => cartItem.id === item.id);

      if (trueItem) {
        trueItem.count += 1;
        trueItem._price += item._price;
      } else {
        this._items.push(item);
      }
    }
  }

  increase(item: Buyable): void {
    const trueItem = this._items.find((cartItem) => cartItem.id === item.id);

    if (trueItem) {
      trueItem._price += trueItem._price / trueItem.count;
      trueItem.count += 1;
    }
  }

  decrease(item: Buyable): void {
    const trueItem = this._items.find((cartItem) => cartItem.id === item.id);

    if (trueItem) {
      trueItem._price -= trueItem._price / trueItem.count;
      trueItem.count -= 1;
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sum(): number {
    const cartItems = this.items;
    let result: number = 0;
    for (let i = 0; i < cartItems.length; i += 1) {
      let priceItem: number = cartItems[i]._price;
      result += priceItem;
    }
    return result;
  }

  sumDiscount(discount: number): number {
    const cartItems = this.items;
    let result: number = 0;
    for (let i = 0; i < cartItems.length; i += 1) {
      let priceItem: number = cartItems[i]._price;
      result += priceItem;
    }
    return result - result * (discount / 100);
  }

  remove(id: number): void {
    this._items = this._items.filter((item) => item.id !== id);
  }
}
