import { AxiosResponse } from 'axios';
import { post } from '../apiService';
import { Subscribe } from './types';

export const createSubscribe = async (subscribe: Subscribe): Promise<AxiosResponse> => post('/subscription', subscribe);
