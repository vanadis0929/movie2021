import React from "react";
import Proptypes from "prop-types";
import styled from "@emotion/styled";

import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
    padding: 0 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated Show">
                    {topRated.map((show) => (
                        <span key={show.id}>{show.name}</span>
                    ))}
                    <br />
                </Section>
            )}

            {airingToday && airingToday.length > 0 && (
                <Section title="airing Today">
                    {airingToday.map((show) => (
                        <span key={show.id}>{show.name}</span>
                    ))}
                    <br />
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map((show) => (
                        <span key={show.id}>{show.name}</span>
                    ))}
                    <br />
                </Section>
            )}
        </Container>
    );

TVPresenter.propTypes = {
    topRated: Proptypes.array,
    popular: Proptypes.array,
    airingToday: Proptypes.array,
    loading: Proptypes.bool.isRequired,
    error: Proptypes.string,
};
export default TVPresenter;
