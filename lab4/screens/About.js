import React from 'react';
import {View,Button,StyleSheet, ImageBackground,Text, Modal} from 'react-native';


const image = { uri: "https://i.pinimg.com/564x/d2/47/9c/d2479c576c8a6684ea6d4649eb6f9dfb.jpg" };


  
const Profile = ({navigation}) => {
    return(
        <View style={styles.image}>
<ImageBackground source={image} style={styles.image}>
      
    </ImageBackground>
            <Button color= "#671e14" title="GO Back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({

    
    image:{
          flex: 1,
    resizeMode: "cover",
 
    }
});