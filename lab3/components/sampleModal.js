import React from 'react';
import {Button, Modal, View, StyleSheet, Image, ScrollView, Text} from 'react-native';

const SampleModal = props => {
  return (    
    <Modal visible = {props.visible} animationType = "slide">
      <ScrollView> 
      <View style = {styles.container}>
      <Image style = {styles.picture} source = {require('./nike.png')}/>
      <Text style = {styles.text}>
      About Nike{'\n\n'}{'    '}Nike, Inc., formerly (1964–78) Blue Ribbon Sports, American sportswear company headquartered in Beaverton, Oregon. It was founded in 1964 as Blue Ribbon Sports by Bill Bowerman, a track-and-field coach at the University of Oregon, and his former student Phil Knight. They opened their first retail outlet in 1966 and launched the Nike brand shoe in 1972. The company was renamed Nike, Inc., in 1978 and went public two years later. By the early 21st century, Nike had retail outlets and distributors in more than 170 countries, and its logo—a curved check mark called the “swoosh”—was recognized throughout the world.{'\n\n'}{'    '}From the late 1980s Nike steadily expanded its business and diversified its product line through numerous acquisitions, including the shoe companies Cole Haan (1988; sold in 2012) and Converse, Inc. (2003), the sports-equipment producer Canstar Sports, Inc. (1994; later called Bauer and sold in 2008), and the athletic apparel and equipment company Umbro (2008; sold in 2012). In 1996 the company created Nike ACG (“all-conditions gear”), which markets products for extreme sports such as snowboarding and mountain biking. In the early 21st century Nike began selling sports-technology accessories, including portable heart-rate monitors and high-altitude wrist compasses.{'\n\n'}{'    '}Part of Nike’s success is owed to endorsements by such athletes as Michael Jordan, Mia Hamm, Roger Federer, and Tiger Woods. The NikeTown chain stores, the first of which opened in 1990, pay tribute to these and other company spokespersons while offering consumers a full range of Nike products. In the 1990s the company’s image briefly suffered from revelations about poor working conditions in its overseas factories. {'\n\n'}{'\n\n'} Behind Nikes Logo {'\n\n'}{'    '}The well-known swoosh was created in 1971 by Carolyn Davidson, a graphic design student, for the company then known as Blue Ribbon Sports. The founder, Phil Knight, who was her accounting professor, contacted her to design a logo inspired by the Adidas brand. He wanted a logo that inspired the movement.{'\n\n'}{'    '}Davidson, therefore, produced several logo proposals and Knight made his choice on the swoosh, a symbol inspired by the shape of the goddess Nikes wings. Although Knight was not completely satisfied with the work, his budget did not allow him to develop another logo so he thought he would develop this idea.Davidson was paid $ 35 for her work ($ 2 / hour), which she considered enough for the work she did. She went on producing the graphic elements of the company, until the work became too much for one person, and was entrusted to an advertising agency, in 1976.{'\n\n'}{'    '}In 1983, Davidson was invited to an executive dinner at the company and received a swoosh-embellished diamond ring and company shares, estimated to be more than a million dollars worth today.{'\n\n'}{'    '}Subsequently, other graphic elements were added to Nikes branding, such as the Jumpman designed in 1984 for the Nike Air Jordan, which represents the silhouette of the basketball player, Michael Jordan. Later, the slogan Just Do It, which was added to the logo in 1988.
      </Text>
      </View>
      </ScrollView>
        <Button color = '#ffc905' title = "Close" onPress = {props.onClose}/>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffa505',
  },
  text:{
    textAlign: 'justify',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#108690',
    borderColor: 'black',
    borderWidth: 1,
  },
  picture:{
    width: 150,
    height: 150
  }
})

export default SampleModal;