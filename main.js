var r=[]

function  submit(){
     r=[];
    var n1=document.getElementById("name-1").value;
    var n2=document.getElementById("name-2").value;
    var n3=document.getElementById("name-3").value;
    var n4=document.getElementById("name-4").value;
    var n5=document.getElementById("name-5").value;
    var n6=document.getElementById("name-6").value;
    
  r.push(n1) 
  r.push(n2) 
  r.push(n3)  
  r.push(n4)
  r.push(n5)
  r.push(n6)
  
  
  console.log(r)  
  document.getElementById("output").innerHTML=r
  document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    r.sort() 
    console.log(r)  
  document.getElementById("output").innerHTML=r


}