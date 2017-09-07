class ChessBorad extends Laya.Sprite {
    constructor() {
        super();
    }
    init(): void {
        Laya.stage.addChild(this);
        // #d18b47 #ffce9e
        for(var row: number = 0; row < 8; row++){
            for(var col: number = 0; col < 8; col++){
                this.graphics.drawRect(55 + col * 80, 200 + row * 80, 80, 80, (row +　col)%2 == 0 ? '#d18b47' : '#ffce9e');
            }
        }
    }
}