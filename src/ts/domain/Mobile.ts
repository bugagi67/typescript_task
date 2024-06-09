import Buyable from "./Buyable";

export default class Mobile implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly _price: number,
    readonly OS: string,
    readonly count: number = 1,
  ) { }  
}