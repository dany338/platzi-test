import { SAVE_OTHER, FILL_OTHERS, GET_OTHER, UPDATE_OTHER, DELETE_OTHER } from "../types/other";
import { IOther, IOtherResults} from "../../entities/Other";

export interface IInitialStateProps {
  others: IOtherResults | null,
  addOk: boolean,
  editOk: boolean,
  viewOk: boolean,
  deleteOk: boolean,
  other: null | IOther
}

const intialState: IInitialStateProps = {
  others: null,
  addOk: false,
  editOk: false,
  viewOk: false,
  deleteOk: false,
  other: null
}

export interface IActionProps {
  type: string;
  payload: any | unknown;
}

export const otherReducer = (state = intialState, action: IActionProps) => {
  switch (action.type) {
    case SAVE_OTHER:
      return {
        ...state,
        addOk: action.payload
      }

    case FILL_OTHERS:
      return {
        ...state,
        addOk: false,
        editOk: false,
        deleteOk: false,
        others: action.payload,
        other: null
      }

    case GET_OTHER:
      return {
        ...state,
        other: action.payload
      }

    case UPDATE_OTHER:
      return {
        ...state,
        editOk: action.payload
      }

    case DELETE_OTHER:
      return {
        ...state,
        deleteOk: true,
        others: state.others?.results ? ({ ...state.others, results: state.others.results.filter((contact: IOther) => contact.id !== action.payload)}) : []
      }

    default:
      return state
  }
}
