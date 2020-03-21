import React from 'react';
import Layout from '@/layout';
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
      <input value={hookscount} />
      <input value={hocCounter} />
      hooks:<button onClick={increment}>+</button>
      <button onClick={descrement}>-</button>
      <button onClick={reset}>reset 0</button>
      <br />
      hoc:<button onClick={addOne}>+</button>
      <button onClick={subOne}>-</button>
      <button
        onClick={() => {
          setNumber(0);
        }}>
        reset 0
      </button>
      <Link href="/about">
        <button>前往about</button>
      </Link>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  return {} as IndexPageProps;
};

export default connector(IndexPage);
