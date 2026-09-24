import type { ReactElement } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../assets/theme";

export function PageFooter(): ReactElement {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Track it. Check it. Ship it.</Text>
    </View>
  );
}

// styles unchanged