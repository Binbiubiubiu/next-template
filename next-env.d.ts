/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.less';
declare module '*.css';
declare module '*.scss';

interface Window {
  __NEXT_REDUX_STORE__: any;
}
