import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../../../assets/theme/colors";
import styles from "./styles";

const Input = ({
  onChangeText,
  style,
  value,
  label,
  icon,
  iconPosition,
  error,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition === "left") {
      return "row";
    } else if (icon && iconPosition === "right") {
      return "row-reverse";
    }
  };

  const getBorderColor = () => {
    if (focused) return colors.primary;
    if (error) {
      return colors.danger;
    }
    return colors.grey;
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          { alignItems: icon ? "center" : "baseline" },
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}
      >
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
