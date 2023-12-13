let changeImage2String= ()=>{
    let fileImage=document.getElementById('file1').files[0];

   var reader=new FileReader();
    reader.readAsDataURL(fileImage)
    reader.addEventListener("load",()=>{
        document.getElementById("click").innerHTML=reader.result
      
    })
    //document.getElementById("abc").innerHTML="dummmyString"
    return false;
}


let str2image=()=>{

    let imgstr = document.getElementById('click').innerHTML
    var img2 = document.getElementById("img2");
    img2.src = imgstr

}