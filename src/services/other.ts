import api from './api';
import Other, { IOtherCreate, IOtherResults } from '../entities/Other';
import { API_ENDPOINT_OTHER } from '../constants';

export const getOthers = (perPage: number, page: number, _sort: string | null, field: string | null, search: string | null): Promise<IOtherResults | unknown> => new Promise( async (resolve, reject) => {
  try {
    let params = { perPage, page };
    if (_sort) {
      params = {
        ...params,
        [_sort]: _sort
      };
    }
    if (field) {
      params = {
        ...params,
        [`_${field}_contains`]: search
      };
    }
    const response = await api.get(API_ENDPOINT_OTHER, { params });
    console.log('🚀 ~ file: other.ts ~ line 21 ~ getContacts ~ response', response)
    if (response.status === 200) {
      resolve(response.data);
    }
  } catch (error) {
    console.log(error);
    reject(error);
  }
});

export const getOther = (id: string): Promise<Other | unknown> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.get(`${API_ENDPOINT_OTHER}/${id}`);
    if (response.status === 200) {
      const other = response.data;
      resolve(other);
    }
  } catch (error) {
    reject(error);
  }
});

export const createOther = (data: IOtherCreate): Promise<Other | unknown> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.post(API_ENDPOINT_OTHER, data);
    if (response.status === 201 || response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const updateOther = (data: Other): Promise<Other | unknown> => new Promise( async (resolve, reject) => {
  try {
    const { id, ...other } = data;
    const response = await api.put(`${API_ENDPOINT_OTHER}/${id}`, other);
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject(response);
    }
  } catch (error) {
    reject(error);
  }
});

export const deleteOther = (id: string): Promise<Other | unknown> => new Promise( async (resolve, reject) => {
  try {
    const response = await api.delete(`${API_ENDPOINT_OTHER}/${id}`);
    if (response.status === 200) {
      const other = response.data;
      resolve(other);
    }
  } catch (error) {
    reject(error);
  }
});