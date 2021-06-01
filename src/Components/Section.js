import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.div`
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title = styled.h1`
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 30px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 10%);
`;

const Section = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Section;
