import colors from 'styles/colors';

export default {
  container: {
    scrollbarFaceColor: 'ThreeDFace',
    scrollbarShadowColor: 'ThreeDDarakShadow',
    scrollbarHighlistingColor: 'ThreeDDarkShadow',
    backgroundColor: colors.primary,
    textAlign: 'center',
    desktop: {
    },
    mobile: {
    },
  },
  titleStyle: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    display: 'flex',
  },
  navBar: {
    color: 'white',
    padding: 12,
    cursor: 'pointer',
  },
  login: {
    marginTop: 20,
    marginBottom: 50,
    width: 200,
    height: 50,
    borderRadius: 5,
  },
  cancel: {
    marginTop: 20,
    color: 'white',
  },
  menuStyle: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  text: {
    textTransform: 'uppercase',
    color: 'white',
    desktop: {
      marginTop: 60,
    },
    mobile: {
      marginTop: 30,
    },
  },
  simpleText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 2,
    desktop: {
      marginTop: 100,
    },
    mobile: {
      marginTop: 50,
    },
  },
  link: {
    textDecorationLine: 'none',
  },
  supportLink: {
    textDecorationLine: 'none',
    color: 'white',
    marginLeft: '0.5em',
  },
  colors: {
    color: 'white',
  },
  thumbStyle: {
    backgroundColor: colors.detailTextColor,
  },
};
