const title=document.getElementById("title");
const dec=document.getElementById("Description");
const subbtn=document.getElementById("btn");
const maindiv=document.getElementById("taskdiv");
const arr=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[{title:"Sample Task",Description:"Sample Description for the Task will be given Here"}];
Show();
function Show()
{
    for(let i=0;i<arr.length;i++)
    {
        const text1=arr[i].title;
        const para1=document.createElement("p");
        para1.innerText=text1;
        const text2=arr[i].Description;
        const para2=document.createElement("span");
        para2.innerText=text2;
        const div=document.createElement('div');
        div.setAttribute("class","tasks");
        div.append(para1);
        const delbtn=document.createElement("button");
        delbtn.innerHTML="x";
        delbtn.addEventListener("click",()=>{
            deleteall();
            arr.splice(i,1);
            localStorage.setItem("tasks",JSON.stringify(arr));
            Show();
        })
        delbtn.setAttribute("id","delbtn");
        div.append(delbtn);
        div.append(para2);
        maindiv.append(div);
    }
}
function deleteall()
{
    
   arr.forEach((value) => {
    const a=document.querySelector(".tasks");
    a.remove();
   });
}
subbtn.addEventListener("click",(event)=>{
    event.preventDefault();
    deleteall();
    console.log("working");
      arr.push({title:title.value,Description:dec.value});

      Show()
    //console.log(arr);
    localStorage.setItem("tasks",JSON.stringify(arr));
  //  console.log(localStorage);
})