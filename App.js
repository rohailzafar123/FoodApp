import 'react-native-gesture-handler';
import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Search from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';
import Menu from 'react-native-vector-icons/Feather';
import Send from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import Heart from 'react-native-vector-icons/AntDesign';
import HomeIcon from 'react-native-vector-icons/Feather';
import Nearby from 'react-native-vector-icons/MaterialIcons';
import Cart from 'react-native-vector-icons/Feather';
import Account from 'react-native-vector-icons/MaterialCommunityIcons';



const { width, height } = Dimensions.get('window');
// import { TouchableOpacity } from 'react-native-gesture-handler';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 4.5
    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View style={styles.main}>
        <StatusBar backgroundColor="#ffffff7e" barStyle="dark-content"></StatusBar>


        {/* Header with notification buttun */}
        <View style={styles.toper}>
          <Text style={styles.toper_text}>
            What would you like to eat?
        </Text>
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Notification name='notifications' size={30} color={'black'} />
          </TouchableOpacity>
        </View>


        {/* search bar */}
        <View style={styles.searchBar}>
          <View>
            <TouchableOpacity>
              <Search name='search' size={20} color={'red'} />

            </TouchableOpacity>
          </View>

          <TextInput
            placeholder='Find A Food Or Restaurent'
            style={styles.search_Input}
            placeholderTextColor='rgb(206, 205, 205)'
          >
          </TextInput>
          <View>
            <TouchableOpacity>
              <Menu name='menu' size={20} color={'red'} />

            </TouchableOpacity>
          </View>
        </View>


        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {/* Upper header icon viewer */}
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.mainViewIcons}>

                {/* Icecream */}
                <View>
                  <TouchableOpacity style={styles.iconOpacity}>
                    <View style={styles.foodIconView}>
                      <Image
                        source={require('./images/icons/iceCream.png')}
                        style={{
                          width: width * .17,
                          height: height * .09,
                          marginTop: 5,
                        }} />
                    </View>
                    <View style={styles.iconText}>
                      <Text style={{
                        color: '#909B9B',
                        marginTop: 10,
                      }}>Icecream</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* BarbQ */}
                <View>
                  <TouchableOpacity style={styles.iconOpacity}>
                    <View style={styles.foodIconView}>
                      <Image
                        source={require('./images/icons/barbq.png')}
                        style={{
                          width: width * .16,
                          height: height * .06,
                          marginTop: 5,
                        }} />
                    </View>
                    <View style={styles.iconText}>
                      <Text style={{
                        color: '#909B9B',
                        marginTop: 10,
                      }}>BBQ</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* Cake */}

                <View>

                  <TouchableOpacity style={styles.iconOpacity}>
                    <View style={styles.foodIconView}>
                      <Image
                        source={require('./images/icons/cake.png')}
                        style={{
                          width: width * .17,
                          height: height * .07,

                        }} />
                    </View>
                    <View style={styles.iconText}>
                      <Text style={{
                        color: '#909B9B',
                        marginTop: 10,
                      }}>Cake</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* chinese */}
                <View>

                  <TouchableOpacity style={styles.iconOpacity}>
                    <View style={styles.foodIconView}>
                      <Image
                        source={require('./images/icons/chinese.png')}
                        style={{
                          width: width * .18,
                          height: height * .08,

                        }} />
                    </View>
                    <View style={styles.iconText}>
                      <Text style={{
                        color: '#909B9B',
                        marginTop: 10,
                      }}>Chinese</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* FastFood */}
                <View >

                  <TouchableOpacity style={styles.iconOpacity}>
                    <View style={styles.foodIconView}>
                      <Image
                        source={require('./images/icons/fastFood.png')}
                        style={{
                          width: width * .17,
                          height: height * .07,

                        }} />
                    </View>
                    <View style={styles.iconText}>
                      <Text style={{
                        color: '#909B9B',
                        marginTop: 10,
                      }}>FastFood</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* Fruits */}
                <View>
                  <TouchableOpacity style={styles.iconOpacity}>
                    <View style={styles.foodIconView}>
                      <Image
                        source={require('./images/icons/fruits.png')}
                        style={{
                          width: width * .18,
                          height: height * .08,

                        }} />
                    </View>
                    <View style={styles.iconText}>
                      <Text style={{
                        color: '#909B9B',
                        marginTop: 10,
                      }}>Fruits</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* MIlkShake */}
                <View>
                  <TouchableOpacity style={styles.iconOpacity}>
                    <View style={styles.foodIconView}>
                      <Image
                        source={require('./images/icons/milkShake.png')}
                        style={{
                          width: width * .2,
                          height: height * .1,

                        }} />
                    </View>
                    <View style={styles.iconText}>
                      <Text style={{
                        color: '#909B9B',
                        marginTop: 10,
                      }}>MilkShake</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
          {/* Icon End */}


          {/* Cards */}

          <View>
            <View style={{
              marginBottom: 15,
            }}>
              <Text style={{
                fontSize: 25,
                color: 'gray',

              }}>
                Popular Foods
            </Text>
            </View>
            <View>
              <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {/* Card 1 */}
                <View style={{
                  flexDirection: 'row',
                }}>
                  <View>

                    <TouchableOpacity style={{
                      width: width * .45,
                      marginRight: 10,
                      height: height * .34
                    }}
                    onPress={()=> this.props.navigation.navigate('Discirption')}
                    >
                      <View style={styles.cardDesign}>
                        <View style={{
                          position: 'absolute',
                          right: 0,
                          marginTop: 6,
                          // marginRight:10,
                          marginRight: 6,

                        }}>
                          <View style={{
                            position: 'relative',
                            // alignSelf:'flex-end',
                            // marginRight:10,

                          }}>
                            <TouchableOpacity >
                              <View style={styles.sendBottun}>
                                <Heart name='heart' size={13} color={'red'} />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <Image
                          source={require('./images/cards/zinger.png')}
                          style={{
                            width: width * .42,
                            alignSelf: 'center',
                            height: height * .25,
                          }}
                        />
                        <View style={styles.cardText_andSend}>
                          <Text style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: 'gray',
                          }}>
                            Doppeler
                </Text>
                          <TouchableOpacity>
                            <View style={styles.sendBottun}>
                              <Send name='send' size={13} color={'red'} />
                            </View>
                          </TouchableOpacity>

                        </View>
                        <View style={styles.star_aling}>
                          <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            fullStarColor={'red'}
                            halfStarColor={'red'}
                            starSize={10}

                          />
                          <Text
                            style={{
                              fontSize: 11,
                              fontWeight: 'bold',
                            }} >
                            RS:399
                  </Text>
                        </View>
                      </View>

                    </TouchableOpacity>

                  </View>
                  {/* Card 2  */}

                  <View>

                    <TouchableOpacity style={{
                      width: width * .45,
                      marginRight: 10,
                      height: height * .34
                    }}>
                      <View style={styles.cardDesign}>
                        <View style={{
                          position: 'absolute',
                          right: 0,
                          marginTop: 6,
                          // marginRight:10,
                          marginRight: 6,

                        }}>
                          <View style={{
                            position: 'relative',
                            // alignSelf:'flex-end',
                            // marginRight:10,

                          }}>
                            <TouchableOpacity >
                              <View style={styles.sendBottun}>
                                <Heart name='heart' size={13} color={'red'} />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <Image
                          source={require('./images/cards/grilledfish.png')}
                          style={{
                            width: width * .41,
                            alignSelf: 'center',
                            height: height * .19,
                            marginTop: 25,
                          }}
                        />
                        <View style={{
                          marginTop: 19,

                        }}>
                          <View style={styles.cardText_andSend}>
                            <Text style={{
                              fontSize: 15,
                              fontWeight: 'bold',
                              color: 'gray',
                            }}>
                              Grilledfish
                        </Text>
                            <TouchableOpacity>
                              <View style={styles.sendBottun}>
                                <Send name='send' size={13} color={'red'} />
                              </View>
                            </TouchableOpacity>

                          </View>
                          <View style={styles.star_aling}>
                            <StarRating
                              disabled={false}
                              maxStars={5}
                              rating={this.state.starCount}
                              selectedStar={(rating) => this.onStarRatingPress(rating)}
                              fullStarColor={'red'}
                              halfStarColor={'red'}
                              starSize={10}

                            />
                            <Text
                              style={{
                                fontSize: 11,
                                fontWeight: 'bold',
                              }} >
                              RS:799
                        </Text>
                          </View>
                        </View>
                      </View>

                    </TouchableOpacity>

                  </View>

                  {/* Card 3 */}

                  <View>

                    <TouchableOpacity style={{
                      width: width * .45,
                      marginRight: 10,
                      height: height * .34
                    }}>
                      <View style={styles.cardDesign}>
                        <View style={{
                          position: 'absolute',
                          right: 0,
                          marginTop: 6,
                          // marginRight:10,
                          marginRight: 6,

                        }}>
                          <View style={{
                            position: 'relative',
                            // alignSelf:'flex-end',
                            // marginRight:10,

                          }}>
                            <TouchableOpacity >
                              <View style={styles.sendBottun}>
                                <Heart name='heart' size={13} color={'red'} />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <Image
                          source={require('./images/cards/pasta.png')}
                          style={{
                            width: width * .38,
                            alignSelf: 'center',
                            height: height * .14,
                            marginTop: 50,
                          }}
                        />
                        <View style={{
                          marginTop: 30,
                        }}>

                          <View style={styles.cardText_andSend}>
                            <Text style={{
                              fontSize: 15,
                              fontWeight: 'bold',
                              color: 'gray',
                            }}>
                              Pasta
                        </Text>
                            <TouchableOpacity>
                              <View style={styles.sendBottun}>
                                <Send name='send' size={13} color={'red'} />
                              </View>
                            </TouchableOpacity>

                          </View>
                          <View style={styles.star_aling}>
                            <StarRating
                              disabled={false}
                              maxStars={5}
                              rating={this.state.starCount}
                              selectedStar={(rating) => this.onStarRatingPress(rating)}
                              fullStarColor={'red'}
                              halfStarColor={'red'}
                              starSize={10}

                            />
                            <Text
                              style={{
                                fontSize: 11,
                                fontWeight: 'bold',
                              }} >
                              RS:499
                  </Text>
                          </View>
                        </View>

                      </View>

                    </TouchableOpacity>

                  </View>
                </View>
              </ScrollView>
            </View>
          </View>


          {/* bottom Image */}
          <View>
            <View>
              <Text style={{
                fontSize: 25,
                color: 'gray',
                marginVertical: 10,
              }}>
                Best Food
            </Text>
            </View>
            <View style={{
              width: width * .3,
              height: height * .35,
              elevation: 1,

            }}>
              <Image source={require('./images/pizza.jpg')}
                style={{
                  width:width * .94,
                  height:height * .3,
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
        </ScrollView>
        <View style={{
          width: width * 1,
          height: height * .09,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
          <View>
            <TouchableOpacity style={{
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <HomeIcon name='home' size={30} color={'#7c7878'} />
              <View >
                <Text style={{
                  fontSize:10,
                  fontWeight:'bold',
                  color:'#7c7878'
                }}>
                  Home
              </Text>
              </View>
            </TouchableOpacity >
          </View>
          <View>
            <TouchableOpacity style={{
              justifyContent: 'center',
              alignItems: 'center',
              // marginHorizontal:5,
            }}>
              <Nearby name='my-location' size={30} color={'#7c7878'} />
              <View>
                <Text style={{
                  fontSize:10,
                  fontWeight:'bold',
                  color:'#7c7878'
                }}>
                  Near By
              </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={{
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <Cart name='shopping-bag' size={30} color={'#7c7878'} />
              <View>
                <Text style={{
                  fontSize:10,
                  fontWeight:'bold',
                  color:'#7c7878'
                }}>
                  Cart
              </Text>
              </View>
            </TouchableOpacity >
          </View>
          <View>
            <TouchableOpacity style={{
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <Account name='account-outline' size={30} color={'#7c7878'} />
              <View>
                <Text style={{
                  fontSize:10,
                  fontWeight:'bold',
                  color:'#7c7878'
                }}>
                  Account
              </Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffffff7e',
    // padding:10,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  toper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // margin:10,s
  },
  toper_text: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    borderColor: '#918a8a',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,

  },
  search_Input: {
    fontSize: 15,
    // position:'absolute',
    marginLeft: 14,
    width: width * .75,
  },
  serIcon: {
    // position: 'absolute',
    // right: 10,
  },
  mainViewIcons: {
    // padding:10,
    flexDirection: 'row',
  },
  iconOpacity: {
    // width: width * 0.18,
    // height: height * .1,
    marginRight: 10,
    marginVertical: 10,
    width: width * 0.18,
    height: height * .15,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  foodIconView: {
    // borderWidth:1,
    backgroundColor: 'white',
    width: width * .18,
    height: height * .09,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 8,
    shadowColor: '#dd4a30',
    shadowOpacity: .18,
    shadowRadius: 1.00,
    shadowOffset: {
      width: 0,
      height: 1,
    },

  },
  iconText: {
    alignSelf: 'center',

  },
  cardDesign: {
    backgroundColor: 'white',
    width: width * .45,
    height: height * .33,
    // justifyContent: 'center',
    // alignItems: 'center',
    elevation: 3,
    shadowColor: '#dd4a30',
    shadowOpacity: 1,
    shadowRadius: 1.00,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 5,
    // position:'relative',


  },
  sendBottun: {
    backgroundColor: 'white',
    width: width * .07,
    height: height * .04,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    elevation: 3,
    shadowColor: '#dd4a30',
    shadowOpacity: .18,
    shadowRadius: 1.00,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    position: 'relative',
    // top: 10,
  },
  cardText_andSend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 6,
    alignItems: 'center',
  },
  star_aling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 6,
    alignItems: 'center',
    marginTop: 8,
  },
});
export default Home;