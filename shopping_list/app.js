// window.addEventListener("click", () => {

//   })


document.querySelector(".phone_button").onclick = function () {
       const $phone = document.querySelector(".container")
       $phone.classList.toggle('-light')
}



    setTimeout(() => {
        main ()
    }, 1000);






function main () {

    document.querySelector('#push').onclick = function(){
        if(document.querySelector('#newitem input').value.length == 0){
            alert("Please Enter an Item")
        }else{
            document.querySelector('#items').innerHTML += `
                <div class="item">
                    <span id="itemname">
                        ${document.querySelector('#newitem input').value}
                    </span>
                    <button class="delete">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            `;
    
            var current_items = document.querySelectorAll(".delete");
            for(var i=0; i<current_items.length; i++){
                current_items[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
        }
    }


}



