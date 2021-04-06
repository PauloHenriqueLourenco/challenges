import { createContext } from 'react';

import { Film } from '../pages/Dashboard/types';

interface FilmContextData {
  film: Film;
}

export const FilmContext = createContext<FilmContextData>(
  {} as FilmContextData,
);
