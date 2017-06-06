(function(){
    Laya.init(640,400);
    Laya.stage.scaleMode = Laya.Stage.SCALE_NOBORDER
    var bg = new Background();
    Laya.stage.addChild(bg);
    var AniConfPath = "res/atlas/race.json";
    Laya.loader.load(AniConfPath, Laya.Handler.create(this, createTong), null, Laya.Loader.ATLAS);
    
    function createTong(){
        var tong = new Tong();
        Laya.stage.addChild(tong);
    }
})()