import { createContext } from 'react';

import { Character } from '../pages/Dashboard/types';

interface CharacterContextData {
  character: Character;
}

export const CharacterContext = createContext<CharacterContextData>(
  {} as CharacterContextData,
);
