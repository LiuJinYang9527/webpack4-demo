/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-06-17 23:12:56 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-08 17:28:10
 * @description  使用js桥接与客户端交互方法
 */
import Page from "./page.js"
let device = '';
//判断设备引入对应桥接方法
if (Page.Versions().mobile && Page.Versions().ios) {
    require("./iosJsBridge.js")
    device = 'ios';
    console.info("ios");
} else {
    require("./androidJsbridge.js")
    device = 'android';
    console.info("android");
};
//ios调用js方法
let IosCallJs = function(method, call) {
    window.setupWebViewJavascriptBridge(function(bridge) {
        bridge.registerHandler(method, function(data, responseCallback) {
            var responseData = { 'Javascript Says': 'Right back atcha!' }
                // responseCallback(responseData);
            if (typeof call == "function") {
                call(data);
            }
        })
    });
};
//js调用ios方法
let JsCallIos = function(method, params, call) {
    window.setupWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('uuptObjcCallback', { method: method, params: params },
            function(response) {
                if (typeof call == "function") {
                    call(response);
                }
            })
    });
};
//js调用安卓方法
let JsCallAndroid = function(method, params, call) {
    window.WebViewJavascriptBridge.callHandler('uuptObjcCallback', { method: method, params: params },
        function(response) {
            if (typeof call == "function") {
                call(JSON.parse(response));
            }
        })
};
//安卓调用js方法
let AndroidCallJs = function(method, call) {
    window.WebViewJavascriptBridge.registerHandler(method, function(data, responseCallback) {
        if (typeof call == "function") {
            call(JSON.parse(data));
        }
    });
};
