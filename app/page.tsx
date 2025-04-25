import { Client } from './client';
import { getNumber } from './server';

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const number = await getNumber();

  return <Client number={number} />;
}
