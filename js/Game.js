class Game {
  constructor(){

  }
  play(){
    form.hide();
    textSize(30);
    text("GaMe StArT",120,100);
    Player.getPlayerInfo();
    console.log(allPlayers);
    var display_position=130;
    for(var plr in allPlayers){
     if(allPlayers!=undefined){
    display_position+=20;
    if(plr==="player"+playerIndex){
      fill("red");
    }
    else{
      fill("black");
    }
        textSize(15);
        text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,display_position)
      }

    if(keyIsDown(UP_ARROW)&&player.index!=null){
      player.distance+=50;
      player.update();

    }
  }
}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref("playerCount").once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
     
      form = new Form()
      form.display();
    }
  }
}
