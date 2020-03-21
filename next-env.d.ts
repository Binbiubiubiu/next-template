/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

interface Window {
  __NEXT_REDUX_STORE__: any;
}
