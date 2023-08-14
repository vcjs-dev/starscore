var r = Object.defineProperty;
var e = (o, t, s) => t in o ? r(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[t] = s;
var n = (o, t, s) => (e(o, typeof t != "symbol" ? t + "" : t, s), s);
class c {
  constructor(t) {
    n(this, "options", {
      container: ""
    });
    this.options = Object.assign(this.options, t);
  }
  render() {
  }
}
const a = (o) => new c(o);
export {
  c as Starscore,
  a as createStarscore
};
