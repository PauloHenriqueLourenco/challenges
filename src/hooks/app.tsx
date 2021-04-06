import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthState {
  expired: boolean;
}

interface AppContextData {
  expired: boolean;
  loading: boolean;
  pay(): Promise<void>;
  later(): Promise<void>;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({ expired: true });
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const expired = await AsyncStorage.getItem('@StarWarsApp:expired');

      if (expired) {
        setData({ expired: !!expired });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const pay = useCallback(async () => {
    await AsyncStorage.setItem('@StarWarsApp:chosenOption', 'pay');
  }, []);

  const later = useCallback(async () => {
    await AsyncStorage.setItem('@StarWarsApp:chosenOption', 'later');
  }, []);

  return (
    <AppContext.Provider value={{ expired: data.expired, loading, pay, later }}>
      {children}
    </AppContext.Provider>
  );
};

function useApp(): AppContextData {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }

  return context;
}

export { AppProvider, useApp };
