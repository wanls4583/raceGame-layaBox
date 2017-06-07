var Tong = (function(_super){
    function Tong(){
        Tong.super(this);
        this.createFrames();
        this.play(Util.TONG);
        this.scale(0,0);
        this.come();
    }
    //雪糕筒初始y坐标
    Tong.beginY = 30;
    Tong.maxScale = 1;
    //雪糕筒最大速率基数，基数越大，速度变化越快
    Tong.maxSpeedRatioBase = 40;
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
        this.ani.pos(-bounds.width/2,-bounds.height);
    }
    Tong.prototype.come = function(){
        /**计算speedRatioBase的加速度(物理公式:1/2*a*t^2=s)，
         * s代表speedRatioBase，t代表y偏移量，计算出加速度a，
         * 雪糕筒越近speedRatioBase越大
         * */
        var acceleration = 2*Tong.maxSpeedRatioBase/Math.pow(Laya.stage.height-Tong.beginY,2);
        var rnd = Math.ceil(Math.random()*3);
        var beginX,beginY = Tong.beginY,toX,toY = Laya.stage.height;
        //x轴随机位置
        beginX = 308 + (rnd-1) * 10;
        //运动到眼前时的x轴位置
        toX = (Laya.stage.width - 80 * 2) / 3 * (rnd-1) + 140;
        this.pos(beginX,beginY);
        var ratio = (toX-beginX)/(toY-beginY); 
        //雪糕筒移动
        Laya.timer.frameLoop(1,this,function(){
            var speedRatio = 1/2*acceleration*Math.pow(this.y+1-Tong.beginY,2);
            this.y+=1*(1+speedRatio);
            this.x+=ratio*(1+speedRatio);
            if(this.y < toY){
                var scale = Tong.maxScale*this.y/toY;
                this.scale(scale,scale);
            }
            //消失时销毁对象
            if(this.y > Laya.stage.height+this.ani.getGraphicBounds().height){
                this.destroy();
            }
        });
    }
    return Tong;
})(Laya.Sprite)