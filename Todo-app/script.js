const inputBox=document.getElementById('input-box')
const container=document.getElementById('list-contaner')

function addTask(){
    if(inputBox.value===''){
        alert('you mst writing someting')
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        container.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span)
    }
    inputBox.value=""
    saveData();
}

container.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();

}else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();


}
},false);

function saveData(){
    localStorage.setItem("data", container.innerHTML)
}

function showTasks(){
    container.innerHTML=localStorage.getItem("data")
}
showTasks();