import React from 'react';

import { AppProvider as Provider } from './app';

const AppProvider: React.FC = ({ children }) => <Provider>{children}</Provider>;

export default AppProvider;
