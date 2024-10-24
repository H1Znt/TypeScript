/* eslint-disable no-unused-vars */

import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly price: number,
    readonly quantity: number,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string,
    readonly time: number,
  ) { }
}