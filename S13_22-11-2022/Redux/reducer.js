var myData = {
  count: 0,
};

const myReducer = (storedata = myData, action) => {
  switch (action.type) {
    case "INC_COUNT": {
      return {
        ...storedata,
        count: storedata.count + action.info,
      };
    }

    case "DEC_COUNT": {
      return {
        ...storedata,
        count: storedata.count - action.info,
      };
    }
    default: {
      return storedata;
    }
  }
};

export default myReducer;
