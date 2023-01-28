import {Divider, DividerVariant} from '@astrogator/common';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {FC, useCallback, useMemo, useRef} from 'react';
import {Pressable, View} from 'react-native';
import {MagnifierIcon} from '../../../assets/svgs/MagnifierIcon';
import {ShareIcon} from '../../../assets/svgs/ShareIcon';
import {commonStyles} from '../../theming/commonStyles';
import {shareOnInstagramStories} from '../../utils/sharing/shareOnInstagramStories';
import {CustomBottomSheetBackdrop} from '../CustomBottomSheetBackdrop';
import {CustomBottomSheetModalBackground} from '../CustomBottomSheetModalBackground';
import {ImageActionsTabProps} from './ImageActionsTab.props';
import {styles} from './ImageActionsTab.styled';
import ShareMenuTab from './ShareMenuTab/ShareMenuTab';

const ImageActionsTab: FC<ImageActionsTabProps> = ({
  onMagnifierButtonPress,
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '30%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <>
      <View style={styles.actionButtonsWrapper}>
        <Pressable
          style={styles.showMoreButton}
          onPress={() => {
            handlePresentModalPress();
          }}>
          <ShareIcon />
        </Pressable>
        <Divider variant={DividerVariant.Divider_3_Horizontal} />
        <Pressable
          style={styles.showMoreButton}
          onPress={onMagnifierButtonPress}>
          <MagnifierIcon />
        </Pressable>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        handleIndicatorStyle={commonStyles.bottomSheetModalIndicator}
        backdropComponent={props => (
          <CustomBottomSheetBackdrop
            {...props}
            onPress={() => {
              handleCloseModalPress();
            }}
          />
        )}
        backgroundComponent={CustomBottomSheetModalBackground}
        snapPoints={snapPoints}
        enableOverDrag={false}
        enableDismissOnClose={true}>
        <ShareMenuTab
          onInstagramIconPress={async () => {
            await handleCloseModalPress();
            shareOnInstagramStories();
          }}
          onFacebookIconPress={async () => {
            await handleCloseModalPress();
            shareOnInstagramStories();
          }}
          onTelegramIconPress={async () => {
            await handleCloseModalPress();
            shareOnInstagramStories();
          }}
        />
      </BottomSheetModal>
    </>
  );
};

export default ImageActionsTab;
