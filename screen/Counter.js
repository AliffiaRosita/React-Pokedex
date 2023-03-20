import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, incrementByAmount} from '../slice/CounterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Button
                title="+"
                style={styles.content}
                color={'green'}
                onPress={() => dispatch(increment())}
            />
            <Text style={styles.content}>{count}</Text>
            <Button
                title="-"
                style={styles.content}
                color={'red'}
                onPress={() => {
                    dispatch(decrement());
                }}
            />
            <Button
                title="+2"
                style={styles.content}
                color={'yellow'}
                onPress={() => {
                    dispatch(incrementByAmount(2));
                }}
            />
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20,
    },
    content: {
        paddingHorizontal: 100,
    },
});
