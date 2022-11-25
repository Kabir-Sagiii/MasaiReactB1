var initialData = {
  users: [],
  emps: [],
};
// storeData.users.push(action.payload)

const userReducer = (storeData = initialData, action) => {
  // alert("User Reducer Called");

  console.log("UserReducer Called");
  switch (action.type) {
    case "USER": {
      return {
        ...storeData,
        users: [...storeData.users, action.payload],
      };
    }
    case "DELETE": {
      return {
        ...storeData,
        users: action.payload,
      };
    }

    default: {
      return storeData;
    }
  }
};

export default userReducer;
