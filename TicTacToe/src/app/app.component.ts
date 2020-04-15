import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TicTacToe';
  start = "X";
  winner = 'N';
  matrix: any = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  ngOnInit() {
    console.log(this.checkWinner());
  }

  checkWinner() {
    if (this.matrix[0][0] == 1 && this.matrix[0][1] == 1 && this.matrix[0][2] == 1)
        this.winner = 'X';
    else
      if (this.matrix[0][0] == 1 && this.matrix[1][1] == 1 && this.matrix[2][2] == 1)
        this.winner = 'X';
    else
      if (this.matrix[0][0] == 1 && this.matrix[1][0] == 1 && this.matrix[2][0] == 1)
        this.winner = 'X';
    else
      if (this.matrix[1][1] == 1 && this.matrix[0][1] == 1 && this.matrix[2][1] == 1)
        this.winner = 'X';
    else
      if (this.matrix[1][0] == 1 && this.matrix[1][1] == 1 && this.matrix[1][2] == 1)
        this.winner = 'X';
    else
      if (this.matrix[0][2] == 1 && this.matrix[1][2] == 1 && this.matrix[2][2] == 1)
        this.winner = 'X';
    else
      if (this.matrix[2][0] == 1 && this.matrix[2][1] == 1 && this.matrix[2][2] == 1)
        this.winner = 'X';
    else
      if (this.matrix[0][2] == 1 && this.matrix[1][1] == 1 && this.matrix[2][0] == 1)
        this.winner = 'X';
    else //Empieza validacion para O
      if (this.matrix[0][0] == 2 && this.matrix[0][1] == 2 && this.matrix[0][2] == 2)
        this.winner = 'O';
    else
      if (this.matrix[0][0] == 2 && this.matrix[1][1] == 2 && this.matrix[2][2] == 2)
        this.winner = 'O';
    else
      if (this.matrix[0][0] == 2 && this.matrix[1][0] == 2 && this.matrix[2][0] == 2)
        this.winner = 'O';
    else
      if (this.matrix[1][1] == 2 && this.matrix[0][1] == 2 && this.matrix[2][1] == 2)
        this.winner = 'O';
    else
      if (this.matrix[1][0] == 2 && this.matrix[1][1] == 2 && this.matrix[1][2] == 2)
        this.winner = 'O';
    else
      if (this.matrix[0][2] == 2 && this.matrix[1][2] == 2 && this.matrix[2][2] == 2)
        this.winner = 'O';
    else
      if (this.matrix[2][0] == 2 && this.matrix[2][1] == 2 && this.matrix[2][2] == 2)
        this.winner = 'O';
    else
      if (this.matrix[0][2] == 2 && this.matrix[1][1] == 2 && this.matrix[2][0] == 2)
        this.winner = 'O';
        
    
            

  }

  TurnPlay(x, y) {
    if (this.start == "X") {
      this.start = "O"
      this.matrix[x][y] = 1
    } else if (this.start == "O") {
      this.start = "X"
      this.matrix[x][y] = 2
    }

    this.checkWinner();

  }

  Restart(){
    this.matrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    this.winner = 'N';
    this.start = "X";
  }



}


