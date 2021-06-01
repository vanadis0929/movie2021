import React from "react";
import Proptypes from "prop-types";
import styled from "@emotion/styled";

const SearchPresenter = ({
    movieResults,
    tvResults,
    searchTerm,
    loading,
    error,
    handleSubmit,
}) => {
    return "Search";
};

SearchPresenter.Proptypes = {
    movieResults: Proptypes.array,
    tvResults: Proptypes.array,
    searchTerm: Proptypes.string,
    loading: Proptypes.bool.isRequired,
    error: Proptypes.string,
    handleSubmit: Proptypes.func,
};
export default SearchPresenter;
