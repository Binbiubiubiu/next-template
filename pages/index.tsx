import React from 'react';
import { Dispatch } from 'redux';
import Layout from '@/layout';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { useSelector, useDispatch } from 'react-redux';
import { CounterReducerAction, CounterActionType, CounterStateType } from '@/store/counter/reducer';
import Link from 'next/link';
import { NextPage } from 'next';

const Wrapper = styled.div`
  ${tw`bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4`}
`;

const Input = styled.input`
  ${tw`flex-1 bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight `}
`;

const Button = styled.button`
  ${tw`ml-4 flex-shrink-0 bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded`}
`;

const IndexPage: NextPage = () => {
  const count = useSelector<{ counter: CounterStateType }, number>((state) => state.counter.num);
  const dispatch = useDispatch<Dispatch<CounterActionType>>();

  return (
    <Layout>
      <Wrapper>
        <Input value={count} />
        <Button
          onClick={() => {
            dispatch({ type: CounterReducerAction.INCREMENT_ACTION });
          }}>
          +
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: CounterReducerAction.DESCREMENT_ACTION });
          }}>
          -
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: 'USER_FETCH_REQUESTED' });
            dispatch({
              type: CounterReducerAction.RESET_ACTION,
              payload: { num: 0 },
            });
          }}>
          reset
        </Button>
        <Link href="/about">
          <Button>前往about</Button>
        </Link>
      </Wrapper>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  return {};
};

export default IndexPage;
