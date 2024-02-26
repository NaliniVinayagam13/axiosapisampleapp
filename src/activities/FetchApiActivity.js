import React, { Component, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class FetchApiActivity extends Component {

    state = {
        // jsonDataId: '',
        // jsonDataTitle: '',
        // jsonDataBody: '',
        jsonResponse: ''
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'GET' }).
            then(response => response.json()).
            then(json => {
                // this.setState({ jsonDataTitle: json.title }),
                // this.setState({ jsonDataId: json.userId }), 
                // this.setState({jsonDataBody: json.body})
                this.setState({ jsonResponse: json })
            }).
            catch(error => { console.error(error) });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>

                <Text style={styles.headerStyle}>Fetch Sample</Text>

                <View style={{ flex: 1, alignContent: 'center', padding: 15 }}>
                    {/* <Text style={styles.textStyle}>UserId:   {this.state.jsonDataId} </Text>
                    <Text style={styles.textStyle}>Title:        {this.state.jsonDataTitle} </Text>
                    <Text style={styles.textStyle}>Body:       {this.state.jsonDataBody} </Text>  */}

                    <Text style={styles.textStyle}>UserId:    {this.state.jsonResponse.userId} </Text>
                    <Text style={styles.textStyle}>Title:        {this.state.jsonResponse.title} </Text>
                    <Text style={styles.textStyle}>Body:       {this.state.jsonResponse.body} </Text>
                </View>
            </View>
        )
    }
}

// const asyncData = async () => {

//     const response = await fetch('https://randomuser.me/api/')
//     const data = await response.json()
//     return data
// }

// const getData = async () => {
//     const fetchData = await asyncData()
//     console.log('Data', fetchData)
// }


// useEffect (() => {
//     const getJsonDataTitlejsonDataTitle = async () => {
//         try {
//             let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//             let jsonRes = await res.json();
//             thisjsonDataBody: json.body })
//             console.log('DataNew', "jsonRes.body: " +jsonDataBody)
//             return jsonRes.body;
//         } catch (error) {
//             console.log("Comes in Error part: " + error);
//         }
//     };

//     getJsonDataTitlejsonDataTitle()
// });

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: 'green',
        padding: 15,
        width: '100%',
        color: 'blue',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    textStyle: {

        color: 'green',
        fontWeight: 'normal',
        textAlignVertical: 'center'
    }
})