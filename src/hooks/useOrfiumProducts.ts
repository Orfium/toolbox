import { useContext } from 'react';
import { OrfiumProductsContext } from '../contexts/orfium-products';

export const useOrfiumProducts = () => useContext(OrfiumProductsContext);
