"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <h1>
      Произошла ошибка, перегрузите сайт <br />
      {error.message}
    </h1>
  );
}
