import React from 'react';
import {View,Button,StyleSheet, ImageBackground,Text, Modal, ScrollView} from 'react-native';


const image = { uri: "https://i.pinimg.com/originals/76/1a/1e/761a1ee893a4baad65b0696588f376e5.jpg" };


  
const Profile = ({navigation}) => {
    return(
        <View style={styles.image}>
<ImageBackground source={image} style={styles.image}>

<ScrollView>

  <Text  style={{color:'#926f34', fontFamily:"fantasy"}}>

<Text>
 {'\n\n'}  - - - - - - - - - - P e r s o n a l  I n f o r m a t i o n - - - - - - - - - - {'\n\n'}

  Name:                                      Duales, Angel A.{'\n'}
  Studtent No.:                               201810967{'\n'}
  Email:                                      angel.duales@cvsu.edu.ph{'\n'}
  Birthday:                                   April 18 1999{'\n'}
  Age:                                        21 Years old{'\n'}
  Address:                                    Tanza, Cavite
  {'\n\n'}
  </Text>

<Text>
  Name:                                       Marjuki, Za-ida Zane M.{'\n'}
  Student No.:                                201810969{'\n'}
  Email:                                      za-idazane.marjuki@cvsu.edu.ph{'\n'}
  Birthday:                                   September 2, 1999{'\n'}
  Age:                                        21 Years old{'\n'}
  Address:                                    Carmona, Cavite
  {'\n\n'}
</Text>

<Text>
  Name:                                       Resurrecion, Brix P.{'\n'}
  Student No.:                                201810423{'\n'}
  Email:                                      brix.resurreccion@cvsu.edu.ph{'\n'}
  Birthday:                                   March 1 2000{'\n'}
  Age:                                        21 Years old{'\n'}
  Address:                                    Alfonso, Cavite
  {'\n\n'}
</Text>

<Text>
  Name:                                      Sierra. Mary Joy{'\n'}
  Student No.:                               201810441{'\n'}
  Email:                                     maryjoy.sierra@cvsu.edu.ph{'\n'}
  Birthday:                                  August 29, 1999{'\n'}
  Age:                                       21 Years old{'\n'}
  Address:                                   Indang, Cavite
  {'\n\n'}
</Text>

  </Text>

</ScrollView>


  
    </ImageBackground>
   
            <Button color= "#671e14" title="GO BACKHOME" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({

    
    image:{
          flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    }
});