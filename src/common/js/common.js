import numeral from "numeral";

export { najax } from "./nativeAjax.js";

import nativeClassExtend from "./nativeClassExtend.js";


export { config } from "../../config/env.js";

export var $c = {
  pageInit: function () {
    // this.loadRem();

    this.initTapParam();

    nativeClassExtend();

    this.GetUrlParms();

    this.entryUrlCheck();

    // window.addEventListener("load", () => {
    //   var div_global_loading = document.querySelector(".div_loading_c");
    //   div_global_loading &&
    //     div_global_loading.remove &&
    //     div_global_loading.remove();
    // });
  },
  entryUrlCheck: function () {
    if (typeof this.args["entryUrl"] != "undefined") {
      sessionStorage &&
        sessionStorage.setItem("currentPagePath", this.args["entryUrl"]);
      window.history.replaceState(
        null,
        document.URL.replace(/\?entryUrl=([/\w]+)/, "#")
      );
    }
  },
  GetUrlParms: function () {
    var args = new Object();
    var query = location.search.substring(1);
    var pairs = query.split("&");
    for (var i = 0; i < pairs.length; i++) {
      var pos = pairs[i].indexOf("=");
      if (pos == -1) continue;
      var argname = pairs[i].substring(0, pos);
      var value = pairs[i].substring(pos + 1);
      args[argname] = decodeURI(value);
    }
    this.args = args;
  },
  initTapParam: function () {
    var isMobile = "ontouchstart" in window ? true : false;
    this.isMobile = isMobile;
    this.tapstart = isMobile ? "touchstart" : "mousedown";
    this.tapmove = isMobile ? "touchmove" : "mousemove";
    this.tapend = isMobile ? "touchend" : "mouseup";
  },

  tapClick: function (el, clickCallback) {
    var startTime;

    el.addEventListener(this.tapstart, function () {
      startTime = new Date().getTime();
    });

    var that = this;
    el.addEventListener(this.tapend, function (e) {
      if (new Date().getTime() - startTime < 300) {
        clickCallback && clickCallback.call(that, e);
      }
    });
  },

  filterArr: function (arr, propertyName, propertyValue, type) {
    var index = -1;

    arr = arr.some(function (item, itemIndex) {
      index = itemIndex;
      return item[propertyName] == propertyValue;
    });

    return type == "Array" ? arr : index;
  },

  s_toast(msg, position, isIcon) {
    var opt = {
      message: msg,
      position: position || "top",
    };
    if (isIcon) {
      opt.iconClass = "glyphicon glyphicon-exclamation-sign";
    }
    Toast(opt);
  },
  exportRaw(name, data) {
    var urlObject = window.URL || window.webkitURL || window;
    var export_blob = new Blob([data]);
    var save_link = document.createElementNS(
      "http://www.w3.org/1999/xhtml",
      "a"
    );
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    fakeClick(save_link);
  },
};

function fakeClick(obj) {
  var ev = document.createEvent("MouseEvents");
  ev.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  obj.dispatchEvent(ev);
}

$c.pageInit();

