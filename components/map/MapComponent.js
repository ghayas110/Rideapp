import React,{useState} from 'react';
import { StyleSheet, View ,Text ,TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapComponent = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const onRegionChange = (newRegion) => {
    setRegion(newRegion);
  };
  return (
    <View style={styles.container}>
    <MapView
      style={styles.map}
      region={region}
      onRegionChangeComplete={onRegionChange}
    >
      <Marker
        coordinate={{ latitude: region.latitude, longitude: region.longitude }}
        title={"Current Location"}
        description={"This is a description"}
      />
    </MapView>
     
  </View>
  );
};

export default MapComponent;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding:15,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  
  
});