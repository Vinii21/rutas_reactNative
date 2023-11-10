import { useNavigation } from "@react-navigation/native";
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import ModalButton from "./ModalButton";
import { useLayoutEffect, useState } from "react";


const DetailScreen = ({navigation}) => {
    const {setOptions} = useNavigation();

    const [count, setCount] = useState(0)

    useLayoutEffect(()=>{
      setOptions({
        headerRight: () => (
          <View style={styles.btn}>
            <Button 
              title="Add"
              onPress={()=>setCount(count + 1)}
            />
          </View>
        )
      })
    },[count])
  
    return (
      <View style={styles.container}>
        <Text>Hay {count} en total</Text>
        <Button 
          title="Volver"
          onPress={()=>navigation.goBack()}
        />
        <ModalButton />
      </View>
    );
  };

  export default DetailScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn: {
      marginRight: 20
    }
  });