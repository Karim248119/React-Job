import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create( {
  container: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,

  },
  headText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontWeight: '800'
  },
  contentBox: {
    marginVertical: SIZES.small,
    marginHorizontal: 10
  },
  contextText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,

    marginVertical: SIZES.small / 1.25,
  },
} );

export default styles;