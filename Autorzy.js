
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';



export default function Autorzy() {
  return (
    

    <View style={styles.container}>
      <View id='header' style={styles.menu}>
          <TouchableOpacity>
          <Image source={require('./assets/menu.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.logo} source={require('./assets/logo.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source={require('./assets/logoProfil.png')}/>
          </TouchableOpacity>
          </View>
          <View>
          <Text style={styles.authors}>Aplikację wykonali:</Text>
          <Text style={styles.people}>Mateusz Smardz</Text>
          <Text style={styles.people}>Łukasz Bździuch</Text>
          <Text style={styles.people}>Maksymilian Kula</Text>
          <Text style={styles.people}>Bartosz Szuba</Text>

          </View>
          <Text style={styles.version}>v.1.0</Text>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:0,
    position:'relative',
  },
  menu: {
    marginTop:50,
    width: '100%',
    height:'5%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    paddingLeft:5,
    paddingRight:10,

  },
  logo:{
    marginRight:16,
  },
  authors:{
    fontSize:32,
    justifyContent:'center',
    textAlign:'center',
    marginTop:60,
    marginBottom:50,
  },
  people:{
    margin:10,
    fontSize:20,
    textAlign:'center',
  },
  version: {
    position: 'absolute',
    bottom: 10,
    right: 10, 
  },
});
