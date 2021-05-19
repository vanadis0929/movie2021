import React from "react";

import TVPresenter from "./TVPresenter";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        topRated: null,
        airingToday: null,
        loading: true,
        error: null,
    };

    render() {
        const { nowPlaying, topRated, airingToday, loading, error } =
            this.state;

        return (
            <TVPresenter
                nowPlaying={nowPlaying}
                topRated={topRated}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        );
    }
}
