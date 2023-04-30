import React, { FC } from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

interface ExploreIconProps {
  fillColor: SvgProps["fill"];
}

export const ExploreIcon: FC<ExploreIconProps> = ({ fillColor }) => {
  return (
    <Svg width="20" height="22" viewBox="0 0 20 22" fill="none">
      <Path
        d="M19.3361 2.4535C18.8404 1.24371 17.6787 0.459758 16.3706 0.455391C15.947 0.0295651 15.2919 -0.1364 14.6499 0.125647C14.2634 0.282875 13.9598 0.584228 13.796 0.970746C13.7305 1.12797 13.6912 1.29394 13.6803 1.46208L4.19639 6.04135C3.91032 6.17893 3.78148 6.51522 3.90159 6.81003L4.05882 7.19654L2.29874 7.91717C1.93405 7.62892 1.42743 7.53283 0.933909 7.73374C0.599799 7.87131 0.337754 8.129 0.197995 8.46311C0.0582371 8.79721 0.0560525 9.16408 0.193627 9.49819L0.735189 10.8259C0.944827 11.3369 1.43617 11.6688 1.98865 11.6688C2.16553 11.6688 2.33804 11.6339 2.51493 11.5618C2.84903 11.4242 3.11108 11.1665 3.25084 10.8324C3.29888 10.7189 3.32945 10.601 3.34474 10.483L5.10919 9.76242L5.25113 10.1118C5.34503 10.3433 5.56995 10.4874 5.80798 10.4874C5.86912 10.4874 5.93463 10.4765 5.99796 10.4547L9.29975 9.35406V9.83448C8.65337 10.0747 8.1926 10.6992 8.1926 11.4286C8.1926 11.6055 8.21881 11.7758 8.26903 11.9352H7.83229C7.50036 11.9352 7.23176 12.2038 7.23176 12.5357V14.1451C7.23176 14.4771 7.50036 14.7457 7.83229 14.7457H8.96782L5.91061 21.1396C5.76867 21.4388 5.89533 21.7969 6.1945 21.941C6.27748 21.9803 6.36483 22 6.45218 22C6.6771 22 6.8911 21.8733 6.99374 21.6572L9.29975 16.8355V21.3558C9.29975 21.6877 9.56835 21.9563 9.90027 21.9563C10.2322 21.9563 10.5008 21.6877 10.5008 21.3558V16.794L12.8068 21.6157C12.9094 21.8319 13.1235 21.9563 13.3484 21.9563C13.4357 21.9563 13.5231 21.9389 13.6061 21.8996C13.9052 21.7554 14.0319 21.3973 13.8899 21.0981L10.8524 14.7457H11.9683C12.3002 14.7457 12.5688 14.4771 12.5688 14.1451V12.5357C12.5688 12.2038 12.3002 11.9352 11.9683 11.9352H11.5315C11.5817 11.7758 11.6079 11.6055 11.6079 11.4286C11.6079 10.6992 11.1472 10.0747 10.5008 9.83448V8.95226L15.9885 7.1223C16.2702 7.37124 16.6349 7.51536 17.0279 7.51536C17.231 7.51536 17.4319 7.47606 17.6394 7.3909C18.0281 7.23148 18.3316 6.93231 18.4932 6.54579C18.574 6.35581 18.6133 6.15927 18.6155 5.96055C19.5152 5.07396 19.8428 3.69603 19.3361 2.4535ZM2.14369 10.3673C2.13277 10.3935 2.10875 10.4306 2.04761 10.4547C1.9821 10.483 1.8882 10.4721 1.84889 10.3717L1.30514 9.04397C1.28549 8.99593 1.29422 8.95444 1.30514 8.92823C1.31824 8.90203 1.34008 8.86491 1.40341 8.84089C1.42088 8.83215 1.44053 8.82778 1.46019 8.82778C1.50823 8.82778 1.57156 8.85399 1.60213 8.92168L2.14369 10.2516C2.16334 10.2996 2.15461 10.3411 2.14369 10.3673ZM3.0543 9.30383L2.91454 8.96099L4.51303 8.30806H4.51521L4.65497 8.6509L3.0543 9.30383ZM10.4069 11.4286C10.4069 11.7081 10.1798 11.9352 9.90027 11.9352C9.62076 11.9352 9.39365 11.7081 9.39365 11.4286C9.39365 11.2757 9.46353 11.136 9.57271 11.0443C9.66225 10.97 9.7758 10.9242 9.90027 10.9242C10.0247 10.9242 10.1383 10.97 10.2278 11.0443C10.337 11.136 10.4069 11.2757 10.4069 11.4286ZM11.3677 13.1363V13.5446H8.43281V13.1363H11.3677ZM6.15082 9.13787L5.99359 8.75354L5.39962 7.29918H5.39744L5.22711 6.87772L13.986 2.65003L15.3792 6.05882L6.15082 9.13787ZM17.3883 6.07193C17.3883 6.07193 17.3883 6.07848 17.3861 6.08066C17.349 6.1702 17.2769 6.24008 17.1677 6.28593C17.0061 6.35144 16.8227 6.2903 16.7266 6.15491H16.7244C16.7091 6.13089 16.6982 6.10905 16.6873 6.08284L14.9032 1.71758C14.8923 1.69138 14.8857 1.66299 14.8792 1.6346C14.8682 1.56472 14.877 1.49921 14.9032 1.43588C14.9425 1.34416 15.0124 1.27429 15.1237 1.22843C15.1674 1.21096 15.2155 1.20223 15.2613 1.20223C15.3159 1.20223 15.3683 1.21314 15.4142 1.23498C15.4993 1.2721 15.567 1.34198 15.6042 1.43152L17.3883 5.79677C17.4232 5.88631 17.4254 5.98239 17.3883 6.07193ZM18.1722 4.54332L17.041 1.77654C17.5695 1.96216 18.0019 2.36833 18.2246 2.90771C18.4474 3.45583 18.4102 4.04762 18.1722 4.54332Z"
        fill={fillColor}
      />
    </Svg>
  );
};
