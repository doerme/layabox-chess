var laya;
(function (laya) {
    var Sprite = Laya.Sprite;
    var Stage = Laya.Stage;
    var WebGL = Laya.WebGL;
    var Sprite_DrawShapes = /** @class */ (function () {
        function Sprite_DrawShapes() {
            // 不支持WebGL时自动切换至Canvas
            Laya.init(750, 1200, WebGL);
            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#FFF";
            this.drawMap();
            this.drawPiece();
        }
        /** 绘制地图 */
        Sprite_DrawShapes.prototype.drawMap = function () {
            this.sp = new Sprite();
            Laya.stage.addChild(this.sp);
            // #d18b47 #ffce9e
            for (var row = 0; row < 8; row++) {
                for (var col = 0; col < 8; col++) {
                    this.sp.graphics.drawRect(55 + row * 80, 300 + col * 80, 80, 80, (row + col) % 2 == 0 ? '#d18b47' : '#ffce9e');
                }
            }
        };
        /** 绘制棋子 */
        Sprite_DrawShapes.prototype.drawPiece = function () {
            this.testChess = new Sprite();
            this.testChess.loadImage("res/atlas/chess/Chess_bdt45.svg.png");
            Laya.stage.addChild(this.testChess);
            this.testChess.x = Laya.stage.width / 2;
            this.testChess.y = Laya.stage.height / 2;
        };
        return Sprite_DrawShapes;
    }());
    laya.Sprite_DrawShapes = Sprite_DrawShapes;
})(laya || (laya = {}));
new laya.Sprite_DrawShapes();
//# sourceMappingURL=HelloLayabox.js.map