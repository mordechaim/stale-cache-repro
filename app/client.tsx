'use client';

import { useTransition } from 'react';
import { increment } from './server';

type ClientProps = {
  number: number;
};

export function Client(props: ClientProps) {
  const { number } = props;

  const [pending, startTransition] = useTransition();
  const handleIncrement = () => {
    startTransition(async () => {
      increment();
    });
  };

  return (
    <div>
      <span>{number}</span>
      <br />
      <button onClick={handleIncrement} disabled={pending}>
        Increment
      </button>
    </div>
  );
}
