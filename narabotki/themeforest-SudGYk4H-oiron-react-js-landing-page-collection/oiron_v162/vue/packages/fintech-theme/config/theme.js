// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  money: {
    primary: colors.green.base, // primary main
    primarylight: colors.green.lighten4, // primary light
    primarydark: colors.green.darken3, // primary dark
    secondary: colors.amber.darken2, // secondary main
    secondarylight: colors.amber.lighten4, // secondary light
    secondarydark: colors.amber.darken4, // secondary dark
    accent: colors.blue.base, // secondary main
    accentlight: colors.blue.lighten4, // secondary light
    accentdark: colors.blue.darken4, // secondary dark
    anchor: colors.green.base, // link
  },
};

const theme = {
  ...palette.money,
};

export default theme;
