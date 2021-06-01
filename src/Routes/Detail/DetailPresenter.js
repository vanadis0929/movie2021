import React from "react";
import Proptypes from "prop-types";
import styled from "@emotion/styled";

const DetailPresenter = ({ result, loading, error }) => {
    return "TV";
};

DetailPresenter.propTypes = {
    result: Proptypes.object,
    loading: Proptypes.bool.isRequired,
    error: Proptypes.string,
};
export default DetailPresenter;
