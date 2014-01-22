// source: http://msdn.microsoft.com/en-us/library/ms537509%28v=vs.85%29.aspx
function getIEVersion(){
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

function appendClasses() {
  var ver = getIEVersion(),
      htmlEle = document.documentElement;

  if (ver > -1)
    htmlEle.setAttribute('class', 'ie ie' + ver)
  else
    htmlEle.setAttribute('class', 'no-ie')
}

// init
appendClasses();