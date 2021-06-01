import React from "react";
import styled from "@emotion/styled";
import { CheckCircleTwoTone } from "@ant-design/icons";

const Container = styled.div`
    width: 100vw;
    height: 100vw;
    display: flex;
    place-content: center;
`;

const Icon = styled(CheckCircleTwoTone)`
    font-size: 40px;
`;

const Loader = () => (
    <Container>
        <Icon twoToneColor="#52c41a" />
    </Container>
);

export default Loader;
