//to write the correct answers
const accessCode1 = "2000080";
const accessCode2 = "120";
const accessCode3 = "104";

function questions() {


        //to display the questions
        fill("black");
        textSize(25);
        text("The weight of your rocket is 20,00,000 kg", 100, 130);
        
        fill("black");
        textSize(25);
        text("Your weight is 80 kg, so what would be the sum ", 100, 180);
        text("of your weight and the rocket's weight be? ", 100, 210);
    
        fill("black");
        textSize(25);
        text("If one goldbrick weighs 12 kg. Then, how much will 10 ", 560, 370);
        text("such goldbricks weigh?", 740, 405);
     
        text("The maximim weight your rocket can carry is 20,00,096 kg.", 1100, 120);
        text("Therefore, how much weight will you have to decrease ", 1100, 180);
        text("from the rocket to take the goldbricks back to Earth?", 1100, 210);

}

function options(){

        //to display the options to reduce the weight of the
        textSize(30);
        fill("darkred");
        text("Wonderful, you have successfully answered all the questions correctly!", 50, 100, 700, 100);

        textSize(30);
        text("Now, you have to choose four options to reduce 104 kgs from the rocket.", 50, 210, 700, 100);

        textSize(30);
        fill("black");
        text("1. Remove the roof of the rocket and replace it with a cloth/ material which can heal its wounds on its own.", 800, 100, 800, 100);

        textSize(30);
        fill("purple");
        text("-41 kg", 800, 210);

        fill("black");
        textSize(30);
        text("2. remove the windows and replace them with the same kind of cloth/ material stated above", 800, 250, 800, 100);

        textSize(30);
        fill("purple");
        text("-14 kg", 800, 360);

        fill("black");
        textSize(30);
        text("3. Remove the gym equipement", 800, 410);

        textSize(30);
        fill("purple");
        text("-25 kg", 800, 450);

        fill("black");
        textSize(30);
        text("4. Discard the food", 800, 510);

        textSize(30);
        fill("purple");
        text("-5 kg",800, 560);

        fill("black");
        textSize(30);
        text("5. Reduce the fuel", 800, 620);

        textSize(30);
        fill("purple");
        text("-5 kg", 800, 670);

        fill("black");
        textSize(30);
        text("6. Remove the seats", 800, 720);

        textSize(30);
        fill("purple");
        text("-24 kg", 800, 770);
        

}

   