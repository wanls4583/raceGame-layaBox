(function(){
    Laya.init(640,400);
    Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT
    var bg = new Background();
    Laya.stage.addChild(bg);
    var AniConfPath = "res/atlas/race.json";
    Laya.loader.load(AniConfPath, Laya.Handler.create(this, createTong), null, Laya.Loader.ATLAS);
    
    function createTong(){
        Laya.timer.frameLoop(30,this,function(){
            var tong = new Tong();
            Laya.stage.addChild(tong);
        });
    }
})()