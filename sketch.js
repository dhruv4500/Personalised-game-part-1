// Variables so that other functionalities can be done
var database;
var game;
var aldrichImg,ronaldImg,obstacleImg,raceImg,fqImg,backImage;
var playerCount,allPlayers;

//Variables for questionaire
var ques;
var quesAns;

//Variables for Login
var form;
var value,player;

//Variables for starting the final setup
var broom1,broom2,brooms;

/**
 * Below is function preload
 * this function repeats only once and is exuted in the start itself
 * It's task is to load any kind of image or creat a kind of animation before the game Starts.
 * The inside written code will easily make you understand how it works about
 */
function preload(){

    aldrichImg=loadImage("images/Aldrich.png");
    ronaldImg=loadImage("images/Ronald.png");
    obstacleImg=loadImage("images/obstacle.png");
    raceImg=loadImage("images/Racing Track.jpg");
    fqImg=loadImage("images/hp.png");

    getBackground();

}

/**
 * Below is a function that basically sets up the platform or the stage
 * This also executes only once and creates the main stage of the program
 * Since it sets up the platform we create the Canvas here
 */
function setup(){
    //Calling a function to fetch the real time before game starts
        getBackground();

    //Setting of Canvas
        createCanvas(1535,650);

    //Setting database into A variable so that we can access the database
        database=firebase.database();

    //Defining gameState for precessing of the game into sections
        gameState=0;

    //Creating a variable game for better accessibility to the game class
        game=new Game();
        game.setData();
        game.getGameState();
        game.getPlayerCount();
        game.quesRound();

    //Creating the varibale for the player
        player=new Player();

}

/**
 * The following function repeats itself through out the game or the platform
 * It repeats itself infinitely and many times and that is why the background is set here only.
 */
function draw(){
    //Calling a function to fetch the real time during the game
        getBackground();

    //thing to be done in the first game state
        if (gameState==0){
            background(fqImg);
        }

        if(gameState==1){
            background(backImage);
        }

    //to start the game
        if(playerCount>=2){
            gameState=2;
            game.updateGameState(2);
            console.log("true");
        }

    //Game starts
        if(gameState==2){
            clear();
            game.play();
        }

}

/**
 * The following is a defined function that syncs with the api
 * this leads us to the fetching of the time and setting different backgrounds
 */
async function getBackground(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
  
    var dateTime=responseJSON.datetime;
  
    var hour=dateTime.slice(11,13);
  
    if(hour>5&&hour<17){
      console.log("day Time");
      backImage=loadImage("images/dayHog.png");
    }else{
      console.log("night Time");
      backImage=loadImage("images/nightHog.png");
    }
}