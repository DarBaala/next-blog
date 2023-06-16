type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const generateMetadata = async ({ params: { id } }: Props) => {
  const data = await getData(id);

  return {
    title: data.title,
  };
};



const Post = async ({ params: { id } }: Props) => {
  const data = await getData(id);
  return (
    <>
      <div className="container">
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <button
          style={{
            padding: "10px 20px",
            margin: "20px",
            border: "none",
            backgroundColor: "darkgray",
            cursor: "pointer",
          }}
        >
          Вернуться назад
        </button>
      </div>
    </>
  );
};

export default Post;
