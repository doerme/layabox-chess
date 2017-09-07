class Chess extends Laya.Sprite {
    constructor() {
        super();
    }
    /** 绘制棋子 */
    drawPiece(): void {
        this.loadImage("comp/chess_bdt45.png");
        Laya.stage.addChild(this);
        this.x = Laya.stage.width / 2;
        this.y = Laya.stage.height / 2;
    }
}