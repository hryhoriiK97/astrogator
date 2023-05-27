export interface MarsPhotosGalleryHeaderProps {
  onGoBackButtonPress: () => void;
  onSettingsModalPress: () => void;
  date: string;
  photosCount: number;
  roverName?: string;
  isFullListButtonDisabled?: boolean;
  onFullListPress?: () => void;
}
