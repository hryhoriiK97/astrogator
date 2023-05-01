import React, { FC } from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

interface UFOIconProps {
  fillColor: SvgProps["fill"];
}

export const UFOIcon: FC<UFOIconProps> = ({ fillColor }) => {
  return (
    <Svg width="27" height="22" viewBox="0 0 27 22" fill="none">
      <Path
        d="M1.62566 21.5337L1.39549 21.7638C1.23816 21.9212 1.03422 21.9998 0.827355 21.9998C0.620495 21.9998 0.419461 21.9212 0.262131 21.7638C-0.0496165 21.4521 -0.0496165 20.9451 0.262131 20.6334L0.492293 20.4003C0.806953 20.0886 1.31391 20.0886 1.62566 20.4003C1.94032 20.7121 1.94032 21.2219 1.62566 21.5337Z"
        fill={fillColor}
      />
      <Path
        d="M4.71151 18.9192L3.67113 19.9625C3.53343 20.0977 3.35239 20.1666 3.17389 20.1666C2.9954 20.1666 2.81435 20.0977 2.6792 19.9625C2.40381 19.687 2.40381 19.2432 2.6792 18.9702L3.71958 17.9269C3.99497 17.6539 4.43867 17.6539 4.71151 17.9269C4.98435 18.1998 4.9869 18.6462 4.71151 18.9192Z"
        fill={fillColor}
      />
      <Path
        d="M26.07 21.7668C25.9156 21.9212 25.7087 21.9998 25.5048 21.9998C25.3008 21.9998 25.094 21.9212 24.9366 21.7668L24.7065 21.5337C24.3947 21.2219 24.3947 20.715 24.7065 20.4003C25.0211 20.0886 25.5281 20.0886 25.8398 20.4003L26.07 20.6334C26.3847 20.9451 26.3847 21.4521 26.07 21.7668Z"
        fill={fillColor}
      />
      <Path
        d="M24.2104 19.9595C24.0389 20.0993 23.8092 20.1666 23.5827 20.1666C23.3561 20.1666 23.1264 20.0993 22.9549 19.9595L21.6767 18.9369C21.3304 18.6599 21.3304 18.2095 21.6767 17.9299C22.0262 17.6529 22.5892 17.6529 22.9355 17.9299L24.2104 18.9525C24.5599 19.2295 24.5599 19.6799 24.2104 19.9595Z"
        fill={fillColor}
      />
      <Path
        d="M19.8467 7.51409V6.64536C19.8467 2.9805 16.892 0 13.2588 0H13.1425C9.50933 0 6.55739 2.9805 6.55739 6.64536V7.50571C3.21775 7.98337 0.639648 10.8884 0.639648 14.3885V14.4555C0.639648 15.1315 1.18518 15.6818 1.85809 15.6818H6.55462V15.8913C6.55462 16.8941 7.36322 17.7098 8.35736 17.7098H10.2792V17.7265C10.2792 18.1511 10.6198 18.4947 11.0407 18.4947C11.4616 18.4947 11.8022 18.1511 11.8022 17.7265V17.7098H12.4364V18.1763C12.4364 18.6009 12.777 18.9444 13.1979 18.9444C13.6188 18.9444 13.9594 18.6037 13.9594 18.1791V17.7098H14.5991V17.7265C14.5991 18.1511 14.9397 18.4947 15.3606 18.4947C15.7815 18.4947 16.1221 18.1511 16.1221 17.7265V17.7098H18.0412C19.0353 17.7098 19.8439 16.8941 19.8439 15.8913V15.6818H24.4795C25.1497 15.6818 25.6952 15.1315 25.6952 14.4555V14.3885C25.6952 10.9108 23.1531 8.02248 19.8467 7.51409ZM8.08044 6.64536C8.08044 3.82688 10.3512 1.53634 13.1425 1.53634H13.2588C16.0529 1.53634 18.3236 3.82688 18.3236 6.64536V7.43308H8.08044V6.64536ZM8.35736 16.1734C8.20228 16.1734 8.07767 16.0478 8.07767 15.8913V15.6818H18.3209V15.8913C18.3209 16.0478 18.1963 16.1734 18.0412 16.1734H13.2007M2.16824 14.1455C2.27901 11.6008 4.13712 9.50854 6.55739 9.05881C6.80661 9.01411 7.05861 8.98339 7.31891 8.97501C7.39091 8.97221 7.46291 8.96942 7.53491 8.96942H18.8027C18.8969 8.96942 18.991 8.97221 19.0852 8.97501C19.3455 8.99177 19.5975 9.02249 19.8467 9.06998C22.2337 9.54764 24.0586 11.6259 24.1694 14.1455H2.16824Z"
        fill={fillColor}
      />
      <Path
        d="M15.7663 4.04933C15.633 4.19932 15.4355 4.27767 15.2381 4.27767C15.09 4.27767 14.937 4.2329 14.8135 4.14112C14.0262 3.5658 13.0438 3.68444 13.0339 3.68668C12.6637 3.73817 12.3181 3.5076 12.2589 3.17181C12.2021 2.83602 12.4564 2.52262 12.8266 2.4689C12.8908 2.45994 14.4063 2.25847 15.6651 3.183C15.9563 3.39791 16.0032 3.78518 15.7663 4.04933Z"
        fill={fillColor}
      />
      <Path
        d="M17.1099 6.70346C17.0581 6.71601 17.0091 6.72228 16.9573 6.72228C16.5859 6.72228 16.2547 6.43692 16.1827 6.02299C16.1424 5.80662 16.0963 5.69687 16.0387 5.59966C15.8055 5.19827 15.9178 4.66519 16.2864 4.41119C16.6578 4.15719 17.1474 4.27635 17.3806 4.68087C17.5534 4.9819 17.6657 5.29235 17.7348 5.69373C17.8211 6.16097 17.539 6.61252 17.1099 6.70346Z"
        fill={fillColor}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.88932 11.8936C9.21424 11.8936 9.47763 11.6303 9.47763 11.3053C9.47763 10.9804 9.21421 10.717 8.88932 10.717C8.56443 10.717 8.30102 10.9804 8.30102 11.3053C8.30102 11.6303 8.56441 11.8936 8.88932 11.8936ZM7.97266 11.3053C7.97266 10.7991 8.38306 10.3887 8.88932 10.3887C9.39558 10.3887 9.80599 10.7991 9.80599 11.3053C9.80599 11.8116 9.39556 12.222 8.88932 12.222C8.38309 12.222 7.97266 11.8116 7.97266 11.3053Z"
        fill={fillColor}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.445 11.8936C17.7699 11.8936 18.0333 11.6303 18.0333 11.3053C18.0333 10.9804 17.7699 10.717 17.445 10.717C17.1201 10.717 16.8567 10.9804 16.8567 11.3053C16.8567 11.6303 17.1201 11.8936 17.445 11.8936ZM16.5283 11.3053C16.5283 10.7991 16.9387 10.3887 17.445 10.3887C17.9512 10.3887 18.3617 10.7991 18.3617 11.3053C18.3617 11.8116 17.9512 12.222 17.445 12.222C16.9388 12.222 16.5283 11.8116 16.5283 11.3053Z"
        fill={fillColor}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.1676 11.8936C13.4926 11.8936 13.7559 11.6303 13.7559 11.3053C13.7559 10.9804 13.4925 10.717 13.1676 10.717C12.8428 10.717 12.5793 10.9804 12.5793 11.3053C12.5793 11.6303 12.8427 11.8936 13.1676 11.8936ZM12.251 11.3053C12.251 10.7991 12.6614 10.3887 13.1676 10.3887C13.6739 10.3887 14.0843 10.7991 14.0843 11.3053C14.0843 11.8116 13.6739 12.222 13.1676 12.222C12.6614 12.222 12.251 11.8116 12.251 11.3053Z"
        fill={fillColor}
      />
    </Svg>
  );
};