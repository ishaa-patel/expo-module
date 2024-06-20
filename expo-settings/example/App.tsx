import { StyleSheet, Text, View } from 'react-native';

import * as AuComHotbet from 'au.com.hotbet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{AuComHotbet.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
