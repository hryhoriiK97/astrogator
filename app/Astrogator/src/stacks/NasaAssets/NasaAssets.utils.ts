export const getBottomModalSnapPoint = (
  descriptionLength: number | undefined,
): string => {
  if (!descriptionLength) return '20%';
  if (descriptionLength <= 180) {
    return '35%';
  } else if (descriptionLength <= 450) {
    return '45%';
  } else if (descriptionLength <= 700) {
    return '65%';
  } else {
    return '90%';
  }
};
