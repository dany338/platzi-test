import { SAVE_OTHER, FILL_OTHERS, GET_OTHER, UPDATE_OTHER, DELETE_OTHER } from '../types/other';
import Other, { IOtherCreate, IOtherResults } from '../../entities/Other';
import { getOthers, getOther, createOther, updateOther, deleteOther } from '../../services/other';

export const saveOther = (other: IOtherCreate) => {
  return async (dispatch: any) => {
    try {
      const response = await createOther(other);
      dispatch({
        type: SAVE_OTHER,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtainOthers = (perPage: number, page: number, _sort: string | null, field: string | null, search: string | null) => {
  return async (dispatch: any) => {
    try {
      const others: IOtherResults | unknown = await getOthers(perPage, page, _sort, field, search);
      console.log('🚀 ~ filesssss: other.ts ~ line 23 ~ return ~ others', others)
      dispatch({
        type: FILL_OTHERS,
        payload: others,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtainOther = (id: string) => {
  return async (dispatch: any) => {
    try {
      const contact: Other | unknown = await getOther(id);
      dispatch({
        type: GET_OTHER,
        payload: contact,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editOther = (other: Other) => {
  return async (dispatch: any) => {
    try {
      const response: Other | unknown = await updateOther(other);
      dispatch({
        type: UPDATE_OTHER,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const eraseOther = (id: string) => {
  return async (dispatch: any) => {
    try {
      const other: Other | unknown = await deleteOther(id);
      dispatch({
        type: DELETE_OTHER,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
