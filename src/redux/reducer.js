

const noteReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_NOTE":
      return state.concat([action.data]);
    case 'DELETE_NOTE':
      return state.filter((note) => note.id !== action.id);
    case 'PIN_NOTE':
      return state.map((note) => note.id === action.id ? {...note, pinned: !note.pinned} : note);
    default:
      return state;
  }
}

export default noteReducer;