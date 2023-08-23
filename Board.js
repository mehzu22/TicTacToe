const Cell = require("./Cell")

class Board {
    
    constructor(){
        
        this.cells=[new Cell(), new Cell(),new Cell(),
            new Cell(), new Cell(),new Cell(),
            new Cell(), new Cell(),new Cell()
        ]
    }
    isCellEmpty(cellNumber){
        return this.cells[cellNumber].isCellEmpty()
    }
    markCell(cellNumber,symbol)
    {
        this.cells[cellNumber].markCell(symbol)
    }
    // analyze winner 
    //1.Winning Condition 2.Draw conditon 3. Continue playing

    winningConditions()
    {
        if ( this.cells[0].getMark() == this.cells[1].getMark() &&
        this.cells[0].getMark() == this.cells[2].getMark() &&
        !this.cells[0].isCellEmpty()
        )
        {
            return [this.cells[0].getMark()]//winnig symbol and string(game status)
        }

        if ( this.cells[3].getMark() == this.cells[4].getMark() &&
        this.cells[3].getMark() == this.cells[5].getMark() &&
        !this.cells[3].isCellEmpty()
        )
        {
            return [this.cells[3].getMark()]//winnig symbol and string(game status)
        }
        if ( this.cells[6].getMark() == this.cells[7].getMark() &&
        this.cells[6].getMark() == this.cells[8].getMark() &&
        !this.cells[6].isCellEmpty()
        )
        {
            return [this.cells[6].getMark()]//winnig symbol and string(game status)
        }
        if ( this.cells[0].getMark() == this.cells[3].getMark() &&
        this.cells[0].getMark() == this.cells[6].getMark() &&
        !this.cells[0].isCellEmpty()
        )
        {
            return [this.cells[0].getMark()]//winnig symbol and string(game status)
        }
        if ( this.cells[1].getMark() == this.cells[4].getMark() &&
        this.cells[1].getMark() == this.cells[7].getMark() &&
        !this.cells[1].isCellEmpty()
        )
        {
            return [this.cells[1].getMark()]//winnig symbol and string(game status)
        }
        if ( this.cells[2].getMark() == this.cells[5].getMark() &&
        this.cells[2].getMark() == this.cells[8].getMark() &&
        !this.cells[2].isCellEmpty()
        )
        {
            return [this.cells[2].getMark()]//winnig symbol and string(game status)
        }
        if ( this.cells[0].getMark() == this.cells[4].getMark() &&
        this.cells[0].getMark() == this.cells[8].getMark() &&
        !this.cells[0].isCellEmpty()
        )
        {
            return [this.cells[0].getMark()]//winnig symbol and string(game status)
        }
        if ( this.cells[2].getMark() == this.cells[4].getMark() &&
        this.cells[2].getMark() == this.cells[6].getMark() &&
        !this.cells[2].isCellEmpty()
        )
        {
            return [this.cells[2].getMark()]//winnig symbol and string(game status)
        }
        return  ["Continue playing"]

    }
    
    isDraw()
    {
        
        for (let index = 0; index < this.cells.length; index++) {
            if(this.cells[index].isCellEmpty())
            {
                return false
            }
            
        }
        return true
    }

    printBoard()
    {
        console.log(this.cells);
    }
}
module.exports=Board