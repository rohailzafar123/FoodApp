import React, { Component } from 'react'
import 'react-native-gesture-handler';
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
import BackIcon from 'react-native-vector-icons/MaterialIcons'
import { SliderBox } from "react-native-image-slider-box";


const { width, height } = Dimensions.get('window');

class Discription extends Component {

    constructor(props) {
        super(props);
        this.state = {
          images: [
            require('../images/zinger.png'),          
            require('../images/zing2.png'),          
            require('../images/zing3.jpg'),          
            require('../images/zing1.jpg'),          

          ]
        };
      }

    //   style={{
    //     width: width * .7,
    //     height: height * .4,
    //     alignSelf:'center',
    //     position:'absolute',
    //     bottom:-10,
    // }}
    render() {
        return (
            <View style={styles.main}>
                <View>
                    <View style={styles.header}>
                        <View   style={{
                            position:'absolute'
                        }}>

                    <SliderBox images={this.state.images}  
                      sliderBoxHeight={250}
                      resizeMethod={'resize'}
                      resizeMode={'cover'}
                      ImageComponentStyle={{ width: '80%',}}
                      dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginTop:40,
                        // marginHorizontal: 10,

                      }}
                      dotColor="red"
                      inactiveDotColor="#90A4AE"
                      paginationBoxVerticalPadding={-70}


                      />
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
                                margin:10,
                            }}>
                                <BackIcon name='arrow-back' size={30} />
                            </TouchableOpacity>
                        </View>
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
    },
    header: {
        width: width * 1,
        height: height * .35,
        backgroundColor:'white'
    },
});
export default Discription;