import Image from 'next/image'
import {Button} from '@mantine/core';

export default function Home() {
  return (
    <div className='w-full flex justify-center'>
      <h1>Home Page</h1>
      <Button size='xl' className='bg-pink-800'>Test Button</Button>
    </div>
  );
}
