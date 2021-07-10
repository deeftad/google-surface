var result= document.querySelector('.search-box');
var search=document.querySelector('.search-btn');


function NoBlank() {
    if(result.value==""){
        window.location.reload();
    }
}

search.addEventListener("click",function() {
   let url='https://www.google.com/search?q='+result.value;
   window.open(url,'_self');
   NoBlank();
}
)



result.addEventListener("keypress",function(event){
    if(event.keyCode===13){
        event.preventDefault();
        search.click();
    }
})
