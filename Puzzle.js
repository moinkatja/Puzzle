var elem = document.getElementsByClassName('image');
var arr = []; 
var arr2 = []; 
var image1=document.getElementById('img1');
var image2=document.getElementById('img2');
var image3=document.getElementById('img3');
var image4=document.getElementById('img4');
var image5=document.getElementById('img5');
var image6=document.getElementById('img6');
var image7=document.getElementById('img7');
var image8=document.getElementById('img8');
var imgs=[
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg'
];

function randomObj(){
    arr = new Array;
    arr2 = new Array;
    var max = 8;                             
    var rundomnumber;    
    while (arr.length < max) {
        rundomnumber = Math.floor(Math.random() * max); 
        if (arr.indexOf(rundomnumber) == -1) {       
            arr.push(rundomnumber); 
        }
    }  
    image1.src=imgs[arr[0]];
    image2.src=imgs[arr[1]];
    image3.src=imgs[arr[2]];
    image4.src=imgs[arr[3]];
    image5.src=imgs[arr[4]];
    image6.src=imgs[arr[5]];
    image7.src=imgs[arr[6]];
    image8.src=imgs[arr[7]];
    for(i = 0; i < 8; i++) {
        arr2.push(elem[i].src);
    } 
    return(arr2);
}

randomObj();

$( function() {
    $( "#sortable" ).sortable({
        revert: true
    });
    
    $( "#draggable" ).draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid"
    });

    $( "ol, li" ).disableSelection();
    $("img").addClass("ui-sortable-helper");
            
    document.getElementById("fertig_btn").onclick = function() {
        var result = []; 
        var elements = document.querySelectorAll("body > ol > img");
        for(i = 0; i < 8; i++) {
            String.prototype.filename=function(extension){
                var s= this.replace(/\\/g, '/');
                s= s.substring(s.lastIndexOf('/')+ 1);
                return s;
            }
            result.push(elements[i].src.filename());
        } 
            
         if (result.toString()==imgs.toString()) {
            alert("Richtig!");
        }
        else alert("Nicht richtig!");
    }
});

document.getElementById("new_btn").onclick = function() {
    randomObj();
};