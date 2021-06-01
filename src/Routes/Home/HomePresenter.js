import React from "react";
import Proptypes from "prop-types";
import styled from "@emotion/styled";

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => {
    return "TV";
};

HomePresenter.Proptypes = {
    nowPlaying: Proptypes.array,
    popular: Proptypes.array,
    upcoming: Proptypes.array,
    loading: Proptypes.bool.isRequired,
    error: Proptypes.string,
};
export default HomePresenter;
