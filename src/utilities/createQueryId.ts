import type {
  QueryIdType,
} from '../types';
import {
  createUlid,
} from './createUlid';

export const createQueryId = (): QueryIdType => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return createUlid() as any;
};
