export default {
  toDemical(value, digit) {
    const v = parseFloat(value);
    if (isNaN(v)) return '';
    const demicalCount = digit || 2;
    const basePow = Math.pow(10, demicalCount);
    let rawValue = (Math.round(v * basePow) / basePow).toString();
    let rs = rawValue.indexOf('.');
    if (rs < 0) {
      rs = rawValue.length;
      rawValue += '.';
    }
    while (rawValue.length <= rs + demicalCount) rawValue += '0';
    return rawValue.substr(0, rs + demicalCount + 1);
  },
};
