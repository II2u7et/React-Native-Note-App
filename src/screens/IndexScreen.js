import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const IndexScreeen = ({navigation}) => {
    const {state, deleteBlogPost, getBlogPost} = useContext(Context)

    useEffect(() => {
        getBlogPost();
        const listener = navigation.addListener('didFocus', () =>{
            getBlogPost();
        });

        return () => {
            listener.remove();
        }
    }, []);

    return(
        <View>
        
            <FlatList
                data={state}
                keyExtractor={ (blogPost) => blogPost.id}
                renderItem={({item}) => {
                    return( 
                        <TouchableOpacity onPress= {() => navigation.navigate('Show', {id: item.id})}>
                            <View  style = {style.row}>

                                <Text style={style.title}> {item.title} - {item.id} </Text>

                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={style.icon} name="trash"/>
                                </TouchableOpacity>
        
                            </View>
                        </TouchableOpacity>
                )}}
            />
            
        </View>
    )
}

IndexScreeen.navigationOptions = ({navigation}) => {
    return{
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
        
    };
};

const style = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    title:{
        fontSize: 18,
        color: '#1f1fff'
    },
    icon:{
        fontSize: 18
    }
})

export default IndexScreeen;