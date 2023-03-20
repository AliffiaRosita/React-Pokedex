import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getPokemonDetail} from '../Api';
import {useQuery} from 'react-query';
import {useGetPokemonByNameQuery} from '../slice/RTKApi';

const PokemonDetail = ({route}) => {
    // const [data, setData] = useState({name: '', moves: []});
    const {data, error, isLoading} = useGetPokemonByNameQuery(route.params.url);
    // const {isLoading, data, isError} = useQuery(
    //     'detail',
    //     () => getPokemonDetail(route.params.url),
    //     // onSuccess: res => (data = res.data),
    //     // setData({
    //     //     name: res.data.name,
    //     //     moves: res.data.moves,
    //     // }),
    // );
    return (
        <View>
            <Text>PokemonDetail</Text>
            {isLoading ? (
                <Text>Loading...</Text>
            ) : (
                <View>
                    <Image
                        source={{uri: `${data.sprites.front_default}`}}
                        style={{width: 100, height: 100}}
                    />
                    <Text>Pokemon Name : {data.pokemon.name}</Text>
                </View>
            )}
            {error && <Text>Error</Text>}
        </View>
    );
};

export default PokemonDetail;

const styles = StyleSheet.create({});
