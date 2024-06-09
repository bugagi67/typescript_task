import Buyable from './Buyable';

export default class Book implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly _price: number,
    readonly pages: number,
    readonly count: number = 1
  ) {}
}
