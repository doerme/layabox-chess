var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Chess = /** @class */ (function (_super) {
    __extends(Chess, _super);
    function Chess() {
        return _super.call(this) || this;
    }
    /** 绘制棋子 */
    Chess.prototype.drawPiece = function (chessSource, chessX, chessY) {
        this.loadImage(chessSource);
        Laya.stage.addChild(this);
        this.scaleX = 1.5;
        this.scaleY = 1.5;
        this.x = chessX;
        this.y = chessY;
    };
    return Chess;
}(Laya.Sprite));
//# sourceMappingURL=Chess.js.map