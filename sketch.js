let turns = 60;
let slots = [["" , "" , "" , "" , "" , "" , "" , ""],  // first row
             ["" , "",  "" , "" , "" , "" , "" , ""],  // second row 
             ["" , "" , "" , "" , "" , "" , "" , ""],  // third row
             ["" , "" , "" , "white" , "black" , "" , "" , ""],  // fourth row
             ["" , "" , "" , "black" , "white" , "" , "" , ""],  // fifth row 
             ["" , "" , "" , "" , "" , "" , "" , ""],  // sixth row
             ["" , "" , "" , "" , "" , "" , "" , ""],  // seventh row
             ["" , "" , "" , "" , "" , "" , "" , ""]]; // last row
             
let whitePieces = 2;
let blackPieces = 2;

function setup(){
    createCanvas(600, 600);
    background("green");
}

function draw(){
    // othello board
    //vertical lines 
    line(  0 , 0,   0 , 600); //left vertical line aka boarder line 
    line( 75 , 0,  75 , 600); // vertical line 1
    line(150 , 0, 150 , 600); // vertical line 2
    line(225 , 0, 225 , 600); // vertical line 3
    line(300 , 0, 300 , 600); // vertical line 4
    line(375 , 0, 375 , 600); // vertical line 5
    line(450 , 0, 450 , 600); // vertical line 6
    line(525 , 0, 525 , 600); // vertical line 7
    line(599 , 0, 599 , 600); // vertical line 8 aka right boarder line

    //horizontal lines
    line(0 ,   0 , 600 ,   0); //top horizontal line aka top boarder line 
    line(0 ,  75 , 600 ,  75); //horizontal line 1
    line(0 , 150 , 600 , 150); //horizontal line 2
    line(0 , 225 , 600 , 225); //horizontal line 3
    line(0 , 300 , 600 , 300); //horizontal line 4
    line(0 , 375 , 600 , 375); //horizontal line 5
    line(0 , 450 , 600 , 450); //horizontal line 6
    line(0 , 525 , 600 , 525); //horizontal line 7
    line(0 , 599 , 600 , 599); //horizontal line 8 aka bottom boarder line
    
    // starting pieces 
    blackDisc(263, 263);
    blackDisc(338, 338);
    //blackDisc(326, 326);
    // whiteDisc(263, 263);
    console.log(slots[0][0]);
}

function blackDisc(x , y){
    ellipse(x , y , 65 , 65);
    fill("black");
}

function whiteDisc(x , y){
    ellipse(x , y , 65 , 65);
    fill("white");
}

function mouseClicked(){
    mouseChecked(0 , 75 , 0 , 75 , 0 , 0);
}

function mouseChecked(num1 , num2 , num3 , num4 , i , j){
    if(mouseX > num1 && mouseX < num2 && mouseY > num3 && mouseY < num4 && turns % 2 == 0 && slots[i][j] == ""){
        blackDisc(num1 + 35 , num3 + 35);
        slots[i][j] = "black";
    }
    if(mouseX > num1 && mouseX < num2 && mouseY > num3 && mouseY < num4 && turns % 2 == 1 && slots[i][j] == ""){
        whiteDisc(num1 + 35 , num3 - 35);
        slots[i][j] = "white";
    }
    
}

function scoreCounting(){
    blackCounter = 0;
    whiteCounter = 0;
    for(let i = 0; i < slots.length; i++){
        for(let j = 0; j < slots[i].length; i++){
            if(slots[i][j] == "black" ){
                blackCounter += 1;
            }
            if(slots[i][j] == "white"){
                whiteCounter += 1;
            }
        }
    }
    blackPieces = blackCounter;
    whitePieces = whiteCounter;
}