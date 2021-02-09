/**
 * Ignore some yellowbox warnings. Some of these are for deprecated functions
 * that we haven't gotten around to replacing yet.
 */
import { YellowBox } from "react-native"

// prettier-ignore
YellowBox.ignoreWarnings([
  // Ignore warning until Expo adds support for AsyncStorage outside of react-native core
  "Warning: Async Storage has been extracted from react-native core",
  "Require cycle:"
])
