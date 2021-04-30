class Form{
    constructor(){

        //Variables for questionaire
        this.titleQues=createElement("h1");
        this.question=createElement("h2");
        this.quesInput=createInput("Enter in numbers 0,1 etc.");
        this.quesButton=createButton("Submit Answer");
        this.error=createElement("h1");

        //Variables for Login
        this.logTitle=createElement("h1");
        this.descript=createElement("h2");
        this.quesB=createInput("What is Your name?");
        this.logButton=createButton("Submit Details");
        this.text=createElement("h3");

    }

    display(){

    }

    Fques(){

        this.error.hide();
        this.logTitle.hide();
        this.descript.hide();
        this.quesB.hide();
        this.logButton.hide();
        this.text.hide();

        this.titleQues.html("Solve To Log");
        this.titleQues.position(690,120);

        this.question.html("On a Quidditch pitch, how many goals are there in total?")
        this.question.position(450,230);

        this.quesInput.position(500,350);

        this.quesButton.position(500,400);

        this.quesButton.mousePressed(()=>{
            
            this.titleQues.hide();
            this.question.hide();
            this.quesInput.hide();
            this.quesButton.hide();

            gameState=1;
            game.updateGameState(1);

            quesAns=this.quesInput.value();

            if(gameState==1){
                if(quesAns==6){
                    game.log();
                }else{
                    this.displayError();
                }
            }

        })

    }

    log(){

        this.titleQues.hide();
        this.question.hide();
        this.quesInput.hide();
        this.quesButton.hide();
        this.error.hide();
        this.text.hide();

        this.logTitle.html("Please Login Here to Enter Game");
        this.logTitle.position(530,100);

        this.quesB.position(650,400);

        this.logButton.position(580,450);

        this.descript.html("Enter Your name in the following.");
        this.descript.position(200,200);

        this.logButton.mousePressed(()=>{

            this.hide();
            this.text.show();

            playerCount+=1;
            game.updatePlayerCount(playerCount);
            
            var playerName=this.quesB.value();

            this.text.html("Hello "+playerName+" Please wait for the other player to join");
            this.text.position(200,300);

            player.name=playerName;
            player.index=playerCount;
            player.updatePlayerDetails();

            game.start();


        })

    }

    hide(){

        this.titleQues.hide();
        this.question.hide();
        this.quesInput.hide();
        this.quesButton.hide();
        this.error.hide();

        this.error.hide();
        this.logTitle.hide();
        this.descript.hide();
        this.quesB.hide();
        this.logButton.hide();
        this.text.hide();

    }

    end(){

    }

    displayError(){

            this.error.show();
            this.error.html("Sorry Your answer was wrong! Try again later.....");
            this.error.position(450,300);

    }
}