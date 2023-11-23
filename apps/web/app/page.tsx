import { gql } from '../data-access/graphql-client';

export default async function Index() {
  const { users } = await gql.GetUsers();
  return users.map((user) => (
    <figure
      key={user.id}
      className=" bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800"
    >
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={`https://i.pravatar.cc/150?u=${user.id}`}
        alt=""
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. Its easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{user?.name}</div>
          <div className="text-slate-700 dark:text-slate-500">{user.email}</div>
        </figcaption>
      </div>
    </figure>
  ));
}
