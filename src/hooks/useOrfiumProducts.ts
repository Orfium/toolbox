import { useContext } from 'react';
import { OrfiumProductsContext } from '../contexts/orfium-products.js';

export const useOrfiumProducts = () => useContext(OrfiumProductsContext);

export type UseOrfiumProductsReturnValue = ReturnType<typeof useOrfiumProducts>;
