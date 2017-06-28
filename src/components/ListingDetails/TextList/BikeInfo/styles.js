import colors from 'styles/colors';

export default {
  container: {
    desktop: {
      display: 'flex',
      marginTop: 30,
    },
    mobile: {
      marginTop: 20,
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
  textInfoStyle: {
    desktop: {
      flex: 2,
    },
    mobile: {
      marginLeft: 60,
    },
  },
};
