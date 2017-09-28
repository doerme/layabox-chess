class ChessBorad extends Laya.Sprite {
    constructor() {
        super();
    }
    public chess = new Chess(); /** 棋子 */
    public row:number;
    public col:number;

    onClick():void {
        console.log(this.row, this.col);
    }

    /** 绘制格子 */
    init(color:string): void {
        Laya.stage.addChild(this);
        // #d18b47 #ffce9e
        this.graphics.drawRect(55 + this.col * 80, 200 + this.row * 80, 80, 80, color);
        this.size(80, 80).on(Laya.Event.CLICK, this, this.onClick);
    }

    /** 绘制棋子 */
    // 60 + col * 80, 205 + row * 80
    drawPiece(chessSource: string): void {
        this.chess.drawPiece(chessSource ,60 + this.col * 80, 205 + this.row * 80);
    }
}