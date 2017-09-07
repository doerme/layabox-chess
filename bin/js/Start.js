var laya;
(function (laya) {
    var Stage = Laya.Stage;
    var WebGL = Laya.WebGL;
    var Start = /** @class */ (function () {
        function Start() {
            // 不支持WebGL时自动切换至Canvas
            Laya.init(750, 1200, WebGL);
            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#FFF";
            //既然是图集， 就应该先加载完图集 加载完成再使用            
            Laya.loader.load("res/atlas/comp.json", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS);
        }
        Start.prototype.onLoaded = function () {
            Start.chessBoard = new ChessBorad();
            Start.chessBoard.init();
            Start.chess = new Chess();
            Start.chess.drawPiece();
        };
        return Start;
    }());
    laya.Start = Start;
})(laya || (laya = {}));
new laya.Start();
//# sourceMappingURL=Start.js.map