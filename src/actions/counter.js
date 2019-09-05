import { createTypes } from 'redux-action-types';

export const types = createTypes(
  'counter/',
  'ADD_ITEM',
  'REMOVE_ITEM',
  'SAVE_ITEM',
  'EDIT_ITEM',
  'REPLACE_ITEM',
);

export const addItem = () => dispatch => {
  dispatch({
    type: types.ADD_ITEM,
  });
};

export const removeItem = id => dispatch => {
  dispatch({
    type: types.REMOVE_ITEM,
    id,
  });
};

export const saveItem = (val, count) => dispatch => {
  const itemTemp = { id: count, name: val.name, description: val.description };
  dispatch({
    type: types.SAVE_ITEM,
    itemTemp,
  });
};

export const editItem = itemSelected => dispatch => {
  dispatch({
    type: types.EDIT_ITEM,
    itemSelected,
  });
};

export const replaceItem = (val, itemSelected) => dispatch => {
  const newItem = { id: itemSelected.id, name: val.name, description: val.description };
  dispatch({
    type: types.REPLACE_ITEM,
    newItem,
  });
};
