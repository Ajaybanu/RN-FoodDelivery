import { Alert, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from "expo-location";
import * as LocationGeocoding from "expo-location";
import { SimpleLineIcons } from '@expo/vector-icons';

const Index = () => {
    const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState("fetching your location ...");
    const [data, setData] = useState([]);

    useEffect(() => {
        CheckIfLocationEnabled();
    }, []);

    useEffect(() => {
        if (locationServicesEnabled) {
            GetCurrentLocation();
        }
    }, [locationServicesEnabled]);

    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
            Alert.alert(
                "Location Services not enabled",
                "Please enable your location services to continue",
                [{ text: "OK" }],
                { cancelable: false }
            );
        } else {
            setLocationServicesEnabled(true);
        }
    };

    const GetCurrentLocation = async () => {
        let { status } = await Location.requestBackgroundPermissionsAsync();

        if (status !== "granted") {
            Alert.alert(
                "Permission not granted",
                "Allow the app to use the location service",
                [{ text: "OK" }],
                { cancelable: false }
            );
        }

        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
        });

        let { coords } = location;
        if (coords) {
            const { latitude, longitude } = coords;

            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            });

            const address = await LocationGeocoding.reverseGeocodeAsync({
                latitude,
                longitude,
            });

            const streetAddress = address[0].name;
            let formattedAddress = "";
            for (let item of response) {
                formattedAddress = `${item.name}, ${item?.postalCode}, ${item?.city}`;
            }
            setDisplayCurrentAddress(formattedAddress);
        }
    };

    console.log(displayCurrentAddress);

    return (
        <ScrollView>
            <View>
                <SimpleLineIcons name="location-pin" size={24} color="black" />
                <View>
                    <Text>Delivery To ....</Text>
                    <Text>{displayCurrentAddress}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Index;

const styles = StyleSheet.create({});
