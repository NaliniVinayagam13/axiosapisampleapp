/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';

// const baseUrlNew = 'https://jsonplaceholder.typicode.com'
const baseUrl = 'https://randomuser.me/api/'

const AxiosComp = () => {

  const [axiosRespData, setAxiosRespData] = useState<any[]>([]);

  useEffect(() => {
    const axiosData = async () => {
      try {
        await axios.get(baseUrl).then((resp) => {
          // const data = await resp.json()
          console.log('axiosData', resp.data.results)
          setAxiosRespData(resp.data.results)

        })
      } catch (error) {
        console.log('axios error', error)
      }
    };

    axiosData()
  }, []);

  const respData = axiosRespData.map((item, index) => (

    <View key={index} style={layoutStyle.container}>

      <View style={layoutStyle.itemStyle}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>Name: </Text>
        <Text >{item.name.first}</Text>
      </View>

      <View style={layoutStyle.itemStyle}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>Gender: </Text>
        <Text >{item.gender}</Text>
      </View>

      <View style={{alignItems: 'center'}}>
      <Image source={{uri: item.picture.large}} style = {{justifyContent: 'center', alignItems: 'center', width: 100, height: 100, margin: 10}} />
    </View>

    </View>
  ));

  return (
    <View style={layoutStyle.container}>
      <View style={{ padding: 15, backgroundColor: 'lightgreen', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'blue' }}>AxiosSample</Text>
      </View>

      {respData}

      {/* <View style={layoutStyle.container}>
          <View style={layoutStyle.itemStyle}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Name: </Text>
            {axiosRespData.map((item, index) => (
              <Text key={index}>{item.name.first}</Text>
            ))}
          </View>

          <View style={layoutStyle.itemStyle}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Gender: </Text>
            {axiosRespData.map((item, index) => (
              <Text key={index}>{item.gender}</Text>
            ))}
          </View>
        </View> */}

    </View>
  );
};

const layoutStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'

  },
  itemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    fontSize: 14
  }
})
export default AxiosComp;
