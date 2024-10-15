
import React from 'react'
import { colors } from '../Global/Colors'

import {
  Ionicons,

  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,

} from "@expo/vector-icons";

import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  FlatList,
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
} from 'react-native';




const Itemxd = ({
  navigation, route, ttt
}) => {








  function probando() {
    alert("probando")
  }

  let data = [
    {
      id: 1,
      name: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/112011/logo_banco_hipotecario_0.ai-converted.png?itok=glHHD4OS"

    },
    {
      id: 2,
      name: "https://lavozdelpueblo.com.ar/recursos/fotos/2022/03/08/lvp.mpo-696x464.jpeg"

    },
    {
      id: 3,
      name: "https://furp.org.ar/cont/news/imagePot/FURP-03012020174858000000-5e5c1fbaed3ec.jpg"

    },
    {
      id: 4,
      name: "https://media.wired.com/photos/5926dea77034dc5f91bece36/master/w_1600,c_limit/Mastercard3-1.jpg"
    },
  ]
  const SECTIONS = [{
    title: ' ',
    data: [
      {
        key: ' ',
        text: ' ',
        uri: ' ',
      }]
  }]

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>



        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderItem={({ item, section }) => {
            return <>
              <View style={styles.container}>
                <Image
                  style={styles.imageBoard}
                  source={require('../Assets/Images/BONSAISORLANDO.png')}
                />

                <View style={styles.boxs}>
                  <Pressable style={styles.boxsCard}
                    onPress={probando} >
                    <FontAwesome5
                      style={[{ backgroundColor: "#8BDF70", }, styles.icon]}
                      name="shopping-bag"
                      size={
                        28
                      }
                      color={
                        colors.colorblanco
                      }
                    />
                    <View>
                      <Text style={styles.textIcon}>Shopping</Text>
                    </View>
                  </Pressable>
                  <Pressable style={styles.boxsCard}
                    onPress={probando} >
                    <FontAwesome
                      style={[{ backgroundColor: "lightblue", }, styles.icon]}
                      name="cutlery"
                      size={
                        32
                      }
                      color={
                        colors.colorblanco
                      }
                    />
                    <View>
                      <Text style={styles.textIcon}>Gastronomia</Text>
                    </View>
                  </Pressable>
                  <Pressable style={styles.boxsCard}
                    onPress={probando}>
                    <FontAwesome5
                      style={[{ backgroundColor: "#E6785C", }, styles.icon]}
                      name="tshirt"
                      size={28}
                      color={colors.colorblanco}
                    />
                    <View>
                      <Text style={styles.textIcon}>Moda</Text>
                    </View>
                  </Pressable>
                  <Pressable style={styles.boxsCard}
                    onPress={probando} >
                    <FontAwesome
                      style={[{ backgroundColor: "#D77AE5", }, styles.icon]}
                      name="car"
                      size={
                        28
                      }
                      color={
                        colors.colorblanco
                      }
                    />
                    <View>
                      <Text style={styles.textIcon}>Parking</Text>
                    </View>
                  </Pressable>
                  <Pressable style={styles.boxsCard}
                    onPress={probando}>
                    <MaterialIcons
                      style={[{ backgroundColor: "#DDDB64", }, styles.icon]}
                      name="event-available"
                      size={
                        28
                      }
                      color={
                        colors.colorblanco
                      }
                    />
                    <View>
                      <Text style={styles.textIcon}>Eventos</Text>
                    </View>
                  </Pressable>
                  <Pressable style={styles.boxsCard}
                    onPress={probando} ><Ionicons
                      style={[{ backgroundColor: "#EC7696", }, styles.icon]}
                      name="person-circle-outline"
                      size={
                        28
                      }
                      color={
                        colors.colorblanco
                      }
                    /><View>
                      <Text style={styles.textIcon}>Mas</Text>
                    </View>
                  </Pressable>
                </View>

                <View style={styles.container2}>
                  <FlatList
                    data={data}
                    keyExtractor={data => data.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.wrapper}
                    horizontal={true}
                    style={styles.flatlist}
                    renderItem={({ item }) =>
                      <Image style={styles.image} source={{ uri: `${item.name}` }} />}
                  />
                </View>


                <View style={styles.container3}>
                  <View >
                    <View style={styles.containerCardsDown}>
                      <View>
                        <Text style={styles.ttextbold} >
                          Destacados:
                        </Text>
                      </View>
                      <View style={styles.cardsDown}>
                        <Ionicons   style={styles.TextcardsDown} name="flower-outline" size={24} color={colors.color5} />
                        <View>
                          <Text style={styles.TextcardsDown}>  Este 2023 explota</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.containerCardsDown}>
                      <View>
                        <Text style={styles.ttextbold} >
                           Carga tus facturas
                        </Text>
                      </View>
                      <View style={styles.cardsDown}>
                        <Ionicons  style={styles.TextcardsDown} name="flower-outline" size={24} color={colors.color5} />
                        <View>
                          <Text style={styles.TextcardsDown}>  Facturas A </Text>
                        </View>
                      </View>
                      <View style={styles.cardsDown}>
                        <Ionicons  style={styles.TextcardsDown} name="flower-outline" size={24} color={colors.color5} />
                        <View>
                          <Text style={styles.TextcardsDown}> Facturas B</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.containerCardsDown}>
                      <View>
                        <Text style={styles.ttextbold} >
                          Beneficios y mas
                        </Text>
                      </View>
                      <View style={styles.cardsDown}> 
                          <Ionicons  style={styles.TextcardsDown} name="flower-outline" size={24} color={colors.color5} />
                          <View>
                            <Text style={styles.TextcardsDown}> Hola</Text>
                          </View> 
                      </View>
                      <View>
                      </View>

                    </View>
                  </View>
                  <View>
                    <Text>Sigue la web</Text>
                  </View>

                </View>

              </View>

            </>
          }}
        />

      </SafeAreaView>
    </View>
  );
};



