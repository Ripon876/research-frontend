let initialData = {
  name: "",
  type: "",
};

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        name: action.user.name,
        type: action.user.type,
      };

      break;
    default:
      return state;
  }
};

export default userReducer;
