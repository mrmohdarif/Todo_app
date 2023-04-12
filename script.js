let data=[]
content=[]
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
        content:{
            id:new Date().getTime().toString(),
        }
        
    }
    if(cardinputText)
    {
       data.push(card)
       renderCards()
       console.log(data);
    }
    else
    {
        alert("Plese Enter Text");
    }
    document.getElementById("text-input").value=""
    closeAddCardPop();
}

//add card in window
function renderCards(){
    let cardContainer=document.querySelector(".card-container");
    let child="";
    for(i=0;i<data.length;i++)
    {
        child+=`<div class="static" id=card_${data[i].id}>
        <h2 class="card">${data[i].cardTitle}</h2>
        <hr>
        <ul id=content_list_${data[i].id}>
        
        </ul>
        <div class="btn1" >
            <button onclick="deleteCard(${data[i].id})" >D(Delete)</button>
            <button onclick="showAddContentcardPop(${data[i].id})">+(Add)</button>
        </div>       
    </div>`
    }
    cardContainer.innerHTML=child;
}

function deleteCard(id){
    cardContainer=document.querySelector(".card-container")
   cardId=`card_${id}`;
   let card=document.getElementById(cardId)
   card.parentNode.removeChild(card)
   data = data.filter((item) => item.id !== cardId);
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
          let textNode=document.createTextNode(contentText)
          newLi.appendChild(textNode);
          
          console.log(uL);
            uL.appendChild(newLi)
            removeAddcontentcardPop()
            newLi.addEventListener('click',function(){
                newLi.style.textDecoration="line-through"
            })
    }

    else
{
    alert("Please add task name");
}
}

