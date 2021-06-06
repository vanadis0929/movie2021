import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.section`
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title = styled.h1`
    padding-top: 20px;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 30px;
    position: sticky;
    z-index: 10;
    top: 41px;
    background-color: rgba(20, 20, 20, 1);
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 10%);
`;

const Section = ({ title, children }) => {
    console.log({ title, children });
    return (
        <Container>
            <Title>{title}</Title>
            <Grid>{children}</Grid>
        </Container>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Section;
