class HandleDataLocalStorage {
  static store({ item, data, to }) {
    to.push(data);
    const convertToString = JSON.stringify(to);
    localStorage.setItem(item, convertToString);
  }

  static get(item) {
    const data = localStorage.getItem(item);
    return JSON.parse(data);
  }

  static removeOld({ storage, lengthStoredData }) {
    storage.splice(0, lengthStoredData);
  }
}

export default HandleDataLocalStorage;
