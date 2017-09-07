module laya {
    import Sprite = Laya.Sprite;
    import Stage = Laya.Stage;
    import WebGL = Laya.WebGL;

    export class Start {
        public static chessBoard: ChessBorad; /** 棋盘 */
        public static chess: Chess; /** 棋子 */
        private sp: Sprite;
        constructor()
        {
            // 不支持WebGL时自动切换至Canvas
            Laya.init(750, 1200, WebGL);
            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#FFF";
            //既然是图集， 就应该先加载完图集 加载完成再使用            
            Laya.loader.load("res/atlas/comp.json", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS);
        }
        onLoaded(): void {
            Start.chessBoard = new ChessBorad();
            Start.chessBoard.init();
            Start.chess = new Chess();
            Start.chess.drawPiece();
        }
        
    }
}
new laya.Start();