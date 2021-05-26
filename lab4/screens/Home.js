import React from 'react';
import {View,Button,StyleSheet, ImageBackground,Text, Modal} from 'react-native';


const image = { uri: "https://www.teahub.io/photos/full/6-65824_1080x1920-free-fall-iphone-hd-wallpapers-screen-fall.jpg" };


  
const Home = ({navigation}) => {
    return(
        <View style={styles.image}>
<ImageBackground source={image} style={styles.image}>
      
    </ImageBackground>
            <Button color= "#671e14" title="PROFILE" onPress={() => navigation.navigate('Profile')} />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({

    
    image:{
          flex: 1,
    resizeMode: "cover",
  
    justifyContent: "center"
    }
});