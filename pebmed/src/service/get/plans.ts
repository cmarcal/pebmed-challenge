import { AxiosResponse } from 'axios';
import { get } from '../apiService';

export const getPlans = async (): Promise<AxiosResponse> => get('/offer');
