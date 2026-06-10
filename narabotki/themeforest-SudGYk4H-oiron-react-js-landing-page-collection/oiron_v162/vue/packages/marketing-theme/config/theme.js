// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  sunset: {
    primary: colors.blue.base, // primary main
    primarylight: colors.blue.lighten4, // primary light
    primarydark: colors.blue.darken3, // primary dark
    secondary: colors.amber.base, // secondary main
    secondarylight: colors.amber.lighten4, // secondary light
    secondarydark: colors.amber.darken4, // secondary dark
    accent: colors.cyan.base, // accent main
    accentlight: colors.cyan.lighten4, // accent light
    accentdark: colors.cyan.darken3, // accent dark
    anchor: colors.blue.base, // link
  },
};

const theme = {
  ...palette.sunset,
};

export default theme;
