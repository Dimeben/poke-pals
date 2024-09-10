const firstResults = (array) => {
  const firstTenArray = [];
  for (let i = 0; i <= 51; i++) {
    firstTenArray.push(array[i].pokemon);
  }
  return firstTenArray;
};

export default firstResults;
