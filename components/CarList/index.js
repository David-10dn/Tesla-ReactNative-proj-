import React from 'react'
import { View, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItem';
import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}

                // this function takes item (each object from cars.js) and then send it (for each item) to CarItem
                renderItem={({ item }) => <CarItem car={item} />}
                // "jumping" scroll like on tictoc
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                // jump on next object (like tictoc)
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList