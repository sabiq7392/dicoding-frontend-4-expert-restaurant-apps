import { Event } from './_Event.js';
import { ClassList } from './_ClassList.js';
import { Style } from './_Style.js';
import { Media } from './_Media.js';
import { isObject } from './_Type.js';

// export function $query(element) {
//   const isID = element.includes('#');
//   if (isID) {
//     return document.querySelector(element);
//   }
//   return document.querySelectorAll(element);
// }

export function $(element) {
  const anElement = { element };

  if (!isObject(element)) {
    const isID = element.includes('#');
    if (isID) {
      return document.querySelector(element);
    }
    return document.querySelectorAll(element);
  }

  return {
    ...Event(anElement),
    ...ClassList(anElement),
    ...Style(anElement),
    ...Media(anElement),
  };
}
