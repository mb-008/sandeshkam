import React from "react";

interface NewscardProps {
  news: {
    title: string;
    content: string;
    image: string;
    category: string;
  };
}

const Newscard: React.FC<NewscardProps> = ({ news }) => {
  return (
    <div className="w-max">
      <a
        href="#"
        className="block max-w-1/2 p-6 rounded-lg shadow-md bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-gray-200">
          {news.title}
        </h5>
        <p className="font-normal text-gray-300 dark:text-gray-400">
          {news.content}
        </p>
      </a>
    </div>
  );
};

export default Newscard;
