class Game{
    constructor(){

    }

    display(){

    }

    quesRound(){

        ques=new Form();
        ques.Fques();

    }

    log(){

        form=new Form();
        form.log();

    }

    start(){

        broom1=createSprite(100,200);
        broom2=createSprite(100,400);

        broom1.addImage(aldrichImg);
        broom2.addImage(ronaldImg);

        broom1.scale=0.5;
        broom2.scale=0.5;

        brooms=[broom1,broom2];

    }

    play(){

        form.hide();
        ques.hide();
        Player.getPlayerInfo();
        player.getRank();

        if(allPlayers!==undefined){
            image(raceImg,displayHeight,0,displayWidth*7,displayHeight/1.15);
            var index=0;
            var yPos=100;
            textSize(15);
            var distance=0;
            var xVal=100;
            for(var i in allPlayers){
                index+=1;
                distance=displayHeight+allPlayers[i].distance;
                xVal+=200
                brooms[index-1].x=distance;
                brooms[index-1].y=xVal;
                if(player.index==index){
                brooms[index-1].shapeColor="white";
                fill("white");
                ellipse(brooms[index-1].x,brooms[index-1].y,150);
                camera.position.x=brooms[index-1].x;

                }
                if(i==="player"+player.index){
                    fill("red");

                }else{
                    fill("black")
                }
                text(allPlayers[i].name+"  :  "+allPlayers[i].distance,50,yPos)
                yPos+=20;
            }

            

            drawSprites();

        }

        if(keyIsDown(RIGHT_ARROW)&&player.index!==null){
            player.distance+=50;
            player.updatePlayerDetails();
        }

        if(player.distance>4200){
            player.rank+=1;
            Player.updateRank(player.rank);
            gameState=3;
            game.updateGameState(3);
        }

    }

    end(){

    }

//Following is for getting and saving gameState;

    getGameState(){

        var databaseRef=database.ref("gameState");
        databaseRef.on("value",function(data){
            gameState=data.val();
        })
    }


    updateGameState(state){

        database.ref("/").update({
            'gameState':state
        })

    }

//Following is for getting and saving player Count
    getPlayerCount(){

        var databaseRef=database.ref("playerCount");
        databaseRef.on("value",function(data){
            playerCount=data.val();
        })
    }


    updatePlayerCount(count){

        database.ref("/").update({
            'playerCount':count
        })

    }

    //Initialising database
    setData(){

        database.ref("/").set({
            'gameState':0,
            'playerCount':0
        })

    }
}