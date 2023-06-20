import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { IArticle } from "app/config/@interfaces/article.interface";
import { checkSearch, getDateTime } from "app/utils/api";
import { setArticles } from "app/store/main.slice";
import { LoadingContext } from "app/components/LoadingProvider";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isLoading, setLoading } = useContext(LoadingContext);
  const articles = useSelector((state: any) => state.main.articles);
  const [searchIndex, setSearchIndex] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("us");

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const result: any = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=c7348f4c6166429486781a679f905ebe`
      );
      dispatch(
        setArticles(
          result.data.articles.map((item: IArticle, id: number) => {
            return { ...item, id };
          }) as IArticle[]
        )
      );
    } catch (error: any) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
    return () => {};
  }, [selectedCountry]);

  return (
    <main>
      <div className="flex gap-2 max-w-[1624px] mx-auto">
        <div className="relative w-full">
          <input
            value={searchIndex}
            onChange={(e: any) => {
              setSearchIndex(e.target.value);
            }}
            className="w-full py-2.5 pl-4 pr-10 rounded-md bg-green-200 dark:bg-neutral-950/50 border-2 border-neutral-950/10 outline-none placeholder:text-neutral-600/70 dark:placeholder:text-neutral-800 focus:border-green-500 m-color-transition"
            placeholder="Search..."
          />
          <div className="absolute right-0 top-0 flex items-center justify-center h-full mr-3">
            <MagnifyingGlassIcon className=" w-5 h-5" />
          </div>
        </div>
        <div className="flex items-center gap-1 flex-none bg-green-200 dark:bg-neutral-950/50 px-1 rounded-md">
          <div
            className={`cursor-pointer py-2 px-3 rounded-md ${
              selectedCountry === "gb" && " bg-green-300 dark:bg-neutral-900"
            }`}
            onClick={() => {
              setSelectedCountry("gb");
            }}
          >
            GB
          </div>
          <div
            className={`cursor-pointer py-2 px-3 rounded-md ${
              selectedCountry === "us" && " bg-green-300 dark:bg-neutral-900"
            }`}
            onClick={() => {
              setSelectedCountry("us");
            }}
          >
            US
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2 flex-wrap mx-auto min-[432px]:w-[400px] min-[840px]:w-[808px] min-[1248px]:w-[1216px] min-[1656px]:w-[1624px]">
        {articles
          .filter((article: IArticle) => {
            return (
              checkSearch(article.title, searchIndex) ||
              checkSearch(article.description, searchIndex) ||
              checkSearch(article.content, searchIndex) ||
              checkSearch(article.author, searchIndex) ||
              checkSearch(article.source.name, searchIndex)
            );
          })
          .map((article: IArticle) => {
            return (
              <div
                key={`article-content-${article.id}`}
                className="w-full max-w-[400px] rounded-md bg-green-100 dark:bg-neutral-950/60 shadow-md"
              >
                <div className="p-4 relative h-full flex flex-col">
                  <div className="w-full aspect-video overflow-hidden rounded-md">
                    <Link to={`/dashboard/detail/${article.id}`}>
                      {article.urlToImage === null ? (
                        <img
                          src={"/assets/mock.png"}
                          className="rounded-md w-full h-full bg-green-300 dark:bg-neutral-900 hover:scale-125 object-cover transition duration-500 ease-in-out"
                        />
                      ) : (
                        <img
                          src={article.urlToImage}
                          className="rounded-md w-full h-full bg-green-300 dark:bg-neutral-900 hover:scale-125 object-cover transition duration-500 ease-in-out"
                        />
                      )}
                    </Link>
                  </div>
                  <div className="absolute top-6 left-6 rounded-full bg-green-200/80 dark:bg-neutral-950/80 text-xs px-2 py-1">
                    {article.source.name}
                  </div>
                  <div className="pt-2 pb-1 text-sm">{article.title}</div>
                  <div className="mt-auto pt-2 border-t border-green-500/5 text-xs text-gray-400 dark:text-white/30 flex justify-between flex-wrap">
                    {getDateTime(article.publishedAt)}
                    <Link
                      to={`/dashboard/detail/${article.id}`}
                      className="uppercase flex items-center gap-1 hover:text-black/70 dark:hover:text-white/50 m-color-transition"
                    >
                      read more
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default Dashboard;
