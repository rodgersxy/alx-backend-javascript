const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let total = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, total + 1);

  if (total >= 4) {
    throw new Error('Endpoint load is high');
  }

  return total + 1;
};

export { weakMap, queryAPI };
