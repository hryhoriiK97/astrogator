export interface NasaAssetsHeaderProps {
  currentInputValue: string | undefined;
  onInputValueChange: (newValue: string | undefined) => void;
  onSearchButtonPress: () => void;
  headerAnimatedStyle: {
    transform: {
      translateY: number;
    }[];
  };
}
