import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div``;

const DetailLink = styled(Link)`
    display: block;
`;

const ImageContainer = styled.div`
    position: relative;
`;

const ImageFigure = styled.figure`
    background-color: rgba(20, 20, 20, 0.4);
    transition: all 0.5s;
    height: 300px;
    position: relative;
`;

const Image = styled.img`
    opacity: 1;
    max-width: 300px;
    max-height: 300px;
`;

const Rating = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
`;

const Title = styled.h4``;

const Year = styled.time``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie }) => {
    return (
        <Container>
            <DetailLink to={isMovie ? `/movie/${id}` : `/show/${id}`}>
                <ImageContainer>
                    <ImageFigure>
                        <Image
                            alt=""
                            src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
                        ></Image>
                        <Rating>
                            <span role="img" aria-label="rating">
                                ⭐️
                            </span>
                            {rating}/10
                        </Rating>
                    </ImageFigure>
                    <Title>{title}</Title>
                    <Year>{year}</Year>
                </ImageContainer>
            </DetailLink>
        </Container>
    );
};

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool,
};

export default Poster;
