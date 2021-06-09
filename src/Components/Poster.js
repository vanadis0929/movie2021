import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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
  position: relative;
  margin-bottom: 10px;

  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }

  &:hover {
    :before {
      background-color: rgba(0, 0, 0, 0.8);
      opacity: 1;
      visibility: visible;
    }
  }
`;

const Rating = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  opacity: 0;
  transition: all 0.5s;

  ${ImageFigure}:hover & {
    opacity: 1;
  }
`;

const Image = styled.img`
  opacity: 1;
`;

const Title = styled.h4`
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const Year = styled.time``;

const Overview = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px 10px 0 10px;
  font-size: 14px;
  opacity: 0;
  transition: all 0.5s;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  word-break: keep-all;
  overflow-wrap: break-word;

  ${ImageFigure}:hover & {
    opacity: 1;
  }
`;

const Poster = ({ id, imageUrl, title, rating, year, overview, isMovie }) => {
  return (
    <Container>
      <DetailLink to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <ImageContainer>
          <ImageFigure>
            <Image
              alt={`${title}의 포스터 이미지`}
              src={`https://image.tmdb.org/t/p/w500${imageUrl}`}></Image>
            <Rating>
              <span role="img" aria-label="rating">
                ⭐️
              </span>
              {rating}/10
            </Rating>
            <Overview>{overview}</Overview>
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
  overview: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