export const sqlWhereEnCode = (str) => {
  var s = "";
  if (str.length == 0) return "";
  s = str.replace(/ /g, "gkKog");
  s = s.replace(/and/g, "BE5D5D");
  s = s.replace(/or/g, "E81C4E");
  s = s.replace(/=/g, "HdDh");
  s = s.replace(/\'/g, "dHy");
  s = s.replace(/<>/g, "BNYD");

  s = s.replace(/\(/g, "4782e8");
  s = s.replace(/\)/g, "c1dcda");
  s = s.replace(/>/g, "8e7dd5");
  s = s.replace(/</g, "3e4410");

  return s;
};

export const myHTMLDeCode = (str) => {
  var s = "";
  if (str.length == 0) return "";
  s = str.replace(/&amp;/g, "&");
  s = s.replace(/&lt;/g, "<");
  s = s.replace(/&gt;/g, ">");
  s = s.replace(/&nbsp;/g, " ");
  s = s.replace(/&#39;/g, "'");
  s = s.replace(/&quot;/g, '"');
  s = s.replace(/<br>/g, "\n");
  return s;
};

export const myHTMLEnCode = (str) => {
  var s = "";
  if (str.length == 0) return "";
  s = str.replace(/&/g, "&amp;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/ /g, "&nbsp;");
  s = s.replace(/\'/g, "&#39;");
  s = s.replace(/\"/g, "&quot;");
  s = s.replace(/\n/g, "<br>");
  return s;
};

export const formatUnits = (size) => {
  if (isNaN(size) || size == null) {
    size = 0;
  }

  if (size <= 0) {
    return "";
  }
  var t1 = (size / 1024).toFixed(2);
  if (t1 < 0) {
    return "0KB";
  }

  if (t1 > 0 && t1 < 1024) {
    return t1 + "KB";
  }

  var t2 = (t1 / 1024).toFixed(2);
  if (t2 < 1024) return t2 + "MB";

  return (t2 / 1024).toFixed(2) + "GB";
};

export const getTimeTo = (time, _this) => {
  if (!time) {
    return "";
  }
  if (!_this.$i18n) {
    return time;
  }
  var createDate = new Date(Date.parse(time.replace(/-/g, "/")));
  var nowDate = new Date();
  var m = parseInt(Math.abs(nowDate - createDate) / 1000 / 60);
  if (m < 60) {
    if (m < 1) {
      let s = parseInt(Math.abs(nowDate - createDate) / 1000);
      if (s < 1) return _this.$t("just");
      return (
        parseInt(Math.abs(nowDate - createDate) / 1000) +
        " " +
        _this.$t("second_ago")
      );
    } else {
      return m + " " + _this.$t("minutes_ago");
    }
  } else {
    var todayHourMin =
      Number(nowDate.getHours()) * 60 + Number(nowDate.getMinutes());
    if (m < todayHourMin) {
      return Number(Math.abs(m / 60)).toFixed(0) + " " + _this.$t("hours_ago");
    } else if (m > todayHourMin && m < Number(todayHourMin) + 24 * 60) {
      return _this.$t("yesterday") + " " + TimeToHourMin(time);
    } else if (createDate.getFullYear() == nowDate.getFullYear()) {
      var month =
        (createDate.getMonth() + 1 + "").length > 1
          ? createDate.getMonth() + 1
          : "0" + (createDate.getMonth() + 1);
      var day =
        (createDate.getDate() + "").length > 1
          ? createDate.getDate()
          : "0" + createDate.getDate();
      return time;
    } else {
      return time;
    }
  }
  function timeToShortTime(dateTimeStr) {
    if (dateTimeStr.indexOf(" ") > -1) {
      var arr = dateTimeStr.split(" ");
      return arr[1];
    } else {
      return dateTimeStr;
    }
  }

  function TimeToHourMin(dateTimeStr) {
    if (dateTimeStr.indexOf(" ") > -1) {
      var arr = dateTimeStr.split(" ");
      return arr[1].substring(0, arr[1].length - 3);
    } else {
      return dateTimeStr;
    }
  }
};

export const containerHeightOverflowFormat = (elItems, height) => {
  var currentDiv;
  for (var i = 0; i < elItems.length; i++) {
    currentDiv = elItems[i];
    while (currentDiv.offsetHeight > height) {
      currentDiv.innerText = currentDiv.innerText.replace(
        /(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/,
        "..."
      ); //(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/
    }
  }
};

export const getElPostion = (current_el, p_el) => {
  var pos = {
    left: 0,
    top: 0,
  };

  while (current_el != p_el) {
    pos.left += current_el.offsetLeft;
    pos.top += current_el.offsetTop;
    current_el = current_el.parentNode;
  }

  return pos;
};

export const secondFormatDuration = (s) => {
  var timeText = "";
  s = parseInt(s);
  var h = parseInt(s / (60 * 60));
  if (h > 0) {
    timeText += numFormatDoubleDigit(h) + ":";
  }
  s = s % (60 * 60);
  var m = parseInt(s / 60);
  // if(m>0){
  timeText += numFormatDoubleDigit(m) + ":";
  //}
  s = s % 60;
  timeText += numFormatDoubleDigit(s);
  return timeText;
};

export const numFormatDoubleDigit = (num) => {
  return (num + "").length > 1 ? num : "0" + num;
};

export const format_number = (number, decimals = 0, trailing_zeros = true) => {
  if (
    isNaN(number) ||
    !isFinite(number) ||
    number === undefined ||
    number === null
  )
    return "";
  let zeros = ".";
  for (let i = 0; i < decimals; i++) {
    zeros += "0";
  }
  let num = numeral(number).format("0,0" + zeros);
  if (num.indexOf(".") > 0 && !trailing_zeros)
    return num.replace(/0+$/, "").replace(/\.$/, "");
  return num;
};

export const getFullNum = (num, precision) => {
  if (isNaN(num)) {
    console.log(1111111);
    return num;
  }
  if (precision && precision != 0) num = num / Math.pow(10, precision);
  var str = "" + num;
  if (!/e/i.test(str)) {
    return num;
  }

  num = num.toFixed(18).replace(/\.?0+$/, "");
  console.log('num', num)
  return num;
};

export const scientificNotationToString = (param) => {
  let strParam = String(param)
  let flag = /e/.test(strParam)
  if (!flag) return param

  let sysbol = true
  if (/e-/.test(strParam)) {
    sysbol = false
  }
  let index = Number(strParam.match(/\d+$/)[0])
  let basis = strParam.match(/^[\d\.]+/)[0].replace(/\./, '')

  if (sysbol) {
    return basis.padEnd(index + 1, 0)
  } else {
    return basis.padStart(index + basis.length, 0).replace(/^0/, '0.')
  }
}

export const toFixed = (num, precision = 8) => {
  return (Number(Number(num).toFixed(precision)));
};

export const getBase64Image = (file, quality = 0.8, maxWidth = 1080) => {
  let blob = isSupportcreateObjectURL(file);
  var img = new Image();
  img.src = blob;

  return new Promise((resolve) => {
    img.onload = function () {
      var quality = 1;

      var base64 = "";

      var w = this.width,
        h = this.height,
        scale = w / maxWidth;

      if (w > maxWidth) {
        w = maxWidth;
        h = h / scale;
      }

      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(this, 0, 0, w, h);
      base64 = canvas.toDataURL("image/png", quality);
      resolve(base64);
    };
  });
};

const isSupportcreateObjectURL = (file) => {
  if (window.URL) {
    return window.URL.createObjectURL(file);
  } else if (window.webkitURL) {
    return window.webkitURL.createObjectURL(file);
  } else {
    return null;
  }
};

export const debounce = (func, wait) => {
  let lastTime = null;
  let timeout;
  return function () {
    let context = this;
    let now = new Date();
    if (now - lastTime - wait > 0) {
      timeout = setTimeout(() => {
        func.apply(context, arguments);
      }, wait);
    } else {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        func.apply(context, arguments);
      }, wait);
    }
    lastTime = now;
  };
};
export const getDecimals = (num) => {
  let num_str = getFullNum(num);
  if (typeof num_str != "string") {
    return 0;
  }
  if (num_str.indexOf(".") != -1) {
    return num_str.split(".")[1].length;
  }

  return 0;
};

export const add_sum = (arg1, arg2) => {
  var r1, r2, m;

  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }

  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }

  m = Math.pow(10, Math.max(r1, r2));

  return (arg1 * m + arg2 * m) / m;
};

export const accSub = (num1, num2) => {
  let r1;
  let r2;

  num1 = scientificNotationToString(num1);
  num2 = scientificNotationToString(num2);

  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  const m = Math.pow(10, Math.max(r1, r2));
  const n = r1 >= r2 ? r1 : r2;
  return (Math.round(num1 * m - num2 * m) / m).toFixed(n);
};

export const validateForm = (form) => {
  for (let key in form) {
    if (!form[key]) return [false, key];
  }
  return [true]
};

export const isformValidatePass = (formKey, _this) => {
  return new Promise((resolve) => {
    _this.$refs[formKey].validate((valid) => {
      resolve(valid);
    });
  });
};


function isInteger(obj) {
  return Math.floor(obj) === obj
}


export const formatScale = (a, b) => {

  function min(first, second) {
    if (first < second) {
      return first
    }
    else { return second };
  }


  if (isInteger(Number(a)) && isInteger(Number(b))) {
    return a + ":" + b;
  }
  let minValue = min(a, b);
  if (minValue == 0) {
    minValue = b;
  }
  minValue = scientificNotationToString(minValue);
  let powLength = ((minValue.toString().split("."))[1]).length;
  return a.mul(Math.pow(10, powLength)) + ":" + b.mul(Math.pow(10, powLength));
}
export default $c;
