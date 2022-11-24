var initialData = {
  electronics: [],
  jewelery: [],
  mensWearning: [],
  womensWearing: [],
};

const productReducer = (storeData = initialData, action) => {
  //   alert("Product Reducer Called");
  //   console.log("productReducer Called");
  switch (action.type) {
    case "ELECTRONICS": {
      return {
        ...storeData,
        electronics: action.payload,
      };
    }
    case "JEWELERY": {
      return {
        ...storeData,
        productReducer: {
          ...storeData.productReducer,
          jewelery: action.payload,
        },
      };
    }

    default: {
      return storeData;
    }
  }
};

export default productReducer;
