import { Theme } from "@emotion/react";
import { Grid, SxProps, Typography } from "@mui/material";
import ResultCard from "./ResultCard.Component";
import { IMovie } from "../models/movie.model";
import { IElasticHitsResult } from "../models/elasticsearch_result.model";

interface IProps<T> {
  sx?: SxProps<Theme>;
  data?: T[];
}
const GridViewResult = ({
  sx,
  data = [],
}: IProps<IElasticHitsResult<IMovie>>) => {
  return (
    <Grid container gap={5} sx={sx ?? { flex: 1, marginTop: "11vh" }}>
      {data.map((e, idx) => (
        <Grid
          item
          key={`${e._id}${e._index}${idx}`}
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            gap: 1,
            width: 166,
            justifyContent: "start",
            alignItems: "center",
            "&:hover": {
              transform: "scale(1.2)",
              zIndex: 2,
            },
          }}
        >
          <ResultCard data={e._source} />
          <Typography sx={{ color: "white" }}>{e._source.title}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridViewResult;
