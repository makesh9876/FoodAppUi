import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.text}>Food App</Text>
      <Text>Let's start eat with KFC</Text>
      <Text>magesh nanee</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color : 'blue',
    fontSize : 30,
    fontWeight : 'bold',
  },
});
