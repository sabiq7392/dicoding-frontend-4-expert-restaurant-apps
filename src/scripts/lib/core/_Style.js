/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
export function Style({ element }) {
  const camelToKebabCase = (words) => {
    const wordsInArray = words.split('');

    const addSeperatorInUpperCaseWord = wordsInArray.map((word) => {
      const isWordUppercase = word.toUpperCase() === word;

      if (isWordUppercase) {
        return `-${word.toLowerCase()}`;
      }

      return word;
    });

    return addSeperatorInUpperCaseWord.join('');
  };

  return {
    show() {
      element.style.display = '';
      return this;
    },
    hide() {
      element.style.display = 'none';
      return this;
    },
    css(isStyle) {
      const getKeys = Object.keys(isStyle);
      const getValues = Object.values(isStyle);
      const getStyles = Object.entries(isStyle);

      let elementStyle = '';
      for (let i = 0; i < getStyles.length; i++) {
        elementStyle += `
          ${camelToKebabCase(getKeys[i])}: ${getValues[i]}; 
        `;
      }

      element.style = elementStyle;
      return this;
    },
  };
}
