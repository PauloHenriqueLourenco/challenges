import { createContext } from 'react';

import { Starship } from '../pages/Dashboard/types';

interface StarshipContextData {
  starship: Starship;
}

export const StarshipContext = createContext<StarshipContextData>(
  {} as StarshipContextData,
);
