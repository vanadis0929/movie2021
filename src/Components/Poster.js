import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div``;

const ImageContainer = styled.div`
    position: relative;
`;

const ImageFigure = styled.figure`
    opacity: 0;
    background-color: rgba(20, 20, 20, 0.4);
    transition: all 0.5s;
    height: 300px;
    position: relative;

    &:hover {
        opacity: 1;
    }
`;

const Image = styled.img`
    max-width: 300px;
    max-height: 300px;
`;

const Rating = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
`;

const Title = styled.h4``;

const Year = styled.time``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie }) => {
    return (
        <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
            <Container>
                <ImageContainer>
                    <ImageFigure>
                        <Image src={imageUrl}></Image>
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
            </Container>
        </Link>
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
