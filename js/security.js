class Security {

    constructor(){

        //to create input boxes and buttons to check
        this.access1 = createInput("Code1");
        this.access1.position(100, 240);
        this.access1.style('background', 'pink');
        this.access1.style('font-size', '20px');
        
        this.button1 = createButton('Check');
        this.button1.position(100, 280);
        this.button1.style('background', 'yellow');
        this.button1.style('font-size', '18px');

        this.access2 = createInput("Code1");
        this.access2.position(740, 440);
        this.access2.style('background', 'pink');
        this.access2.style('font-size', '20px');

        this.button2 = createButton('Check');
        this.button2.position(800, 475);
        this.button2.style('background', 'yellow');
        this.button2.style('font-size', '18px');
       
        this.access3 = createInput("Code1");
        this.access3.position(1100, 240);
        this.access3.style('background', 'pink');
        this.access3.style('font-size', '20px');
   
        this.button3 = createButton('Check');
        this.button3.position(1100, 280);
        this.button3.style('background', 'yellow');
        this.button3.style('font-size', '18px');
 
        this.optionsButton1= createButton('Remove');
        this.optionsButton1.position(900, 185);
        this.optionsButton1.style('background', 'yellow');
        this.optionsButton1.style('font-size', '20px');

        this.optionsButton2= createButton('Remove');
        this.optionsButton2.position(900, 340);
        this.optionsButton2.style('background', 'yellow');
        this.optionsButton2.style('font-size', '20px');

        this.optionsButton3= createButton('Remove');
        this.optionsButton3.position(900, 440);
        this.optionsButton3.style('background', 'yellow');
        this.optionsButton3.style('font-size', '20px');

        this.optionsButton4= createButton('Remove');
        this.optionsButton4.position(900, 540);
        this.optionsButton4.style('background', 'yellow');
        this.optionsButton4.style('font-size', '20px');

        this.optionsButton5= createButton('Remove');
        this.optionsButton5.position(900, 650);
        this.optionsButton5.style('background', 'yellow');
        this.optionsButton5.style('font-size', '20px');

        this.optionsButton6= createButton('Remove');
        this.optionsButton6.position(900, 750);
        this.optionsButton6.style('background', 'yellow');
        this.optionsButton6.style('font-size', '20px');
      
        this.access1.hide();
        this.button1.hide();
        this.access2.hide();
        this.button2.hide();
        this.access3.hide();
        this.button3.hide();

        this.optionsButton1.hide();
        this.optionsButton2.hide();
        this.optionsButton3.hide();
        this.optionsButton4.hide();
        this.optionsButton5.hide();
        this.optionsButton6.hide();

    }     
    

        display(){
    

            
            //to check whether the answer is right
            this.button1.mousePressed(() => {
                if(system.authenticate(accessCode1,this.access1.value())){
                    this.button1.hide();
                    this.access1.hide();
                    answerScore = answerScore+1
                }
            });
        
    
            this.button2.mousePressed(() => {
                if(system.authenticate(accessCode2,this.access2.value())){
                    this.button2.hide();
                    this.access2.hide();
                    answerScore = answerScore +1
                    text("AWSOME!", 300, 200);
                }
            });
    
        this.button3.mousePressed(() => {
        if(system.authenticate(accessCode3,this.access3.value())){
            this.button3.hide();
            this.access3.hide();
            answerScore = answerScore + 1;
            text("AMAZING!", 400, 200);
          
            
        }
        
        });

        //to check whether the option chosen is correct 
        this.optionsButton1.mousePressed(()=> {

          tickmark1.visible= true; 
          answerScore= answerScore + 1; 
        });

        this.optionsButton2.mousePressed(()=>{

            tickmark2.visible= true;
            answerScore= answerScore + 1;
        });

        this.optionsButton3.mousePressed(()=>{

            tickmark3.visible= true;
            answerScore = answerScore + 1;
        });

        this.optionsButton4.mousePressed(()=>{

            cross1.visible= true;
        })

        this.optionsButton5.mousePressed(()=>{

            cross2.visible= true;
        })

        this.optionsButton6.mousePressed(()=>{

            tickmark4.visible= true;
            answerScore= answerScore + 1;
        })

        //to display the input boxes and buttons when answer score lesser than 1
        if(answerScore < 1){

        this.access1.show();
        this.button1.show();

        this.access2.show();
        this.button2.show();

        this.access3.show();
        this.button3.show(); 
        }

        //to the answer score is lesser than 3 the questions should show
        if(answerScore < 3){
            questions();
        }
        
        //to write whether the answer is wrong or correct 
        if(answerScore >= 1 && answerScore < 3){
            fill("purple");
            textSize(30);
            text("CORRECT!", 200, 300);
        }

        if(answerScore >=2 && answerScore < 3){
            fill("purple");
            textSize(30);
            text("AWSOME!", this.button2.x, this.button2.y + 20);  
        }

        //to show the options buttons and the feedback sprites at the correct time
        if(answerScore >= 3 && answerScore < 7){
            options();
            this.optionsButton1.show();
            this.optionsButton2.show();
            this.optionsButton3.show();
            this.optionsButton4.show();
            this.optionsButton5.show();
            this.optionsButton6.show();
        }

        //to hide the options button and feedback sprites
        if(answerScore >= 7){
            this.optionsButton1.hide();
            this.optionsButton2.hide();
            this.optionsButton3.hide();
            this.optionsButton4.hide();
            this.optionsButton5.hide();
            this.optionsButton6.hide();

            tickmark1.visible= false;
            tickmark2.visible= false;
            tickmark3.visible= false;
            tickmark4.visible= false;

            cross1.visible= false;
            cross2.visible= false;

            //to let the player know that they have completed the game
            textSize(30);
            fill("black");
            text("YAY!, YOU HAVE COMPLETED THE MISSION!", 550, 400);
            text("THANKS FOR PLAYING!", 700, 460);
        }
        }
    
           
        
    
    }



