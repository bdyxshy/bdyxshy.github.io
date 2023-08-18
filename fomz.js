/*************************************

项目名称：日杂相机，Fomz相机

**************************************

[rewrite_local]
^https:\/\/.*\.imendon\.com\/v2\/purchase\/vip\/verification url script-response-body https://raw.githubusercontent.com/bdyxshy/bdyxshy.github.io/master/fomz.js

[mitm]
hostname = *.imendon.com

*************************************/
var youxiu = JSON.parse($response.body);youxiu.data.isValid = 1;youxiu.data.expiredTs = 4102415999;$done({body : JSON.stringify(youxiu)});
