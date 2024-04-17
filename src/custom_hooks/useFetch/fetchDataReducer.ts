import { AxiosError } from 'axios';

type State<T> = { data: null; isLoading: boolean; error: null } | { data: T; isLoading: boolean; error: null } | { data: null; isLoading: boolean; error: AxiosError };

type ACTION<T> = { type: 'FETCH_LOADING'; error: undefined } | { type: 'FETCH_SUCCESS'; data: T } | { type: 'FETCH_ERROR'; error: AxiosError };
export const initialState = {
   data: null,
   loading: false,
   error: false,
};
export const dataFetchReducer = <T>(state: State<T>, action: ACTION<T>): State<T> => {
   switch (action.type) {
      case 'FETCH_LOADING': {
         return {
            ...state,
            isLoading: true,
         };
      }
      case 'FETCH_SUCCESS': {
         return {
            ...state,
            data: action.data,
            isLoading: false,
            error: null,
         };
      }
      case 'FETCH_ERROR': {
         return {
            ...state,
            data: null,
            isLoading: false,
            error: action.error,
         };
      }
      default:
         throw new Error('Unknown action type');
   }
};
