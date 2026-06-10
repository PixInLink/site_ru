// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  ocean: {
    primary: colors.blue.base, // primary main
    primarylight: colors.blue.lighten4, // primary light
    primarydark: colors.blue.darken4, // primary dark
    secondary: colors.cyan.base, // secondary main
    secondarylight: colors.cyan.lighten4, // secondary light
    secondarydark: colors.cyan.darken4, // secondary dark
    accent: colors.deepPurple.accent3, // accent main
    accentlight: colors.deepPurple.lighten5, // accent light
    accentdark: colors.deepPurple.darken3, // accent dark
    anchor: colors.blue.base, // link
  },
};

const theme = {
  ...palette.ocean,
};

export default theme;
