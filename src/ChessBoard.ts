class ChessBorad extends Laya.Sprite {
    constructor() {
        super();
        Laya.stage.on(Laya.Event.CLICK, this.chess, this.onClick);
    }
    public chess:Laya.Sprite = new Laya.Sprite();
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
    }

    /** 绘制棋子 */
    // 60 + col * 80, 205 + row * 80
    drawPiece(chessSource: string): void {
        this.chess.loadImage(chessSource);
        Laya.stage.addChild(this.chess);
        this.chess.scaleX = 1.5;
        this.chess.scaleY = 1.5;
        this.chess.x = 60 + this.col * 80;
        this.chess.y = 205 + this.row * 80;
    }
}