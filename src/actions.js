const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const add_author = () => {
  return {
    type: ADD_AUTHOR
  };
};

export const delete_author = author => {
  return {
    type: DELETE_AUTHOR,
    payload: author
  };
};
