var Tong = (function(_super){
    function Tong(){
        Tong.super(this);
        this.createFrames();
        this.play(Util.TONG);
        this.scale(0.2,0.2);
        this.come();
    }
    Laya.class(Tong,'Tong',_super);
    Tong.prototype.createFrames = function(){
        if(!Tong.hasCached){
            Tong.hasCached = true;
            Laya.Animation.createFrames(['race/xuegaotong.png'],Util.TONG);
        }
    }
    Tong.prototype.play = function(action){
        if(!this.ani){
            this.ani = new Laya.Animation();
            this.addChild(this.ani);
        }
        this.ani.play(0,true,action);
        var bounds = this.ani.getGraphicBounds();
        this.ani.pos(-bounds.width/2,-bounds.height/2);
    }
    Tong.prototype.come = function(){
        var rnd = Math.ceil(Math.random()*3);
        var x,y=30,toX,toY;
        x = Laya.stage.width / 2 - 15 + rnd * 10;
        toX = (Laya.stage.width - 40 * 2) / 3 * rnd + 40;
        toY = Laya.stage.height;
        this.pos(x,y);
        Laya.Tween.to(this,{x:toX,y:toY},3000);
    }
    return Tong;
})(Laya.Sprite)