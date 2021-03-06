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
var ChessBorad = /** @class */ (function (_super) {
    __extends(ChessBorad, _super);
    function ChessBorad() {
        var _this = _super.call(this) || this;
        _this.chess = new Chess(); /** 棋子 */
        return _this;
    }
    ChessBorad.prototype.onClick = function () {
        console.log(this.row, this.col);
    };
    /** 绘制格子 */
    ChessBorad.prototype.init = function (color) {
        Laya.stage.addChild(this);
        // #d18b47 #ffce9e
        this.graphics.drawRect(55 + this.col * 80, 200 + this.row * 80, 80, 80, color);
        this.size(80, 80);
        this.on(Laya.Event.CLICK, this, this.onClick);
    };
    /** 绘制棋子 */
    // 60 + col * 80, 205 + row * 80
    ChessBorad.prototype.drawPiece = function (chessSource) {
        this.chess.drawPiece(chessSource, 60 + this.col * 80, 205 + this.row * 80);
    };
    return ChessBorad;
}(Laya.Sprite));
//# sourceMappingURL=ChessBoard.js.map