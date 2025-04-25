'use server';

import { unstable_cacheTag as cacheTag, revalidateTag } from 'next/cache';

let number = 0;

export const getNumber = async () => {
  'use cache';
  cacheTag('number');

  return number;
};

export const increment = async () => {
  const num = await getNumber();
  number = num + 1;

  revalidateTag('number');
};
