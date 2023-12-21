import { wrapPromise } from './wrapPromise.ts';

export const fetchData = <T>(url: string) => {
  const dataPromise = fetch(url).then((response) => response.json());
  return wrapPromise<T>(dataPromise);
};
