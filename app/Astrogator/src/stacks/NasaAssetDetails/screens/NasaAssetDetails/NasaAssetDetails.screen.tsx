import {
  Divider,
  DividerVariant,
  MobilePlatform,
  SafeImage,
  Typography,
} from '@astrogator/common';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {FC, useCallback, useRef} from 'react';
import {Platform, ScrollView, StatusBar, View} from 'react-native';
import {BackButton} from '../../../../components/BackButton';
import {CustomBottomSheetBackdrop} from '../../../../components/CustomBottomSheetBackdrop';
import {CustomBottomSheetModalBackground} from '../../../../components/CustomBottomSheetModalBackground';
import {ApodModal} from '../../../../components/HomeTileModal';
import NasaAssetItemModal from '../../../../components/NasaAssetItemModal/NasaAssetItemModal';
import {commonStyles} from '../../../../theming/commonStyles';
import {getBottomModalSnapPoint} from '../../../../utils/getBottomModalSnapPoint';
import {
  NasaAssetDetailsStackNavigationProp,
  NasaAssetDetailsStackParamList,
} from '../../NasaAssetDetails.routes';
import {styles} from './NasaAssetDetails.styled';

const NasaAssetDetailsScreen: FC = () => {
  const navigation = useNavigation<NasaAssetDetailsStackNavigationProp>();

  const route =
    useRoute<
      RouteProp<NasaAssetDetailsStackParamList, 'NasaAssetDetailsScreen'>
    >();

  const {nasaAssetItem} = route.params;

  console.log(nasaAssetItem);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const nasaAssetItemDescriptionArray =
    nasaAssetItem.data[0].description.split(' ');

  return (
    <>
      <StatusBar hidden translucent={true} showHideTransition={'fade'} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.apodHeader}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <SafeImage
          source={{
            uri: nasaAssetItem.links[0].href,
          }}
          defaultSource={require('../../../../../assets/images/apod-tile.webp')}
          imageStyle={styles.image}
          imageWrapperStyle={styles.imageWrapper}
        />
        <Typography style={styles.title}>
          {nasaAssetItem.data[0].title}
        </Typography>
        <View style={styles.subheader}>
          <View style={styles.imageInfoWrapper}>
            <Typography style={styles.subheaderText}>
              Author: {nasaAssetItem.data[0].secondary_creator || '-'}
            </Typography>
            <Divider variant={DividerVariant.Divider_2_Vertical} />
            <Typography style={styles.subheaderText}>
              Date: {nasaAssetItem.data[0].date_created}
            </Typography>
          </View>
        </View>
        <Typography style={styles.explanation} ellipsizeMode={'clip'}>
          {nasaAssetItemDescriptionArray
            .slice(0, Platform.OS === MobilePlatform.Android ? 70 : 90)
            .join(' ')}{' '}
          {((Platform.OS === MobilePlatform.IOS &&
            nasaAssetItemDescriptionArray.length >= 90) ||
            (Platform.OS === MobilePlatform.Android &&
              nasaAssetItemDescriptionArray.length >= 70)) && (
            <Typography
              onPress={handlePresentModalPress}
              style={styles.readMoreButton}>
              read more...
            </Typography>
          )}
        </Typography>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          handleIndicatorStyle={commonStyles.bottomSheetModalIndicator}
          backdropComponent={props => (
            <CustomBottomSheetBackdrop
              {...props}
              onPress={handleCloseModalPress}
            />
          )}
          backgroundComponent={CustomBottomSheetModalBackground}
          snapPoints={[
            getBottomModalSnapPoint(nasaAssetItem.data[0].description.length),
          ]}
          enableOverDrag={false}
          enableDismissOnClose={true}>
          <ApodModal
            title={nasaAssetItem.data[0].title}
            description={nasaAssetItem.data[0].description}
          />
        </BottomSheetModal>
      </ScrollView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        handleIndicatorStyle={commonStyles.bottomSheetModalIndicator}
        backdropComponent={props => (
          <CustomBottomSheetBackdrop
            {...props}
            onPress={handleCloseModalPress}
          />
        )}
        backgroundComponent={CustomBottomSheetModalBackground}
        snapPoints={[
          getBottomModalSnapPoint(nasaAssetItem.data[0]?.description.length),
        ]}
        enableOverDrag={false}
        enableDismissOnClose={true}>
        <NasaAssetItemModal nasaAssetItemData={nasaAssetItem.data[0]!} />
      </BottomSheetModal>
    </>
  );
};

export default NasaAssetDetailsScreen;
