import Image from 'next/image';
import { gql } from '../data-access/graphql-client';
import { webEnv } from '../environments/environment';

const { storage } = webEnv;
export default async function Index() {
  const { homeBlocks } = await gql.GetHomeImages();

  return homeBlocks.map((homeBlock) => (
    <figure key={homeBlock.id} className=" bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <Image
        width={300}
        height={200}
        alt={homeBlock.title}
        className="w-40 h-40"
        src={`${storage.url}/${homeBlock.imagePath}`}
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I&aposve seen scale on large teams. Its easy to
            customize, adapts to any design, and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium"></figcaption>
      </div>
    </figure>
  ));
}
