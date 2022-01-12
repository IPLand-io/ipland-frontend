
export default function () {
  Date.prototype.format = function (format) {
    var o = {
      "M+": this.getMonth() + 1, // month
      "d+": this.getDate(), // day
      "H+": this.getHours(), // hour
      "m+": this.getMinutes(), // minute
      "s+": this.getSeconds(), // second
      "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
      "S": this.getMilliseconds()
      // millisecond
    }
    if (/(y+)/.test(format))
      format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  }

  Date.prototype.addDate = function (strInterval, Number) {
    var dtTmp = this;
    switch (strInterval) {
      case 's':
        return new Date(dtTmp.getTime() + (1000 * Number));
      case 'n':
        return new Date(dtTmp.getTime() + (60000 * Number));
      case 'h':
        return new Date(dtTmp.getTime() + (3600000 * Number));
      case 'd':
        return new Date(dtTmp.getTime() + (86400000 * Number));
      case 'w':
        return new Date(dtTmp.getTime() + ((86400000 * 7) * Number));
      case 'q':
        return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
      case 'm':
        return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
      case 'y':
        return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
    }
  };

  String.prototype.colorRgb = function () {
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

    var sColor = this.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        var sColorNew = "#";
        for (var i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      var sColorChange = [];
      for (var i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      return "RGB(" + sColorChange.join(",") + ")";
    } else {
      return sColor;
    }
  };
  window.Element && function (ElementPrototype) {
    ElementPrototype.matches = ElementPrototype.matches ||
      ElementPrototype.matchesSelector ||
      ElementPrototype.webkitMatchesSelector ||
      ElementPrototype.msMatchesSelector ||
      function (selector) {
        var node = this, nodes = (node.parentNode || node.document).querySelectorAll(selector), i = -1;
        while (nodes[++i] && nodes[i] != node);
        return !!nodes[i];
      }
  }(Element.prototype);

  window.Element && function (ElementPrototype) { ElementPrototype.closest = ElementPrototype.closest || function (selector) { var el = this; while (el.matches && !el.matches(selector)) el = el.parentNode; return el.matches ? el : null; } }(Element.prototype);

}


function accDiv(arg1, arg2) {
  var t1 = 0, t2 = 0, r1, r2;
  try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
  try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
  // with (Math) {
  //     r1 = Number(arg1.toString().replace(".", ""))
  //     r2 = Number(arg2.toString().replace(".", ""))
  //     return (r1 / r2) * pow(10, t2 - t1);
  // }
  r1 = Number(arg1.toString().replace(".", ""))
  r2 = Number(arg2.toString().replace(".", ""))
  return (r1 / r2) * Math.pow(10, t2 - t1);
}

Number.prototype.div = function (arg) {
  return accDiv(this, arg);
}
String.prototype.div = function (arg) {
  return accDiv(this, arg);
}


function accMul(arg1, arg2) {
  var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
  try { m += s1.split(".")[1].length } catch (e) { }
  try { m += s2.split(".")[1].length } catch (e) { }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

Number.prototype.mul = function (arg) {
  return accMul(arg, this);
}
String.prototype.mul = function (arg) {
  return accMul(arg, this);
}
