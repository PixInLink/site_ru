// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  cloud: {
    primary: colors.lightBlue.base, // primary main
    primarylight: colors.lightBlue.lighten4, // primary light
    primarydark: colors.lightBlue.darken4, // primary dark
    secondary: colors.orange.base, // secondary main
    secondarylight: colors.orange.lighten4, // secondary light
    secondarydark: colors.orange.darken4, // secondary dark
    accent: colors.indigo.accent4, // secondary main
    accentlight: colors.indigo.lighten4, // secondary light
    accentdark: colors.indigo.darken4, // secondary dark
    anchor: colors.lightBlue.base, // link
  },
};

const theme = {
  ...palette.cloud,
};

export default theme;
