import {Divider, DividerVariant, HomeTile} from '@astrogator/common';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import ApodTile from '../../../assets/images/apod-tile.webp';
import MarsRoverImage from '../../../assets/images/mars-rover-bg.webp';
import NasaTileImage from '../../../assets/images/nasa-tile.webp';
import {CustomBottomSheetBackdrop} from '../../components/CustomBottomSheetBackdrop';
import {CustomBottomSheetModalBackground} from '../../components/CustomBottomSheetModalBackground';
import {HomeTileModal} from '../../components/HomeTileModal';
import NasaTile from '../../components/NasaTile/NasaTIle';
import {
  HomeTileName,
  HomeTilesTexts,
  TileDescription,
} from '../../constants/HomeTilesTexts/HomeTilesTexts';
import {commonStyles} from '../../theming/commonStyles';
import {MarsRoversStackRoutes} from '../MarsRovers/MarsRovers.routes';
import {NasaAssetsStackRoutes} from '../NasaAssets/NasaAssets.routes';
import {NasaImagesStackRoutes} from '../NasaImages/NasaImages.routes';
import {RootStackNavigationProp, RootStackRoutes} from '../Root/Root.routes';
import {HomeStackRoutes} from './Home.routes';
import {styles} from './Home.styled';

const HomeScreen: FC = () => {
  const {navigate} = useNavigation<RootStackNavigationProp>();

  const [selectedTileDescription, setSelectedTileDescription] =
    useState<TileDescription | null>(null);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['35%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <View style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <HomeTile
          title={'APOD'}
          imageSource={Image.resolveAssetSource(ApodTile)}
          onPress={() => {
            navigate(RootStackRoutes.HomeStack, {
              screen: HomeStackRoutes.ApodStack,
            });
          }}
          onLongPress={() => {
            setSelectedTileDescription(HomeTilesTexts[HomeTileName.Apod]);
            handlePresentModalPress();
          }}
        />
        <Divider variant={DividerVariant.Divider_15_Vertical} />
        <HomeTile
          title={'Mars Images'}
          imageSource={Image.resolveAssetSource(MarsRoverImage)}
          onPress={() => {
            navigate(RootStackRoutes.MarsRoversStack, {
              screen: MarsRoversStackRoutes.MarsRoversScreen,
            });
          }}
          onLongPress={() => {
            setSelectedTileDescription(
              HomeTilesTexts[HomeTileName.MarsRoverPhotos],
            );
            handlePresentModalPress();
          }}
        />
        <Divider variant={DividerVariant.Divider_15_Vertical} />
        <NasaTile
          imageSource={Image.resolveAssetSource(NasaTileImage)}
          onPress={() => {
            navigate(RootStackRoutes.NasaAssetsStack, {
              screen: NasaAssetsStackRoutes.NasaImagesStack,
              params: {
                screen: NasaImagesStackRoutes.NasaImagesScreen,
              },
            });
          }}
          onLongPress={() => {
            setSelectedTileDescription(
              HomeTilesTexts[HomeTileName.MarsRoverPhotos],
            );
            handlePresentModalPress();
          }}
        />
      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        backdropComponent={props => (
          <CustomBottomSheetBackdrop
            {...props}
            onPress={handleCloseModalPress}
          />
        )}
        backgroundComponent={CustomBottomSheetModalBackground}
        handleIndicatorStyle={commonStyles.bottomSheetModalIndicator}
        snapPoints={snapPoints}
        enableOverDrag={false}
        enableDismissOnClose={true}>
        <HomeTileModal {...selectedTileDescription!} />
      </BottomSheetModal>
    </View>
  );
};

export default HomeScreen;
