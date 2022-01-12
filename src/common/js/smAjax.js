import { najax } from "./nativeAjax";
import { config } from '../../config/env';

const statusField = "code";
export default ({ api = "", data = {}, method = "get", dataType = "json", toast = true, loading = true, url = "", app, type = "exdata", responseType = "" } = {}) => {

  return new Promise((resolve, reject) => {
    loading && app.$store.dispatch("global/setLoading", { status: loading }, { root: true });
    let reqHeaders = {
      "Content-Type": "application/x-www-form-urlencoded"
    };

    if (!url) {
      switch (type) {
        case "stats":
          url = config.stats_api_url + api;
          // reqHeaders={ Authorization:"YnVmZW5nQDIwMThidWZlbmc="}
          break;
        case "exdata":
          if (/getPrice/.test(api)) {
            if (/BTCB/.test(api))
              api = "/getPrice/BTC|USDT";
            if (api.match(/USDT/g).length > 1) {
              resolve({ code: 200, result: 1 });
              return;
            }
          }

          url = config.ex_data_api_url + api;

          reqHeaders = app.$store.getters["exchangeData/getUser"];
          break
        case "chain_api":
          reqHeaders = {
            "Content-Type": "application/json"
          };
          break
      }
    }


    najax.go({
      url,
      data,
      method,
      reqHeaders,
      //    responseType:"text",
      success: res => {
        loading && app.$store.dispatch("global/setLoading", { status: false }, { root: true });
        if (responseType && responseType == 'text') {
          resolve(res);
          return;
        }

        res = eval("(" + res + ")");

        if (type == 'chain_api') {
          resolve(res);
          return;
        }

        let msg = res.msg;
        if (msg) {
          msg = msg.replace(/world_view/g, "asset_type");
          msg = msg.replace(/world\sview/g, "asset type");
        }
        res.msg = msg;
        if (/200|10000|100034|10034/.test(res[statusField])) {
          resolve(res)
        } else {
          //   toast&&app.$g_alert(msg);
          if (type != "stats" && (res[statusField] == 401 && res.data && (res.data.errorcode == 1003) ||
            (res.data && res.data.remarks == "Authentication failure"))) {
            app.$g_alert(app.$t('gt_modal_15'));
          } else {
            // toast&&app.$message({
            //     type:'info',
            //     message: msg,
            //     duration:3000
            // });
            toast && app.$message({
              type: 'info',
              message: msg
            })
          }

          resolve({ code: res.code, message: msg });
        }
      },
      error: msg => {
        loading && app.$store.dispatch("global/setLoading", { status: false }, { root: true });
        toast && app.$message({
          type: 'info',
          message: msg
        })
        resolve({ code: 0, message: msg });
      }
    });
  });
}
