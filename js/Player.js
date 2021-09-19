class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  getCount(){
    database.ref('playerCount').on("value",(data)=>{
        playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref("/").update({
      playerCount:count,  
    });
  }

  addPlayer(){
    var playerIndex = "players/player"+this.index;
    //If this index is 1 then this positionX is width/2-100
    //else this positionX is width/2+100
    
    if(this.index === 1)
    {
      this.positionX = width/2-100
    }
    else{
      this.positionX = width/2+100
    }

    database.ref(playerIndex).update({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY,
    })
  }

  static allPlayersInfo(){
    database.ref("players").on("value",(data)=>{
     allPlayers = data.val();
    })
  }

  update(){
    var playerRef = "players/player"+this.index;
    database.ref(playerRef).update({
      positionX:this.positionX,
      positionY:this.positionY
    })
  }
  

  getDistance(){
    var playerRef = "players/player"+this.index;
    database.ref(playerRef).on("value",(data)=>{
      var pos = data.val(); //this returns the name of the node as stored in database
      this.positionX = pos.positionX;
      this.positionY = pos.positionY;
    })
  }
}
