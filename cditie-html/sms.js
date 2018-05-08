function sendSMS(){

	 var to = "13524080425";
	 var appid = "15717";
	 var appkey = "afa8815d03304d5147c9e04b8ff9b232";
	 var tid = "S0ejC1";



	 var smsApi = "https://api.mysubmail.com/message/send.json";

	 var param = "appid=" + appid 
	 + "&to=" + to
	 + "&content=" + "【过节说】丽丽短信红包正在途中，请耐心等待！"
	 + "&signature=" + appkey;

	  //Ajax调用处理
	Zepto.ajax({
	   type: "POST",
	   url: smsApi,
	   data: param,
	   success: function(data){
	   		alert("操作成功");
	   }
	});



}