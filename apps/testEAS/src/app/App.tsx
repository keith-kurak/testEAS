/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useCallback, useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';
import testPng from './test.png';
import * as Updates from 'expo-updates';

//const testPng = require('./test.png');
export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatesResponse, setUpdatesResponse] =
    useState<Updates.UpdateCheckResult | null>(null);
  const [result, setResult] = useState('');

  const checkUpdatesAvailability = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await Updates.checkForUpdateAsync();

      setResult(JSON.stringify(response));
      setUpdatesResponse(response);
    } catch (error) {
      setResult(JSON.stringify(error));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchUpdateAndReloadAsync = useCallback(async () => {
    try {
      setIsLoading(true);

      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    } catch (error) {
      setResult(JSON.stringify(error));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Image source={testPng} style={{width: 200, height: 200}} resizeMode="contain"/>

          <Button title="Check for updates" disabled={isLoading} onPress={checkUpdatesAvailability} />

          <Button title="Fetch and reload" disabled={isLoading || !updatesResponse?.isAvailable} onPress={fetchUpdateAndReloadAsync} />
          
          <Text>{isLoading ? 'Loading...' : result}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  }
});

export default App;
