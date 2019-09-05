import { types } from '../actions';

const {
  ADD_ITEM,
  REMOVE_ITEM,
  SAVE_ITEM,
  EDIT_ITEM,
  REPLACE_ITEM,
} = types;

const initialState = {
  count: 0,
  showForm: false,
  items: [],
  itemSelected: {},
};

export default (state = initialState, action) => {
  const {
    id, itemTemp, itemSelected, newItem,
  } = action;

  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        showForm: !state.showForm,
        itemSelected: {},
      };
    case SAVE_ITEM:
    {
      const items_save = state.items.concat(itemTemp);

      let count_save = state.count + 1;

      if (state.count > 0) {
        const maxId = items_save.reduce((prev, current) => ((prev.id > current.id) ? prev : current));
        count_save = maxId.id + 1;
      }
      return {
        ...state,
        items: items_save,
        count: count_save,
      };
    }
    case REMOVE_ITEM:
    {
      let itemSelected_remove = state.itemSelected;
      let showForm_remove = state.showForm;
      if (state.itemSelected.id === id) {
        itemSelected_remove = {};
        showForm_remove = false;
      }
      const items_temp = state.items.filter(item => item.id !== id);
      const count_temp = items_temp.length === 0 ? 0 : state.count;

      return {
        ...state,
        items: items_temp,
        count: count_temp,
        itemSelected: itemSelected_remove,
        showForm: showForm_remove,
      };
    }
    case EDIT_ITEM:
      return {
        ...state,
        itemSelected,
        showForm: true,
      };
    case REPLACE_ITEM:
      return {
        ...state,
        items: state.items.map(existingLink => (newItem.id === existingLink.id
          ? newItem : existingLink)),
        itemSelected: {},
        showForm: false,
      };
    default:
      return state;
  }
};
