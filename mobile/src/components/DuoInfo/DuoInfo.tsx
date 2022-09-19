import { ColorValue, Text, View } from "react-native";
import { THEME } from "../../theme";
import { styles } from "./styles";


interface Props {
    label: string;
    value: string;
    colorValue?: ColorValue;
}

export const DuoInfo = ({ label, value, colorValue = THEME.COLORS.TEXT}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>

            <Text style={[styles.value, {color: colorValue}]}>
                {value}
            </Text>
        </View>
    )
}