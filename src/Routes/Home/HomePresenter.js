import React from "react";
import Proptypes from "prop-types";
import styled from "@emotion/styled";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
    padding: 0 10px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {nowPlaying.map((movie) => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}

            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming">
                    {upcoming.map((movie) => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map((movie) => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
        </Container>
    );

HomePresenter.propTypes = {
    nowPlaying: Proptypes.array,
    popular: Proptypes.array,
    upcoming: Proptypes.array,
    loading: Proptypes.bool.isRequired,
    error: Proptypes.string,
};

export default HomePresenter;
