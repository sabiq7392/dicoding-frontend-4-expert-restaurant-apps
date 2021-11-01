let STORAGE = [];

const data = localStorage.getItem('restaurant');
const dataParsed = JSON.parse(data);
dataParsed !== null ? STORAGE = dataParsed : "";

export default STORAGE;
