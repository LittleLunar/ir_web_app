import axios, { Canceler } from "axios";
import { useEffect, useState } from "react";
import { IPaginationParam, IReturnData } from "../apis/types/general.type";
import { IMovie } from "../models/movie.model";
import {
  IElasticHitsResult,
  IElasticResult,
} from "../models/elasticsearch_result.model";

interface IProps {
  name: string;
  paginationParam?: IPaginationParam;
}
const useMovieSearch = ({
  name,
  paginationParam = { page: 1, size: 10 },
}: IProps) => {
  const [result, setResult] = useState<IElasticHitsResult<IMovie>[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>();
  const [hasMore, setHasMore] = useState<boolean>();
  useEffect(() => {
    setLoading(true);
    setError(false);
    let canceler: Canceler;

    axios({
      url: "http://localhost:8000/search",
      method: "GET",
      params: {
        text: name,
        page: paginationParam.page,
        size: paginationParam.size,
      },
      cancelToken: new axios.CancelToken((c) => (canceler = c)),
    })
      .then((res) => {
        const responseData: IReturnData = res.data;
        const elasticResult: IElasticResult<IMovie> = JSON.parse(
          responseData.data
        );
        console.log(elasticResult);

        const hitsResult: IElasticHitsResult<IMovie>[] = elasticResult.hits;

        setResult((prevResult) => {
          return [...hitsResult];
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
