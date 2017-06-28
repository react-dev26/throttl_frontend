import colors from 'styles/colors';

export default {
  textInfoStyle: {
    desktop: {
      flex: 2,
    },
    mobile: {
      marginLeft: 60,
    },
  },
  container: {
    desktop: {
      display: 'flex',
      marginTop: 60,
    },
    mobile: {
      marginTop: 30,
    },
  },
  titleText: {
    backgroundColor: 'white',
    color: colors.detailTextColor,
    marginLeft: 60,
    fontSize: 32,
    fontFamily: 'sans-serif',
    letterSpacing: -0.8,
    flex: 1,
  },
  color: colors.detailTextColor,
};
