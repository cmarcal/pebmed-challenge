import { AxiosResponse } from 'axios';
import { get } from '../apiService';

export const getSubscriptions = async (): Promise<AxiosResponse> => get(`/offer`);
