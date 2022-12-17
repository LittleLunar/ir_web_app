export interface IElasticResult<T> {
  hits: IElasticHitsResult<T>[];
  max_score: number | null;
  total: { relation: string; value: number };
}
export interface IElasticHitsResult<T> {
  _id: string;
  _index: string;
  _score: number;
  _source: T;
}
