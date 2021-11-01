import { HandleData } from "./HandleData";
'use strict';

export let STORAGE = [];

const keepDataExistEvenRefresh = () => {
  HandleData.get('restaurant') !== null ? STORAGE = HandleData.get('restaurant') : "";
};

keepDataExistEvenRefresh();
