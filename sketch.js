function setup(){ 
    
  
}







$( document ).ready(function() {

const audiolighter = new Audio("Audio/Lighter.m4a" );
const audioknock = new Audio("Audio/Knock.m4a");
const audioegg = new Audio("Audio/egg.m4a" );
const audiohammer = new Audio("Audio/Hammer.m4a" );
const audiopaint = new Audio("Audio/Paint.m4a" );
const audiopin = new Audio("Audio/Pin.m4a" );
const audioscissors = new Audio("Audio/Scissors.m4a" );
const audiosharpie = new Audio("Audio/Sharpie.m4a" );
const audioshave = new Audio("Audio/Shave.m4a" );
const audiostamp = new Audio("Audio/Stamp.m4a" );
const audiotape = new Audio("Audio/Tape.m4a" );
const audiotongs = new Audio("Audio/Tongs.m4a" );
const audioscratch = new Audio("Audio/scratch.m4a" );
const audioopener = new Audio("Audio/opener.m4a" );



var urllighter = "Images/01.gif"
var urlknock = "Gifs/knock.gif"
var urlclicker = "Gifs/click.gif"
var urlhammer = "Gifs/hammer.gif"
var urlopener = "Gifs/Opener.gif"
var urlpaint = "Gifs/Paint.gif"
var urlscratch = "Gifs/Scratch.gif"
var urlsharpie = "Gifs/Sharpie.gif"
var urlshave = "Gifs/shave.gif"
var urlsiccors = "Gifs/siccors.gif"
var urlsprinkle = "Gifs/Sprinkle.gif"
var urlstamp = "Gifs/Stamp.gif"
var urltongs = "Gifs/Tongs.gif"
var urltype = "Gifs/type.gif"






var urlpointer = "Gifs/pointer.png"


// click state arrays
coaster1 = [1]
egg1 = [1]
ticket1 = [1]
candle1 = [1]
jar1 = [1]
pepper1 = [1]
pin1 = [1]
stamp1 = [1]
button1 = [1]
balloon1 = [1]
dollar1 = [1]
marshmellow1 = [1]
name1 = [1]
beans1 = [1]
bulb1 = [1]
cupcake1 = [1]
onion1 = [1]
shave1 = [1]

// hover state arrays
egg1hover = [1]
coaster1hover = [1]
candle1hover = [1]
button1hover = [1]
balloon1hover = [1]
dollar1hover = [1]
marshmellow1hover = [1]
name1hover = [1]
beans1hover = [1]
bulb1hover = [1]
cupcake1hover = [1]
onion1hover = [1]
shave1hover = [1]
ticket1hover = [1]
jar1hover = [0]
pin1hover = [0]
stamp1hover = [0]
pepper1hover = [0] 

//switch image function might have to customize more later 
function switchimages (actionid1, actionid2, objectid, objectarray, elementnumber, delay){
    actionlist = ["#lighter", "#knock", "#pointer", "#mouse", "#clicker", "#hammer", "#opner", "#paint", "#scratch", "#sharpie", "#scratch", "#shave", "#siccors", "#sprinke", "#stamp", "#tongs", "#type"]
    for (i=0; i<actionlist.length; i++){
        if (actionlist[i] == actionid1){
            actionlist.splice[i]
        }
    }
    id1str = str(actionid1)
    id2str = str(actionid2)
    objectidstr1 = str("#" + objectid + elementnumber)
    objectclassstr1 = str("im" + objectid + "1")
    objectclassstr2 = str("im" + objectid + "2")
    for (i=0; i<actionlist.length; i++){
        $(str(actionlist[i])).hide();

    }  
    $(id1str).show();
    setTimeout(() => {
           $(id1str).hide();
           $("#mouse").show();

        objectarray = objectarray * -1
        if (objectarray == -1){
            $( objectidstr1).removeClass(objectclassstr1)
            $( objectidstr1).addClass(objectclassstr2)
        }
        else {
            $( objectidstr1).removeClass(objectclassstr2)
            $( objectidstr1).addClass(objectclassstr1)
             
        }

    console.log("delayhere")
    }, delay)
}


// function to load image into an array (foldername, folderlength)

    //images

    var lighter = new Image();
    lighter.src = urllighter
    $('#lighter').append(lighter);

    var knock = new Image();
    knock.src = urlknock
    $('#knock').append(knock);

    var clicker = new Image();
    clicker.src = urlclicker
    $('#clicker').append(clicker);

    var pointer = new Image();
    pointer.src = urlpointer;
    $('#mouse').append(pointer);

    var hammer = new Image();
    hammer.src = urlhammer;
    $('#hammer').append(hammer);

    var opener = new Image();
    opener.src = urlopener;
    $('#opener').append(opener);

    var paint = new Image();
    paint.src = urlpaint;
    $('#paint').append(paint);

    var scratch = new Image();
    scratch.src = urlscratch;
    $('#scratch').append(scratch);

    var sharpie = new Image();
    sharpie.src = urlsharpie;
    $('#sharpie').append(sharpie);

    var shave = new Image();
    shave.src = urlshave;
    $('#shave').append(shave);

    var siccors = new Image();
    siccors.src = urlsiccors;
    $('#siccors').append(siccors);

    var sprinkle = new Image();
    sprinkle.src = urlsprinkle;
    $('#sprinkle').append(sprinkle);

    var stamp = new Image();
    stamp.src = urlstamp;
    $('#stamp').append(stamp);

    var tongs = new Image();
    tongs.src = urltongs;
    $('#tongs').append(tongs);

    var type = new Image();
    type.src = urltype;
    $('#type').append(type);

    // get mouse position   where scrolloffset is position   
    var scrollTop  = 0;
    var scrolloffset = 0;
    $(document).mousemove(function(event) {
    var eventpy = event.pageY
    scrolloffset = eventpy - scrollTop
    
    $("#mouse").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#lighter").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#knock").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#clicker").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#hammer").css({"left" : (event.pageX - 0), "top" : scrolloffset - 500});
    $("#scratch").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 500});
    $("#opener").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#paint").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#sharpie").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#shave").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#siccors").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#sprinkle").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#stamp").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#tongs").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#type").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    



    $(window).scroll(function(event) {
        scrollTop = $(window).scrollTop() ;
       
    })
})  

    //click states

    $("#pepper1").draggable();
    $("#jar1").draggable();
    $("#pin1").draggable();
    $("#candle1").draggable();
    $("#ticket1").draggable();
    $("#stamp1").draggable();
    $("#button1").draggable();
    $("#coaster1").draggable();
    $("#egg1").draggable();
    $("#balloon1").draggable();
    $("#dollar1").draggable();
    $("#marshmellow1").draggable();
    $("#name1").draggable();
    $("#beans1").draggable();
    $("#bulb1").draggable();
    $("#cupcake1").draggable();
    $("#onion1").draggable();
    $("#shave1").draggable();
    
    $( "#coaster1").dblclick(function() {
        audioknock.play();
        coaster1hover[0] = -1
        var coaster = "coaster"
        var coasterswap1 = "#knock"
        var coasterswap2 = "#mouse"
        candle1hover[0] = -1
        switchimages(coasterswap1, coasterswap2, "coaster", coaster1 = [1], 1, 2500)
      });

      $( "#egg1").dblclick(function() {
        audioegg.play();
        egg1hover[0] = -1
        var egg = "egg"
        var eggswap1 = "#hammer"
        var eggswap2 = "#mouse"
        egg1hover[0] = -1
        switchimages(eggswap1, eggswap2, "egg", egg1 = [1], 1, 2500)
      });

    $( "#ticket1").dblclick(function() {
        audioscratch.play();
        ticket1hover[0] = -1
        var ticket = "ticket"
        var ticketswap1 = "#scratch"
        var ticketswap2 = "#mouse"
        ticket1hover[0] = -1
        switchimages(ticketswap1, ticketswap2, ticket, ticket1 = [1], 1, 2500)
        
        });

    $( "#candle1").dblclick(function() {
        audiolighter.play();
        var swap1 = "#lighter"
        var swap2 = "#mouse"
        var candle = "candle"
        candle1hover[0] = -1
        switchimages(swap1, swap2, candle, candle1[0], 1, 5000)
    
        });

    $( "#jar1").dblclick(function() {
        var swap1 = "#sprinkle"
        var swap2 = "#mouse"
        var jar = "jar"
        jar1hover[0] = -1
        switchimages(swap1, swap2, jar, jar1[0], 1, 5000)
        });

    $( "#pepper1").dblclick(function() {
        audioscissors.play();
        var swap1 = "#siccors"
        var swap2 = "#mouse"
        var pepper = "pepper"
        pepper1hover[0] = -1
        switchimages(swap1, swap2, pepper, pepper1[0], 1, 2000)
        
        });

    $( "#pin1").dblclick(function() {
        var swap1 = "#clicker"
        var swap2 = "#mouse"
        var pin = "pin"
        pin1hover[0] = -1
        switchimages(swap1, swap2, pin, pin1[0], 1, 2000)
        });
    
    $( "#stamp1").dblclick(function() {
        audiostamp.play();
        var swap1 = "#stamp"
        var swap2 = "#mouse"
        var stamp = "stamp"
        stamp1hover[0] = -1
        switchimages(swap1, swap2, stamp, stamp1[0], 1, 2000)
        
        });

    $( "#button1").dblclick(function() {
        var swap1 = "#clicker"
        var swap2 = "#mouse"
        var button = "button"
        button1hover[0] = -1
        switchimages(swap1, swap2, button, button1[0], 1, 2000)
        });

     $( "#balloon1").dblclick(function() {
        var swap1 = "#clicker"
        var swap2 = "#mouse"
        var balloon = "balloon"
        balloon1hover[0] = -1
        switchimages(swap1, swap2, balloon, balloon1[0], 1, 2000)
        });

     $( "#dollar1").dblclick(function() {
        audiotongs.play();
        var swap1 = "#tongs"
        var swap2 = "#mouse"
        var dollar = "dollar"
        dollar1hover[0] = -1
        switchimages(swap1, swap2, dollar, dollar1[0], 1, 2000)
        });

    $( "#marshmellow1").dblclick(function() {
            audiolighter.play();
            var swap1 = "#lighter"
            var swap2 = "#mouse"
            var marshmellow = "marshmellow"
            marshmellow1hover[0] = -1
            switchimages(swap1, swap2, marshmellow, marshmellow1[0], 1, 2000)
            });

    $("#beans1").dblclick(function() {
        audioopener.play();
        
            var swap1 = "#opener"
            var swap2 = "#mouse"
            var beans = "beans"
            beans1hover[0] = -1
            switchimages(swap1, swap2, beans, beans1[0], 1, 2000)
            });
            
    $("#bulb1").dblclick(function() {
        
            var swap1 = "#hammer"
            var swap2 = "#mouse"
            var bulb = "bulb"
            bulb1hover[0] = -1
            switchimages(swap1, swap2, bulb, bulb1[0], 1, 2000)
            });

    $("#name1").dblclick(function() {
        audiosharpie.play();
            var swap1 = "#sharpie"
            var swap2 = "#mouse"
            var name = "name"
            name1hover[0] = -1
            switchimages(swap1, swap2, name, name1[0], 1, 2000)
            });

    $("#shave1").dblclick(function() {
        audioshave.play();
                var swap1 = "#shave"
                var swap2 = "#mouse"
                var shave = "shave"
                shave1hover[0] = -1
                switchimages(swap1, swap2, shave, shave1[0], 1, 3000)
                });

     $("#onion1").dblclick(function() {
        audioscissors.play();
            var swap1 = "#siccors"
            var swap2 = "#mouse"
            var onion = "onion"
            onion1hover[0] = -1
            switchimages(swap1, swap2, onion, onion1[0], 1, 2000)
            });

    $("#cupcake1").dblclick(function() {
        var swap1 = "#sprinkles"
        var swap2 = "#mouse"
        var cupcake = "cupcake"
        shave1hover[0] = -1
        switchimages(swap1, swap2, cupcake, cupcake1[0], 1, 2000) });

    

      //hover states

      $( "#coaster1").hover(function(){
       
    }, 
        function(){
        coaster1hover[0] = 1;     
      });

      $( "#button1").hover(function(){
        button1hover[0] = -1
        console.log("button1")}, 
        function(){
        button1hover[0] = 1;     
      });

      $( "#candle1").hover(function(){
        
       
        // $("#lighter").show();
        // $("#mouse").hide();
        // gesture(lighterArray,1050,300, 1)
       
        }, 
        function(){
        // $("#lighter").hide();
        // $("#mouse").show();
        candle1hover[0] = 1; 
         
      });

    });


    
  