import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
    // const {state} = useContext(Context);

    // const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    // const {editBlogPost} = useContext(Context);
  
    return(
        <View>

            <Text style={style.label}>Enter Title:</Text>
            <TextInput style={style.input} value={title} onChangeText={text => setTitle(text)}/>

            <Text style={style.label}>Content:</Text>
            <TextInput style={style.input} value={content} onChangeText={text => setContent(text)} />

            <Button 
                title="Submit" 
                onPress={() => onSubmit(title, content)}
            />

        </View>
    )

}

BlogPostForm.defaultProps= {
    initialValues:{
        title:'',
        content:''
    }
};

const style = StyleSheet.create({
    input:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        padding: 5
    }
});

export default BlogPostForm;