import colors from 'styles/colors';

export default {
  wrapper: {
    fontFamily: 'sans-serif',
  },
  container: {
    backgroundImage: 'url(https://www.dropbox.com/s/kbyldx4c4qfncax/helmet-close.jpg?dl=1)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    desktop: {
      height: 640,
      padding: '50px 30px',
    },
    mobile: {
      height: 323,
      padding: '80px 48px',
    },
  },
  formTitle: {
    color: colors.fourth,
    desktop: {
      fontSize: 44,
      letterSpacing: -1.6,
    },
    mobile: {
      fontSize: 20,
      letterSpacing: -0.5,
    },
  },
  formContent: {
    letterSpacing: 0,
    desktop: {
      fontSize: 16,
    },
    mobile: {
      fontSize: 11,
    },
  },
  formCustomize: {
    display: 'flex',
    flexDirection: 'column',
    desktop: {
      margin: 0,
    },
    mobile: {
      alignItems: 'center',
      marginTop: 130,
    },
  },
  typeText: {
    border: 0,
    borderRadius: 7,
    desktop: {
      width: 458,
      height: 40,
      paddingLeft: 20,
      fontSize: 15,
    },
    mobile: {
      width: 190,
      height: 32,
      paddingLeft: 12,
      fontSize: 12,
    },
  },
  typeEmail: {
    border: 0,
    borderRadius: 7,
    display: 'flex',
    flexDirection: 'row',
    desktop: {
      marginTop: 20,
      height: 40,
      paddingLeft: 20,
      fontSize: 15,
      width: 278,
    },
    mobile: {
      marginTop: 10,
      height: 32,
      paddingLeft: 12,
      fontSize: 12,
      width: 190,
    },
  },
  bottomStyle: {
    textTransform: 'uppercase',
    backgroundColor: colors.thirdary,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  customSingUp: {
    width: 100,
  },
  itemStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  borderline: {
    border: 1,
    borderStyle: 'solid',
    borderColor: '#7D7D7D',
    desktop: {
      width: 440,
      marginTop: 10,
    },
    mobile: {
      width: '90%',
      marginTop: 20,
    },
  },
  textline: {
    textTransform: 'lowercase',
    opacity: 0.5,
    fontSize: 15,
    color: '#fff',
    letterSpacing: 0,
    cursor: 'pointer',
    desktop: {
      marginTop: 20,
    },
    mobile: {
      marginTop: 10,
      textAlign: 'center',
    },
  },
  emailbox: {
    textTransform: 'lowercase',
    opacity: 0.5,
    fontSize: 15,
    color: '#fff',
    letterSpacing: 0,
    cursor: 'pointer',
  },
  btn: {
    borderRadius: 7,
    textTransform: 'uppercase',
    color: 'white',
    cursor: 'pointer',
    backgroundColor: colors.secondary,
    desktop: {
      fontSize: 15,
      marginTop: 63,
      position: 'absolute',
      marginLeft: 311,
      padding: '12px 36px',
    },
    mobile: {
      marginTop: 10,
      fontSize: 12,
      padding: 14,
    },
  },
};
