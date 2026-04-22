import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-[url(photos/char-1.jpg)] bg-contain bg-repeat-round'>
      <div className='h-dvh w-dvh'>
        <p className='text-2xl'>Charcraft</p>
      </div>
    </div>
  );
}
