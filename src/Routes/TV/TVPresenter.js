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

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated Show">
                    {topRated.map((show) => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            title={show.name}
                            imageUrl={show.poster_path}
                            year={
                                show.first_air_date &&
                                show.first_air_date.substring(0, 4)
                            }
                            rating={show.vote_average}
                        ></Poster>
                    ))}
                </Section>
            )}

            {airingToday && airingToday.length > 0 && (
                <Section title="airing Today">
                    {airingToday.map((show) => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            title={show.name}
                            imageUrl={show.poster_path}
                            year={
                                show.first_air_date &&
                                show.first_air_date.substring(0, 4)
                            }
                            rating={show.vote_average}
                        ></Poster>
                    ))}
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map((show) => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            title={show.name}
                            imageUrl={show.poster_path}
                            year={
                                show.first_air_date &&
                                show.first_air_date.substring(0, 4)
                            }
                            rating={show.vote_average}
                        ></Poster>
                    ))}
                </Section>
            )}

            {error ? (
                <Message color="#f00">
                    TV 프로그램을 찾을 수 없습니다 :)
                </Message>
            ) : (
                ""
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
