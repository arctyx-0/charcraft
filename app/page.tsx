import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-[url(photos/char-1.jpg)] bg-contain'>
      <div className='h-dvh w-dvh'>
        <h1>Charcraft</h1>
      </div>
    </div>
  );
}
