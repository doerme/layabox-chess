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
        return _super.call(this) || this;
    }
    ChessBorad.prototype.init = function () {
        Laya.stage.addChild(this);
        // #d18b47 #ffce9e
        for (var row = 0; row < 8; row++) {
            for (var col = 0; col < 8; col++) {
                this.graphics.drawRect(55 + row * 80, 300 + col * 80, 80, 80, (row + col) % 2 == 0 ? '#d18b47' : '#ffce9e');
            }
        }
    };
    return ChessBorad;
}(Laya.Sprite));
//# sourceMappingURL=ChessBoard.js.map