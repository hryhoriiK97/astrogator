import NetInfo from '@react-native-community/netinfo';
import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NetInfoErrorConnection} from '../../components/NetInfoErrorConnection';
import {AstrogatorColor} from '../../theming/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AstrogatorColor.Black,
  },
});

type NetInfoConnectionProviderProps = {
  children: React.ReactNode;
};

const NetInfoConnectionProvider: FC<NetInfoConnectionProviderProps> = ({
  children,
}) => {
  const [isNetInfoFetching, setIsNetInfoFetching] = useState<boolean>(false);
  const [isNetInfoConnection, setIsNetInfoConnection] = useState<boolean>(true);

  const getNetInfo = async () => {
    setIsNetInfoFetching(true);

    await NetInfo.fetch().then(state => {
      setIsNetInfoConnection(state.isConnected ?? false);
    });

    await setIsNetInfoFetching(false);
  };
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsNetInfoConnection(
        (state.isConnected || state.isInternetReachable) ?? false,
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      {isNetInfoConnection ? (
        children
      ) : (
        <NetInfoErrorConnection
          isRefreshing={isNetInfoFetching}
          onRefresh={getNetInfo}
        />
      )}
    </View>
  );
};

export default NetInfoConnectionProvider;
