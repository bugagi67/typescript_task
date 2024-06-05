import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sum(): number {
    const cartItems = this.items;
    let result: number = 0;
    for (let i = 0; i < cartItems.length; i += 1) {
      let priceItem: number = cartItems[i].price;
      result += priceItem;
    }
    return result;
  }

  sumDiscount(discount: number): number {
    const cartItems = this.items;
    let result: number = 0;
    for (let i = 0; i < cartItems.length; i += 1) {
      let priceItem: number = cartItems[i].price;
      result += priceItem;
    }
    return result - result * (discount / 100);
  }

  remove(id: number): void {
    this._items = this._items.filter((item) => item.id !== id);
  }
}
