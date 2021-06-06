import React from "react";
import Proptypes from "prop-types";
import styled from "@emotion/styled";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

import Poster from "Components/Poster";

const Container = styled.article`
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
                        // <span key={movie.id}>{movie.title}</span>
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            imageUrl={movie.poster_path}
                            year={movie.release_date}
                            rating={movie.vote_average}
                        ></Poster>
                    ))}
                </Section>
            )}

            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming">
                    {upcoming.map((movie) => (
                        // <span key={movie.id}>{movie.title}</span>
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            bgUrl={movie.poster_path}
                            year={movie.release_date}
                            rating={movie.vote_average}
                        ></Poster>
                    ))}
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map((movie) => (
                        // <span key={movie.id}>{movie.title}</span>
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            bgUrl={movie.poster_path}
                            year={movie.release_date}
                            rating={movie.vote_average}
                        ></Poster>
                    ))}
                </Section>
            )}

            {error ? (
                <Message color="#f00">영화를 찾을 수 없습니다 :)</Message>
            ) : (
                ""
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
