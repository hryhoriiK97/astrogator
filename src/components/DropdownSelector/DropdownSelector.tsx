import React, { FC, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Typography } from "../Typography";
import { styles } from "./DropdownSelector.styled";
import { View } from "react-native";
import { DropdownSelectorProps } from "./DropdownSelector.props";
import { AstrogatorColor } from "../../theming/theme";

const DropdownSelector: FC<DropdownSelectorProps> = ({data, labelText, placeholderText}) => {
    const [value, setValue] = useState<string | null>(null);
    const [isFocus, setIsFocus] = useState(false);
    const renderLabel = () => {
        if (value || isFocus) {
          return (
            <Typography style={[styles.label, isFocus && { color: AstrogatorColor.VenetianNights }]}>
              {labelText}
            </Typography>
          );
        }
        return null;
      };
    return (
        <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: AstrogatorColor.VenetianNights }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? placeholderText : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        //   renderLeftIcon={() => (
        //     <AntDesign
        //       style={styles.icon}
        //       color={isFocus ? 'blue' : 'black'}
        //       name="Safety"
        //       size={20}
        //     />
        //   )}
        />
      </View>
    )
};

export default DropdownSelector;