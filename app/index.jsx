import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton'

const index = () => {


  const handlePressDetail = () => {
    Alert.alert(
      "Detalles",
      "Aquí están los detalles que solicitaste.",
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Hola Mundo</Text>
      <Text style={styles.SubTitulo}>Desde React Native</Text>

      <CustomButton
    title="Ver Detalle"
    onPress={handlePressDetail} // Usa la función de navegación aquí
    type="info"
    outline
    margin={0}
    fontSize={14}/>
    </View>




    
  )
}

export default index

const styles = StyleSheet.create({

  container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"gray"

  },

  Titulo:{
          fontSize:24,
          color:"white"


  },

  SubTitulo:
  {
      fontSize:14,
      fontFamily:"sans-serif"


  }


})