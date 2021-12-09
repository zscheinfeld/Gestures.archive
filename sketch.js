var urlpointer = "Images/browse/_1.png"
var urllighter = "Images/01.gif"
var urlknock = "Gifs/knock.gif"
var urlclicker = "Gifs/click.gif"


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

// hover state arrays
coaster1hover = [1]
candle1hover = [1]
button1hover = [1]


//switch image function might have to customize more later 
function switchimages (actionid1, actionid2, objectid, objectarray, elementnumber, delay){
    actionlist = ["#lighter", "#knock", "#pointer", "#mouse", "#clicker"]
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


function setup(){ 
    
  
}


$( document ).ready(function() {

    //images
    var pointer = new Image();
    pointer.src = urlpointer;
    $('#mouse').append(pointer);

    var lighter = new Image();
    lighter.src = urllighter
    $('#lighter').append(lighter);

    var knock = new Image();
    knock.src = urlknock
    $('#knock').append(knock);

    var clicker = new Image();
    clicker.src = urlclicker
    $('#clicker').append(clicker);


    // get mouse position   where scrolloffset is position   
    var scrollTop  = 0;
    var scrolloffset = 0;
    $(document).mousemove(function(event) {
    var eventpy = event.pageY
    scrolloffset = eventpy - scrollTop
    console.log(scrolloffset + "scrollofset")
    console.log(event.pageY + "event.pageY")
    console.log(scrollTop + "scrolltop")
    $("#mouse").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#lighter").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#knock").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $("#clicker").css({"left" : (event.pageX - 1150), "top" : scrolloffset - 150});
    $(window).scroll(function(event) {
        scrollTop = $(window).scrollTop() ;
       
    })
})  

    //click states
    
    $( "#coaster1").dblclick(function() {
        // coaster1[0] = coaster1[0] * -1
        // console.log(coaster1[0])
        // if (coaster1[0] == -1){
        //     $( "#coaster1").removeClass("imcoaster1")
        //     $( "#coaster1").addClass("imcoaster2")
        // }
        // else {
        //     $( "#coaster1").removeClass("imcoaster2")
        //     $( "#coaster1").addClass("imcoaster1")   
        // }
        coaster1hover[0] = -1
        var coaster = "coaster"
        var coasterswap1 = "#knock"
        var coasterswap2 = "#mouse"
        candle1hover[0] = -1
        switchimages(coasterswap1, coasterswap2, "coaster", coaster1 = [1], 1, 2500)
      });

      $( "#egg1").dblclick(function() {
        egg1[0] = egg1[0] * -1
        console.log(coaster1[0])
        if (egg1[0] == -1){
            $( "#egg1").removeClass("imegg1")
            $( "#egg1").addClass("imegg2")
        }
        else {
            $( "#egg1").removeClass("imegg2")
            $( "#egg1").addClass("imegg1")   
        }
      });

    $( "#ticket1").dblclick(function() {
        ticket1[0] = ticket1[0] * -1
        if (ticket1[0] == -1){
            $( "#ticket1").removeClass("imticket1")
            $( "#ticket1").addClass("imticket2")
        }
        else {
            $( "#ticket1").removeClass("imticket2")
            $( "#ticket1").addClass("imticket1")   
        }
        });

    $( "#candle1").dblclick(function() {
        var swap1 = "#lighter"
        var swap2 = "#mouse"
        var candle = "candle"
        candle1hover[0] = -1
        switchimages(swap1, swap2, candle, candle1[0], 1, 5000)
        // candle1[0] = candle1[0] * -1
        // if (candle1[0] == -1){
        //     $( "#candle1").removeClass("imcandle1")
        //     $( "#candle1").addClass("imcandle2")
        // }
        // else {
        //     $( "#candle1").removeClass("imcandle2")
        //     $( "#candle1").addClass("imcandle1")   
        // }
        });

    $( "#jar1").dblclick(function() {
        jar1[0] = jar1[0] * -1
        if (jar1[0] == -1){
            $( "#jar1").removeClass("imjar1")
            $( "#jar1").addClass("imjar2")
        }
        else {
            $( "#jar1").removeClass("imjar2")
            $( "#jar1").addClass("imjar1")   
        }
        });
    
    $("#pepper1").draggable();
    $("#jar1").draggable();
    $("#pin1").draggable();
    $("#candle1").draggable();
    $("#ticket1").draggable();
    $("#stamp1").draggable();
    $("#button1").draggable();
    $("#coaster1").draggable();
    $("#egg1").draggable();

    $( "#pepper1").dblclick(function() {
        pepper1[0] = pepper1[0] * -1
        if (pepper1[0] == -1){
            $( "#pepper1").removeClass("impepper1")
            $( "#pepper1").addClass("impepper2")
        }
        else {
            $( "#pepper1").removeClass("impepper2")
            $( "#pepper1").addClass("impepper1")   
        }
        });

    $( "#pin1").dblclick(function() {
        pin1[0] = pin1[0] * -1
        if (pin1[0] == -1){
            $( "#pin1").removeClass("impin1")
            $( "#pin1").addClass("impin2")
        }
        else {
            $( "#pin1").removeClass("impin2")
            $( "#pin1").addClass("impin1")   
        }
        });
    
    $( "#stamp1").dblclick(function() {
        stamp1[0] = stamp1[0] * -1
        if (stamp1[0] == -1){
            $( "#stamp1").removeClass("imstamp1")
            $( "#stamp1").addClass("imstamp2")
        }
        else {
            $( "#stamp1").removeClass("imstamp2")
            $( "#stamp1").addClass("imstamp1")   
        }
        });

    $( "#button1").dblclick(function() {
        // button1[0] = button1[0] * -1
        // if (button1[0] == -1){
        //     $( "#button1").removeClass("imbutton1")
        //     $( "#button1").addClass("imbutton2")
        // }
        // else {
        //     $( "#button1").removeClass("imbutton2")
        //     $( "#button1").addClass("imbutton1")   
        // }
        var swap1 = "#clicker"
        var swap2 = "#mouse"
        var button = "button"
        button1hover[0] = -1
        switchimages(swap1, swap2, button, button1[0], 1, 2000)
        });

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


    
  