import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

import Loader from "Components/Loader";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 41px);
  background-image: url(${(props) => props.bgImage});
`;

const DetailPresenter = ({ result, loading, error }) => {
  console.log({ result });
  return loading ? (
    <Loader />
  ) : (
    <Container
      bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}></Container>
  );
};

DetailPresenter.propTypes = {
  result: Proptypes.object,
  loading: Proptypes.bool.isRequired,
  error: Proptypes.string,
};
export default DetailPresenter;
