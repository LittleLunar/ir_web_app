import axios, { Canceler } from "axios";
import { useEffect, useState } from "react";
import { IPaginationParam } from "../apis/types/general.type";
import { IMovie } from "../models/movie.model";

interface IProps {
  name: string;
  paginationParam?: IPaginationParam;
}
const useMovieSearch = ({
  name,
  paginationParam = { page: 1, size: 10 },
}: IProps) => {
  const [result, setResult] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>();
  const [hasMore, setHasMore] = useState<boolean>();
  useEffect(() => {
    setLoading(true);
    setError(false);
    let canceler: Canceler;

    axios({
      url: "",
      method: "GET",
      params: { name: name },
      cancelToken: new axios.CancelToken((c) => (canceler = c)),
    })
      .then((res) => {
        setResult((prevResult) => {
          return [...new Set([...prevResult])];
        });
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });

    return () => canceler();
  }, [name, paginationParam]);

  return { result, loading, error };
};

export default useMovieSearch;
