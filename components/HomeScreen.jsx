import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from 'react-native';
import ModalButton from "./ModalButton";


const HomeScreen = ({navigation}) => {
    //const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.btn}>
        <Button 
          title="Go Detail Page"
          onPress={()=>navigation.push("Detail")}
        />
        </View>
        <ModalButton />
      </View>
    );
  };

  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn: {
      marginTop: 30
    }
  });