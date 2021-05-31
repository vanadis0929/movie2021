import { movieApi, tvApi } from "Components/api";
import React from "react";

import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null,
    };

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    };

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({
            loading: true,
        });
        try {
            const {
                data: { results: movieResults },
            } = await movieApi.search(searchTerm);
            const {
                data: { results: tvResults },
            } = await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults,
            });
        } catch {
            this.setState({
                error: "검색결과가 없거나 검색어가 잘못되었습니다.",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    };

    render() {
        const {
            loading,
            error,
            movieResults,
            tvResults,
            searchTerm,
            handleSubmit,
        } = this.state;

        console.log(this.state);
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}
