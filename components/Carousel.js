import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
   
    "https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg",
    "https://images.picxy.com/cache/2021/3/26/531ad3964d17d19d88e219a803e8ea80.jpg",
    "https://wallpapers.com/images/featured/indian-food-x2tv62mgy6kq4or3.jpg"
   
  ];
  return (
    <View>
       <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
            borderRadius:6,
            width:"94%",
            marginTop:10
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
