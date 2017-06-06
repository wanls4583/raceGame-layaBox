var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var backgroundUI=(function(_super){
		function backgroundUI(){
			

			backgroundUI.__super.call(this);
		}

		CLASS$(backgroundUI,'ui.backgroundUI',_super);
		var __proto__=backgroundUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(backgroundUI.uiView);
		}
		backgroundUI.uiView={"type":"View","props":{"width":640,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"race/bg.png","name":"background"}}]};
		return backgroundUI;
	})(View);