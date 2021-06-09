import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Poster from "Components/Poster";

const DetailPresenter = ({ result, loading, error }) => {
  console.log({ result, loading, error });
  return "Detail";
};

DetailPresenter.propTypes = {
  result: Proptypes.object,
  loading: Proptypes.bool.isRequired,
  error: Proptypes.string,
};
export default DetailPresenter;
