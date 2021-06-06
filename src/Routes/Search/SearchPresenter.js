import React from "react";
import Proptypes from "prop-types";
import styled from "@emotion/styled";

import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.article`
    padding: 0 10px;
`;

const Form = styled.form`
    margin-bottom: 50px;
`;

const Input = styled.input`
    width: 50%;
    padding: 0 10px;
    height: 30px;
`;

const SearchPresenter = ({
    movieResults,
    tvResults,
    searchTerm,
    loading,
    error,
    handleSubmit,
    updateTerm,
}) => {
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="search"
                    placeholder="검색어를 입력하세요. (영화/TV프로그램...)"
                    value={searchTerm}
                    onChange={updateTerm}
                />
            </Form>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {movieResults && movieResults.length > 0 && (
                        <Section title="영화 검색 결과">
                            {movieResults.map((movie) => (
                                <span key={movie.id}>{movie.title}</span>
                            ))}
                        </Section>
                    )}

                    {tvResults && tvResults.length > 0 && (
                        <Section title="TV프로그램 검색 결과">
                            {tvResults.map((show) => (
                                <span key={show.id}>{show.name}</span>
                            ))}
                        </Section>
                    )}
                    {error ? (
                        <Message color="#f00" text="에러가 발생했습니다 :)" />
                    ) : (
                        ""
                    )}

                    {movieResults &&
                    tvResults &&
                    movieResults.length === 0 &&
                    tvResults.length === 0 ? (
                        <Message
                            color="gray"
                            text={`검색 결과를 찾을 수 없습니다.`}
                        />
                    ) : (
                        ""
                    )}
                </>
            )}
        </Container>
    );
};

SearchPresenter.propTypes = {
    movieResults: Proptypes.array,
    tvResults: Proptypes.array,
    searchTerm: Proptypes.string,
    loading: Proptypes.bool.isRequired,
    error: Proptypes.string,
    handleSubmit: Proptypes.func,
    updateTerm: Proptypes.func,
};
export default SearchPresenter;
