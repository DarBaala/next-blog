import Link from "next/link";

export const metadata = {
  title: "Blog",
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    throw new Error("Данные не получены!");
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();
  return (
    <>
      <div className="container">
        <h1>Blog</h1>
        <ul>
          {data.map((post: any) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
