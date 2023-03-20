import {
    Button,
    FlatList,
    LogBox,
    Pressable,
    SafeAreaViewComponent,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {getPokemon} from '../Api';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPokemon, fetchPokemonByType} from '../slice/PokemonSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useGetPokemonTypeQuery} from '../slice/RTKApi';

const PokemonList = ({navigation}) => {
    const {navigate} = navigation;
    // const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const {listData, isLoading} = useSelector(state => state.pokemon);
    // const [type, setType] = useState({});
    const {
        data: pokemonType,
        error,
        isLoading: typeLoading,
    } = useGetPokemonTypeQuery();
    // const {isLoading} = useQuery('getPokemon', getPokemon, {
    //     onSuccess: data => {
    //         setPokemons(data.data.results);
    //     },
    //     onError: error => {
    //         console.log(error);
    //     },
    // });

    const loadPokemon = async () => {
        try {
            await dispatch(fetchPokemon()).unwrap();
            // setPokemons({listData: response, isLoading: false});
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadPokemon();
    }, []);

    const typePress = async url => {
        try {
            await dispatch(fetchPokemonByType({url}));
        } catch (error) {
            console.log(error);
        }
    };

    const renderItem = ({item}) => {
        const url = item.url;
        let result = url.replace('pokemon', 'pokemon-form');
        return (
            <Pressable
                onPress={() =>
                    navigate('detail', {
                        url: result,
                    })
                }>
                <Text style={styles.listPokemon}>{item.name}</Text>
            </Pressable>
        );
    };
    const renderTypeItem = ({item}) => {
        const url = item.url;
        return (
            <Pressable style={styles.badge} onPress={() => typePress(url)}>
                <Text style={{color: 'white'}}>{item.name}</Text>
            </Pressable>
        );
    };

    return (
        <View>
            <Text>PokemonList</Text>
            {typeLoading ? (
                <Text>Loading ...</Text>
            ) : (
                <View>
                    <ScrollView>
                        <FlatList
                            horizontal
                            data={pokemonType.results}
                            renderItem={renderTypeItem}
                            style={{marginBottom: 20}}
                        />
                    </ScrollView>
                    <ScrollView>
                        <FlatList
                            data={listData}
                            renderItem={renderItem}
                            style={{marginBottom: 20}}
                        />
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

export default PokemonList;

const styles = StyleSheet.create({
    listPokemon: {
        marginVertical: 10,
        fontSize: 20,
        borderBottomWidth: 3,
    },
    badge: {
        backgroundColor: 'green',
        margin: 5,
        padding: 5,
        borderRadius: 5,
    },
});
