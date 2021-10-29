function Type() {
  return {
    isString: (element) => typeof element === 'string',
    isNumber: (element) => typeof element === 'number',
    isObject: (element) => typeof element === 'object',
  };
}

export const { isString, isNumber, isObject } = Type();
