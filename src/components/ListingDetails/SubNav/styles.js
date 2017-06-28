import colors from 'styles/colors';

export default {
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    height: 44,
    justifyContent: 'center',
  },
  wrapper: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 30,
  },
  colors: {
    color: colors.detailTextColor,
  },
  widget: {
    float: 'right',
  },
  addStyle: {
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  lowerRightBtn: {
    position: 'fixed',
    right: 10,
    bottom: 10,
  },
  hiddenBtn: {
    display: 'none',
  },
};
