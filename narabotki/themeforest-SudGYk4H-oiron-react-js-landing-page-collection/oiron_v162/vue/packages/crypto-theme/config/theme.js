// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  coinz: {
    primary: colors.purple.base, // primary main
    primarylight: colors.purple.lighten4, // primary light
    primarydark: colors.purple.darken3, // primary dark
    secondary: colors.amber.darken2, // secondary main
    secondarylight: colors.amber.lighten4, // secondary light
    secondarydark: colors.amber.darken4, // secondary dark
    accent: colors.deepPurple.base, // secondary main
    accentlight: colors.deepPurple.lighten4, // secondary light
    accentdark: colors.deepPurple.darken3, // secondary dark
    anchor: colors.purple.accent2, // link
  },
};

const theme = {
  ...palette.coinz,
};

export default theme;
