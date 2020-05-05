var link="";
var generated = flase;
function makeId(){
    var length = Math.floor(Math.random()*(5 - 8)) + 8;
    
    // console.log(length);
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i<length; i++){
        result += characters.charAt(Math.floor(Math.random()*characters.length));
        // console.log(result);
    }
    // console.log(result)
    getPhoto();

function getPhoto(){
    var link = "https://imgur.com/"+result+".gif";
    // console.log(link)
    img = new Image();
    img.src = link;
    $('.images').attr('src', link);  
    //console.log(img);

}
}
function getSize(){
    imageWidth = document.getElementById("image1").clientWidth;
    // console.log(imageWidth);
    if (imageWidth == 161 || imageWidth =="" || imageWidth == 16 || imageWidth == 160){
        // location.reload();
        makeId();
    }else{
        getPhoto();
    }
}



// var i=0;
// $.getJSON(
//     "https://api.imgur.com/3/gallery/random/random/",
//     function(data){

//     var imgurBase = "https://imgur.com/" + data.data[0+i].id + ".gif";
//     $('.image').attr('src', imgurBase);
//     }
// );


// var images;
// var i = 0;


// function getData(data){
//     console.log(data)
//     images = data;
//     imgurBase = "https://imgur.com/" + images.data[i].id + ".gif";
//     console.log(images);
//     console.log(imgurBase);
//     $('.image').attr('src', imgurBase);
//     if(images.data[i].section == ""){
//         change();
        
//     }
// }
// function change(){
//     i ++;
//     console.log(i);
//     var imgurBase = "https://imgur.com/" + images.data[i].id + ".gif";
//     $('.image').attr('src', imgurBase);
//     console.log(imgurBase)
//     if(images.data[i].section == ""){
//         change();    
//     }
//     if(i > 50) {
//         console.log(i);
//         location.reload();
//     }  
// }
// $.ajax({
//     url: "https://api.imgur.com/3/gallery/random/random/",
//     headers: {
//       'Authorization': 'Bearer c6ee161db210cb87d3779298976b10f6a67e6f08'
//     }, 
//     success: getData
// }
// );
