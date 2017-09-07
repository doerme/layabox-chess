class ChessBorad extends Laya.Sprite {
    constructor() {
        super();
    }
    init(color:string, row:number, col:number): void {
        Laya.stage.addChild(this);
        // #d18b47 #ffce9e
        this.graphics.drawRect(55 + col * 80, 200 + row * 80, 80, 80, color);
    }
}