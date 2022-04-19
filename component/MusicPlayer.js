import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from "react-native";
import React,{useEffect,useRef,useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { shadowOffset } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Slider from "@react-native-community/slider";
import styles from "./style";
import songs from "../model/data";
const { width, height } = Dimensions.get("window");
export default function MusicPlayer() {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [songIndex, setSongIndex] = useState(0)
    const songSlider = useRef(null)
    useEffect(()=>{
        scrollX.addListener(({value})=>{
            // console.log('Scroll X',scrollX)
            // console.log('Device Width',width)
            const index = Math.round(value/width)
            setSongIndex(index)
            // console.log('Indx: ', index)
        });
        return()=>{
          scrollX.removeAllListeners()
        }
    },[]);
    const skipToNext = () =>{
      songSlider.current.scrollToOffset({
        offset: (songIndex+1)*width
      })
    }
    const skipToPrevious = () =>{
      songSlider.current.scrollToOffset({
        offset: (songIndex-1)*width
      })
    }
  const renderSongs = ({ index, item }) => {
    return (
      <View style = {styles.artworkScroll}>
        <View style={styles.artworkWrapper}>
          <Image source={item.image} style={styles.artworkImage} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.mainContainer}>
        <View style = {{width: width,}}>
        <Animated.FlatList
          ref={songSlider}
          data={songs}
          renderItem={renderSongs}
          keyExtractor={(item)=>item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll = {Animated.event(
              [{nativeEvent:{
                  contentOffset: {x:scrollX}
              }}],
              {useNativeDriver: true}
          )}
        />
        </View>
        <View>
          <Text style={styles.title}>{songs[songIndex].title}</Text>
          <Text style={styles.artist}>{songs[songIndex].artist}</Text>
        </View>
        <View>
          <Slider
            style={styles.progressContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#FFF"
            onSlidingComplete={() => {}}
          />
          <View style={styles.progressLabelContainer}>
            <Text style={styles.progressLabelTxt}>0:0011</Text>
            <Text style={styles.progressLabelTxt}>3:55</Text>
          </View>
        </View>
        <View style={styles.musicControlls}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="play-skip-back-outline"
              size={35}
              color="#FFD369"
              style={{ marginTop: 25 }}
              onPress = {skipToPrevious}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-pause-circle" size={75} color="#FFD369" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              color="#FFD369"
              style={{ marginTop: 25 }}
              onPress = {skipToNext}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControl}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="share-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ellipsis-horizontal" size={30} color="#777777" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
