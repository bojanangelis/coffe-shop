import Image from 'next/image';
import { gql } from '../data-access/graphql-client';
import { webEnv } from '../environments/environment';
import Link from 'next/link';

const { storage } = webEnv;
export default async function Index() {
  const { homeBlocks } = await gql.GetHomeImages();
  return (
    <main className="space-y-8">
      {homeBlocks.map((block, i) => {
        const flexClass = i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';
        return (
          <div
            key={block.id}
            className={`relative w-full flex flex-col ${flexClass} md:h-80 items-center justify-center`}
          >
            <div
              style={{ backgroundColor: block?.rgbBackground.hash || 'transparent' }}
              className="flex flex-col w-full md:w-1/2 text-white md:h-full"
            >
              <div className="p-10 sm:p-20 text-center">
                <h2 className="text-xl md:text-2xl font-bold">{block.title}</h2>
                <p className="text-lg md:text-xl font-thin pb-4">{block.description}</p>
                <Link
                  href={block.navigationPath}
                  className="hover:bg-slate-50 hover:text-black border-solid border-white border rounded-full px-5 py-1 text-center font-bold"
                >
                  {block.button}
                </Link>
              </div>
            </div>
            <div className="relative object-contain w-full md:w-1/2 h-80 md:h-full">
              <Image fill src={`${storage.url}/${block.imagePath}`} alt="alt" />
            </div>
          </div>
        );
      })}
    </main>
  );
}
