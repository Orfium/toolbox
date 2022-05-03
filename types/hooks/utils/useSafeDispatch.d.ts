import { Dispatch } from 'react';
export declare function useSafeDispatch<T>(dispatch: Dispatch<T>): (actionEntity: T) => void;
