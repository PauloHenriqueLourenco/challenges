import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useApp } from '../hooks/app';

import Expired from '../pages/Expired';

import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { expired, loading } = useApp();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return expired ? <Expired /> : <AppRoutes />;
};

export default Routes;
