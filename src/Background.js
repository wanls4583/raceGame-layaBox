var Background = (function(_super){
    function Background(){
        Background.super(this);
    }
    Laya.class(Background,'Background',_super);
    Background.prototype.changeBackground = function(url){
        this.getChildByName('background').skin = url;
    }
    return Background;
})(backgroundUI)