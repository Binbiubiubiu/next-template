import React from "react";
import styled from "styled-components";
import Layout from "../layout";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.primary};
`;

export default function Index() {
  return (
    <Layout>
      <Title>MyPage</Title>
    </Layout>
  );
}
