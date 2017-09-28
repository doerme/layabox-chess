class Chess extends Laya.Sprite {
    constructor() {
        super();
        Laya.stage.on(Laya.Event.CLICK, this, this.onClick);
    }

    onClick():void {
        console.log('1');
    }

    /** 绘制棋子 */
    drawPiece(chessSource: string, chessX: number, chessY: number): void {
        this.loadImage(chessSource);
        Laya.stage.addChild(this);
        this.scaleX = 1.5;
        this.scaleY = 1.5;
        this.x = chessX;
        this.y = chessY;
    }
}