var myData = {
  count: 0,
};

const myReducer = (storedata = myData, action) => {
  storedata = {
    count: action,
  };
  return storedata;
};

export default myReducer;
