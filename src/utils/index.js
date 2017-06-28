export const getStyle = (styles, isMoile) =>
  ({ ...styles, ...isMoile ? styles.mobile : styles.desktop });
export const print = console.log;
export const getSpace = styles =>
  ({ ...styles, ...styles.space });
export default{
  print,
  getStyle,
  getSpace,
};
