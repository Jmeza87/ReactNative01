import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Colors } from "@/constants/Colors";
import Cardprod from '../components/CardProducto';
import useAPI from '../hooks/useAPI';
const API = 'https://dummyjson.com/products/category/laptops';

export default function laptop() {
   
    const currentColors = Colors.dark;
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);

    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            setDatos(data.products);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDatos();
    }, []);

    
  return (
    <View >
    <Text >({datos.length}) Modelos de Laptops </Text>

    <FlatList
        data={datos}
        renderItem={({ item }) => <Cardprod item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Establece el número de columnas
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false} // Oculta el indicador de desplazamiento vertical
    />
   
    
</View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',

    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        justifyContent: 'center', // Centra los cards horizontalmente
    },
});