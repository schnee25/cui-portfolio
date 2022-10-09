const birthDay = 20001226;

export const calcAge = (bymd: number) => {
  var t = new Date();
  var ty = t.getFullYear();
  if (ty < 1900) {
    ty += 1900;
  }
  var tm = t.getMonth() + 1;
  var td = t.getDate();
  var tymd = ty * 10000 + tm * 100 + td;
  return Math.floor((tymd - bymd) / 10000);
};
