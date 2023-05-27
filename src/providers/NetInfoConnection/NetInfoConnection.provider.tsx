import NetInfo from "@react-native-community/netinfo";
import React, { FC, useEffect, useState } from "react";
import {
  AppState,
  AppStateStatus,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { NetInfoErrorConnection } from "../../components/NetInfoErrorConnection";
import { AstrogatorColor } from "../../theming/theme";
import { focusManager, onlineManager } from "react-query";

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
  const [isNetAvailable, setIsNetAvailable] = useState<boolean>(true);

  const getNetInfo = async () => {
    setIsNetInfoFetching(true);

    await NetInfo.fetch().then((state) => {
      setIsNetAvailable(
        (state.isConnected || state.isInternetReachable) ?? false
      );
    });

    await setIsNetInfoFetching(false);
  };
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsNetAvailable(
        (state.isConnected || state.isInternetReachable) ?? false
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    onlineManager.setEventListener((setOnline) => {
      return NetInfo.addEventListener((state) => {
        setOnline(!!state.isConnected);
      });
    });
  }, []);

  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== "web") {
      focusManager.setFocused(status === "active");
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange);

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      {isNetAvailable ? (
        children
      ) : (
        <NetInfoErrorConnection
          onReload={async () => {
            getNetInfo();
          }}
        />
      )}
    </View>
  );
};

export default NetInfoConnectionProvider;
