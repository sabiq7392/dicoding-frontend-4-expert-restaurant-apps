import { STORAGE } from "./STORAGE";
'use strict';

export class HandleData {
  static storeDataToStorage(data) {
    STORAGE.push(data);
    const convertToString = JSON.stringify(STORAGE);
    localStorage.setItem('restaurant', convertToString);
  }

  static getDataInStorage() {
    const data = localStorage.getItem('restaurant');
    const dataParsed = JSON.parse(data);
    dataParsed != null ? STORAGE = dataParsed : '';
  }

  // static keepTheData() {
  //   dataParsed != null ? STORAGE = dataParsed : '';
  // }
}

