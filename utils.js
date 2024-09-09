const firstTenResults = (array) => {
  const firstTenArray = [];
  for (let i = 0; i <= 11; i++) {
    firstTenArray.push(array[i].pokemon);
  }
  return firstTenArray;
};

export default firstTenResults;
