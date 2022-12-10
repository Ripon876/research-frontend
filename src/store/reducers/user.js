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
        username: action.user.username,
        type: action.user.type,
      };

      break;
    case "UPDATE_USER":
      return {
        ...state,
        ...action.user
      };

      break;
    default:
      return state;
  }
};

export default userReducer;
