export const getBottomModalSnapPoint = (
  descriptionLength: number | undefined
): string => {
  if (!descriptionLength) return "20%";
  if (descriptionLength <= 180) {
    return "45%";
  } else if (descriptionLength <= 450) {
    return "55%";
  } else if (descriptionLength <= 820) {
    return "75%";
  } else if (descriptionLength <= 1020) {
    return "90%";
  } else {
    return "95%";
  }
};
