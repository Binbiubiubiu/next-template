import React from "react";
import Layout from "@/layout";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

const Wrapper = styled.div`
  ${tw`max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl`}
`;

export default function Index() {
  return (
    <Layout>
      <Wrapper>
        <div className=" flex-shrink-0">
          <img className=" h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">ChitChart</h4>
            <p className="text-base text-gray-600 leading-normal">
              You have a new message!
            </p>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}
