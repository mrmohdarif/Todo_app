let data=[]
let cardId=0;
//show add card
function showAddCardPop()
{
    let Add_card_popup1=document.querySelector(".card-popup1")
    Add_card_popup1.style.display="block";
}
// close add card
function closeAddCardPop()
{
    let Close_card_popup1=document.querySelector(".card-popup1");
    Close_card_popup1.style.display="none";
}
//handle card
function handleAddCard()
{
    let cardinputText=document.getElementById("text-input").value;
    
    let card={
        id:new Date().getTime().toString(),
        cardTitle:cardinputText,
        content:[],  
    }
    console.log("card object",card);

    if(cardinputText)
    {
       data.push(card)
    //    renderCards()
       console.log("push object in array",data);
           renderCards()
           
    }
    else
    {
        alert("Plese Enter Text");
    }
    document.getElementById("text-input").value=""
    closeAddCardPop();
}
function contentrender(){
for( let i=0;i<data.length;i++)
{
    let ulElement=document.getElementById(`content_list_${data[i].id}`)
    let child=""
    for(let j=0;j<data[i].content.length;j++)
    {
      const content=data[i].content[j]
      child+=`<li id="content_${content.id}" class="${content.done ? "checked":""}" onclick="doneTask(${content.id},${data[i].id})">${content.cardText}</li>`

    }
    ulElement.innerHTML=child
}
}
//add card in window
function renderCards(){
    let cardContainer=document.querySelector(".card-container");
    let child="";
    for(i=0;i<data.length;i++)
    {
        child+=`<div class="static" id=card_${data[i].id} onclick="external_card()" >
        <h2 class="card">${data[i].cardTitle}</h2>
        <hr>
         <ul id="content_list_${data[i].id}">
         
         </ul>
        <div class="btn1" >
            <button onclick="deleteCard(${data[i].id})"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="Delete-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          </button>
            <button onclick="showAddContentcardPop(${data[i].id})"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="Add-icons">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </button>
        </div>       
    </div>`
    }
    cardContainer.innerHTML=child;
    contentrender()
    console.log(child);
}

function deleteCard(id){
    cardContainer=document.querySelector(".card-container")
   cardId=`card_${id}`;
   let card=document.getElementById(cardId)
   console.log(card);
   card.parentNode.removeChild(card)
   data = data.filter((item) => item.id !== cardId);
   console.log(data); 
   console.log("delete card",cardId);
}
function showAddContentcardPop(id)
{
    let popup=document.getElementById("card-popup2")
    popup.style.display="block";
    cardId=id;
    console.log("show card is",cardId);
}
function removeAddcontentcardPop(){
    let popup=document.getElementById("card-popup2")
    popup.style.display="none";
}
function addContentcardpop()
{
   
     const contentListId =`content_list_${cardId}`
     console.log("content_list id=>",contentListId);
    
    // console.log(Ul);
    let uL=document.getElementById(contentListId)
    console.log("print",uL);
    let contentText=document.getElementById("text-input-2").value;
    console.log(contentText);

    if(contentText)
     {
           document.getElementById("text-input-2").value="";
         newLi= document.createElement("li")
         let listId=new Date().getTime().toString()
          let textNode=document.createTextNode(contentText)
          newLi.id=`content_${listId}`
          newLi.onclick= function(){
            doneTask(listId,cardId)
          }
          newLi.appendChild(textNode); 
          console.log(uL);
            uL.appendChild(newLi)
            newLi.className="checked"
            removeAddcontentcardPop()
            console.log("this is data",data);
            for(let i=0;i<data.length;i++)
            {
                console.log("-------------------------------",data[i].id,cardId);
                if(data[i].id==cardId)
                {
                    let content= {
                        id:new Date().getTime().toString(),
                        cardText:contentText,
                        done:false
                    }
                    data[i].content.push(content)
                }
               
            }
         
            // newLi.addEventListener('click',function(){
            //     newLi.style.textDecoration="line-through"
            // })
    }

    else
{
    alert("Please add task name");
}
}

function doneTask(listId,cardId){
let contentId=`content_${listId}`;
let liElement=document.getElementById(contentId);
liElement.classList.toggle("checked");
for(i=0;i<data.length;i++)
{
    if(data[i].id==cardId)
    {
        for(let j=0;j<data[i].content.length;j++)
        {
             if(data[i].content.id==listId)
             {
                data[i].content[j].done=!data[i].content[j].done
               
             }
        }
    }
}
}
function external_card(){

}