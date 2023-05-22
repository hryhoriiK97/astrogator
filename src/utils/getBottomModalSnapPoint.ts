export const getBottomModalSnapPoint = (
  descriptionLength: number | undefined
): string => {
  if (!descriptionLength) return "20%";
  if (descriptionLength <= 180) {
    return "35%";
  } else if (descriptionLength <= 450) {
    return "45%";
  } else if (descriptionLength <= 820) {
    return "60%";
  } else if (descriptionLength <= 1020) {
    return "90%";
  } else {
    return "95%";
  }
};
