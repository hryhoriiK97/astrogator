import {Divider, DividerVariant, HomeTile} from '@astrogator/common';
import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import ApodTile from '../../../assets/images/apod-tile.jpg';
import MarsRoverImage from '../../../assets/images/mars-rover-bg.webp';
import {HomeStackNavigationProp, HomeStackRoutes} from './Home.routes';
import {styles} from './Home.styled';

const HomeScreen: FC = () => {
  const {navigate} = useNavigation<HomeStackNavigationProp>();
  return (
    <View style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <HomeTile
          title={'APOD'}
          onMoreInfoPress={console.log}
          headerTitle={'Astronomy Picture of the Day'}
          imageSource={Image.resolveAssetSource(ApodTile)}
          onPress={() => navigate(HomeStackRoutes.ApodStack)}
        />
        <Divider variant={DividerVariant.Divider_15_Vertical} />
        <HomeTile
          title={'Mars Images'}
          onMoreInfoPress={console.log}
          headerTitle={'Mars Rover Images'}
          imageSource={Image.resolveAssetSource(MarsRoverImage)}
          onPress={() => navigate(HomeStackRoutes.ApodStack)}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