export default Itemxd

const styles = StyleSheet.create({

  container: {
    // // fontfamily: 'Josefin',
    flex: 1,
    backgroundColor: '#121212',
  },
  sectionHeader: {
    // // fontfamily: 'Josefin',
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    // fontfamily: 'Josefin',
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    // fontfamily: 'Josefin',
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },


  container: {
    // fontfamily: 'Josefin',
    backgroundColor: colors.colorblanco,
    width: "100%",
    height: "100%",
  },
  boxs: {
    // fontfamily: 'Josefin',
    paddingTop: "4%",
    paddingBottom: "4%",
    paddingLeft: "7%",
    paddingRight: "7%",
    backgroundColor: colors.colorblanco,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "flex-end",
  },
  textIcon: {
    fontSize: 14,
    // fontfamily: 'Josefin',
    height: 35,
    width: 90,
    textAlign: "center",
  },
  icon: {
    // fontfamily: 'Josefin',
    width: 60,
    borderRadius: 50,
    padding: 15,

  },
  boxsCard: {
    // fontfamily: 'Josefin',
    width: 60,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  TextcardsDown: {
    marginLeft: 12,
    marginTop: 12,
  },
  flatprobando: {
    // fontfamily: 'Josefin',
    backgroundColor: "red",
    width: "50%",
  },
  wrapper: {
    paddingHorizontal: 5,
    gap: 20,
  },
  container2: {
    // fontfamily: 'Josefin',
    backgroundColor: colors.colorblanco,
    alignItems: 'center',
    height: 110,
    marginBottom: "5%",
    marginTop: "5%",
  },
  flatlist: {
    width: '90%',
  },
  ttext: {
    // fontfamily: 'Josefin',
  },
  ttextbold: {
    fontSize: 18,
    marginBottom: 6,
    // fontfamily: 'Josefin',
  },
  cardsDown: { 
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    // fontfamily: 'Josefin',
    margin: 6,
    backgroundColor: 'white',  // Fondo blanco
    borderRadius: 50,          // Border-radius al 50%
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 30,
    padding: 2,
  },
  containerCardsDown: {
    // fontfamily: 'Josefin',
    margin: 10,
    marginBottom: 15,
  },
  container3: {
    // fontfamily: 'Josefin',
    margin: 10,
    marginBottom: 15,
  },
  image: {
    height: 80,
    width: 180,
    marginBottom: '5%',
    minWidth: 150,
    maxWidth: 250,
    borderRadius: 8
  },
  imageBoard: {
    height: 180,
    width: '90%',
    borderRadius: 8,
    margin: "5%",
  },
})