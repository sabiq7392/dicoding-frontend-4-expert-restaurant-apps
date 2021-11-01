import STORAGE from "./storage.js";
'use strict';

export class HandleData {
  static store(data) {
    STORAGE.push(data);
    const convertToString = JSON.stringify(STORAGE);
    localStorage.setItem('restaurant', convertToString);
  }

  static get() {
    const data = localStorage.getItem('restaurant');
    const dataParsed = JSON.parse(data);
    dataParsed != null ? STORAGE = dataParsed : '';
  }

  static removeOld() {
    STORAGE.splice(0, 9);
  }

  // static keepTheData() {
  //   dataParsed != null ? STORAGE = dataParsed : '';
  // }
}