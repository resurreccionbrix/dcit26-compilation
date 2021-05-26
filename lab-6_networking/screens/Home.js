import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        padding: 100,
        alignItems: 'center',
        backgroundColor: '#e6bab1',
      }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#3c3555" />
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: data.picture.medium }}
          />

          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 25,
              color: 'white',
            }}>
            {'\n'}
            {data.name.first} {data.name.last}
          </Text>
        </TouchableOpacity>
      )}

      <Button title="RANDOM USER" onPress={() => fetchRandomData()} />
    </View>
  );
};

export default Home;
