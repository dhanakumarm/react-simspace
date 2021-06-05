export const getTopDefaultData = (input) => {
  const data = input.slice(0, 12);
  return data;
};

export const getFilteredBreeds = (input, searchString) => {
  const filterBreeds = input.filter((breedsData) => {
    return breedsData.toLowerCase().includes(searchString.toLowerCase());
  });
  const breeds = filterBreeds;
  return breeds;
};

export const formartArray = (input) => {
  let data = [];
  for (var property in input) {
    data.push(property);
    let currentProp = input[property];
    for (var i = 0, len = currentProp.length; i < len; i++) {
      let value = property + "/" + currentProp[i];
      data.push(value);
    }
  }
  return data;
};
