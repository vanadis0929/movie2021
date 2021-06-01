import React from "react";
import Proptypes from "prop-types";
import styled from "@emotion/styled";

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => {
    return "TV";
};

TVPresenter.Proptypes = {
    topRated: Proptypes.array,
    popular: Proptypes.array,
    airingToday: Proptypes.array,
    loading: Proptypes.bool.isRequired,
    error: Proptypes.string,
};
export default TVPresenter;
