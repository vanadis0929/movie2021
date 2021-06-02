import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 300px;
  place-content: center;
  place-items: center;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
`;

const Text = styled.p`
  color: ${(props) => props.color};
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;
