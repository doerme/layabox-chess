module laya {
    import Stage = Laya.Stage;
    import WebGL = Laya.WebGL;

    export class Start {
        public static chessBoard: ChessBorad; /** 棋盘 */
        private chessSource = {
            whiteKing: "comp/chess_klt45.png",
            whiteQueen: "comp/chess_qlt45.png",
            whiteRook: "comp/chess_rlt45.png",
            whiteBishop: "comp/chess_blt45.png",
            whiteKnight: "comp/chess_nlt45.png",
            whitePawn: "comp/chess_plt45.png",
            blackKing: "comp/chess_kdt45.png",
            blackQueen: "comp/chess_qdt45..png",
            blackRook: "comp/chess_rdt45.png",
            blackBishop: "comp/chess_bdt45.png",
            blackKnight: "comp/chess_ndt45.png",
            blackPawn: "comp/chess_pdt45.png"
        }
        private chessArr = [[
            this.chessSource.blackRook,
            this.chessSource.blackKnight,
            this.chessSource.blackBishop,
            this.chessSource.blackQueen,
            this.chessSource.blackKing,
            this.chessSource.blackBishop,
            this.chessSource.blackKnight,
            this.chessSource.blackRook,
            ],
            [
            this.chessSource.whiteRook,
            this.chessSource.whiteKnight,
            this.chessSource.whiteBishop,
            this.chessSource.whiteKing,
            this.chessSource.whiteQueen,
            this.chessSource.whiteBishop,
            this.chessSource.whiteKnight,
            this.chessSource.whiteRook,
            ]]
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
            this.drawChessBoard();
            // this.drawChess();
        }
        /** 棋子初始化 */
        // 60 + col * 80, 205 + row * 80
        drawChessBoard(): void {
            for(var row: number = 0; row < 8; row++){
                for(var col: number = 0; col < 8; col++){
                    Start.chessBoard = new ChessBorad();
                    Start.chessBoard.row = row;
                    Start.chessBoard.col = col;
                    Start.chessBoard.init((row +　col)%2 == 0 ? '#d18b47' : '#ffce9e');
                    if(row == 0){
                        Start.chessBoard.drawPiece(this.chessArr[0][col]);
                    }else if(row == 1){
                        Start.chessBoard.drawPiece(this.chessSource.blackPawn);
                    }else if(row == 6){
                        Start.chessBoard.drawPiece(this.chessSource.whitePawn);
                    }else if(row == 7){
                        Start.chessBoard.drawPiece(this.chessArr[1][col]);
                    }
                }
            }
        }

    }
}
new laya.Start();