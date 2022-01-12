
const najax = {
  go: function (obj) {
    var xhr = this.createXmlHttp();
    if (!xhr) {
      alert("Your system or browser does not support XMLHttpRequest objects");
      return;
    }

    //  var _user=window.localStorage.getItem("userData");
    //  if(_user){
    //     _user=JSON.parse(_user);
    //     obj.data.token = encodeURIComponent(_user.token);
    //  }
    if (obj.method == "get") {
      obj.url += (obj.url.indexOf("?") >= 0 ? "&" : "?") + ("rand=" + Math.random() * 10);
    }

    if (obj.data) {
      obj.data = this.urlParamsFormat(obj.data);
      if (obj.method === "get") {
        obj.url += "&" + obj.data;
      }
    }
    obj.async = typeof obj.async == "undefined" ? true : obj.async;
    obj.method = typeof obj.method == "undefined" ? "get" : obj.method;

    xhr.open(obj.method, obj.url, obj.async);
    if (obj.reqHeaders) {
      for (let key in obj.reqHeaders) {
        xhr.setRequestHeader(key, obj.reqHeaders[key]);
      }
    }
    if (obj.method === "post") {
      //  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      //  xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(obj.data);
    } else {
      xhr.send(null);
    }

    if (obj.async) {
      xhr.onreadystatechange = function () {
        //   console.info("xhr.readyState:"+xhr.readyState);
        if (xhr.readyState == 4) {
          callBack();
        }
      }
    } else {
      callBack();
    }

    function callBack() {
      if (xhr.status == 200) {
        var data = xhr.responseText;
        obj.success(data);
      } else {
        var msg = "Network busy";
        obj.error ? obj.error(msg) : alert(msg);
      }
    }
  },
  createXmlHttp: function () {
    var xhobj = false;
    try { xhobj = new XMLHttpRequest(); }
    catch (e1) {
      try {
        xhobj = new ActiveXObject("Msxml2.XMLHTTP"); //iemsxml3.0+
      } catch (e2) {
        try {
          xhobj = new ActiveXObject("Micsoft.XMLHTTP"); //iemsxml2.6
        }
        catch (e3) {
          xhobj = false;
        }
      }
    }
    if (!xhobj && typeof XMLHttpRequest != 'undefined') {//Firefox,Opera 8.0+,Safari.
      xhobj = new XMLHttpRequest();
    }
    return xhobj;
  },

  urlParamsFormat: function (data) {
    var arr = [];
    for (var keyName in data) {
      arr.push(encodeURIComponent(keyName) + "=" + encodeURIComponent(data[keyName]));
    }
    return arr.join("&");
  }
}

export { najax }
