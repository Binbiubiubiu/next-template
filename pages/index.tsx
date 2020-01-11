import React from 'react';
import Layout from '@/layout';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { useSelector, useDispatch, connect, ConnectedProps } from 'react-redux';

import Link from 'next/link';
import { NextPage } from 'next';
import { RootState } from '@/store';
import {
  incrementAction,
  descrementAction,
  resetAction,
  incrementAsyncAction,
  descrementAsyncAction,
  resetAsyncAction,
} from '@/store/counter/actions';

const Wrapper = styled.div`
  ${tw`bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4`}
`;

const Input = styled.input`
  ${tw`flex-1 bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight `}
`;

const Button = styled.button`
  ${tw`ml-4 flex-shrink-0 bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded`}
`;

function useCounter() {
  const count = useSelector<RootState, number>((state) => state.counter.num);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementAction());
  };

  const descrement = () => {
    dispatch(descrementAction());
  };

  const reset = () => {
    dispatch(resetAction(0));
  };

  return {
    count,
    increment,
    descrement,
    reset,
  };
}

const mapStateToProps = (state: RootState) => ({
  hocCounter: state.counter.num,
});

const mapDispatchToProps = {
  addOne: incrementAsyncAction,
  subOne: descrementAsyncAction,
  setNumber: resetAsyncAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type IndexPageProps = ConnectedProps<typeof connector> & {};

const IndexPage: NextPage<IndexPageProps> = (props) => {
  const { hocCounter, addOne, subOne, setNumber } = props;

  const { count: hookscount, increment, descrement, reset } = useCounter();

  return (
    <Layout>
      <Wrapper>
        <Input value={hookscount} />
        <Input value={hocCounter} />
        hooks:<Button onClick={increment}>+</Button>
        <Button onClick={descrement}>-</Button>
        <Button onClick={reset}>reset 0</Button>
        <br />
        hoc:<Button onClick={addOne}>+</Button>
        <Button onClick={subOne}>-</Button>
        <Button
          onClick={() => {
            setNumber(0);
          }}>
          reset 0
        </Button>
        <Link href="/about">
          <Button>前往about</Button>
        </Link>
      </Wrapper>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  return {} as IndexPageProps;
};

export default connector(IndexPage);
