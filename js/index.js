  //案例:点击按钮修改a标签的地址和热点文字
  document.getElementById("btn1").onclick = function () {
    //根据id获取超链接,设置href属性
    var aObj = document.getElementById("google");
    aObj.href = "https://www.google.com";
   
  };
  document.getElementById("btn2").onclick = function () {
    //根据id获取超链接,设置href属性
    var aObj = document.getElementById("baiDu");
    aObj.href = "https://www.baidu.com";
   
  };
  document.getElementById("btn3").onclick = function () {
    //根据id获取超链接,设置href属性
    var aObj = document.getElementById("biLi");
    aObj.href = "https://www.bilibili.com";
   
  };
  $("#googleUrl").html("Google");
  $("#baiDuUrl").html("BaiDu");
  $("#biLiUrl").html("BiLiBiLi");
