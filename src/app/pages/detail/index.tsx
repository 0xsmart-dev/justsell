import { IArticle } from "app/config/@interfaces/article.interface";
import { getDateTime } from "app/utils/api";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const articleInfo = useSelector((state: any) => {
    return state.main.articles.find((article: IArticle) => {
      return article.id.toString() === id;
    });
  });
  return (
    <>
      {articleInfo ? (
        <main>
          <div className="w-full max-w-[1000px] mx-auto md:pt-8">
            <div className="text-2xl font-semibold md:text-4xl">
              {articleInfo.title}
            </div>
            <div className="mt-4 font-semibold text-base md:text-lg">
              <span className="text-gray-400 dark:text-gray-600">
                Published At{" "}
              </span>
              {getDateTime(articleInfo.publishedAt)}
            </div>
            <div className="font-semibold text-base md:text-lg">
              <span className="text-gray-400 dark:text-gray-600">By </span>
              {articleInfo.author}
            </div>
            <img
              src={articleInfo.urlToImage}
              className="rounded-md mt-4 max-w-[800px] w-full mx-auto md:mt-8"
            />
            <div className="mt-2 md:mt-4">{articleInfo.description}</div>
            <div className="mt-2 md:mt-4">{articleInfo.content}</div>
            <div className="flex justify-between mt-4">
              <Link
                to={"/dashboard"}
                className="px-4 py-2 bg-green-200 dark:bg-neutral-950/70 rounded-md hover:bg-green-300 dark:hover:bg-neutral-950 m-color-transition"
              >
                To The List
              </Link>
              <Link
                to={articleInfo.url}
                target="_blank"
                className="px-4 py-2 border-2 border-green-200 dark:border-green-400/30 rounded-md  hover:border-green-300 dark:hover:border-green-500 dark:hover:text-white m-color-transition"
              >
                View Source
              </Link>
            </div>
          </div>
        </main>
      ) : (
        <Navigate to="/404" />
      )}
    </>
  );
};

export default Detail;
