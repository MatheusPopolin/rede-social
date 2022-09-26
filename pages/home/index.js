function createCardPost(idPost){
    let idUser = (posts[idPost-1].user)-1;
    let cardPost = document.createElement("li");
    cardPost.innerHTML =   `<div class="user">
                                <img src="${users[idUser].img}" alt="">
                                <div>
                                <h2 class="title_2 color_grey_1">${users[idUser].user}</h2>
                                <h3 class="text_2 color_grey_2">${users[idUser].stack}</h3>
                                </div>
                            </div>
                            <h2  class="title_1 color_grey_1">${posts[idPost-1].title}</h2>
                            <p class="text_1 color_grey_2">${posts[idPost-1].text}</p>`;
    let cardPostFooter = document.createElement("div");
    cardPostFooter.classList.add("posts_footer");
    let buttonOpenPost = document.createElement("button");
    buttonOpenPost.classList.add("button_grey_1");
    buttonOpenPost.innerText = "Abrir post";
    buttonOpenPost.addEventListener("click", function(){
        document.querySelector("main").appendChild(createModalPost(idPost));
    })
    let likeContainer = document.createElement("div");
    likeContainer.classList.add("like_container");
    likeContainer.innerHTML = ` <img src="/assets/img/like.png" alt="">
                                <p class="text_2">0</p>`;
    cardPostFooter.append(buttonOpenPost, likeContainer);
    cardPost.appendChild(cardPostFooter);
    return cardPost;    
}

function showPosts(posts){
    let postsList = document.getElementById("postsList");
    for(let i=0; i<posts.length; i++){
        postsList.appendChild(createCardPost(posts[i].id_post));        
    }
} 
showPosts(posts);

function createCardSugest(idUser){
    let cardSugest = document.createElement("li");
    cardSugest.innerHTML =   `<div class="user">
                                <img src="${users[idUser].img}" alt="">
                                <div>
                                <h2 class="title_2 color_grey_1">${users[idUser].user}</h2>
                                <h3 class="text_2 color_grey_2">${users[idUser].stack}</h3>
                                </div>
                            </div>`;                        
    let buttonFollow = document.createElement("button");
    buttonFollow.classList.add("button_outline_medium");
    buttonFollow.classList.add("text_2");
    buttonFollow.innerText = "Seguir";    
    cardSugest.append(buttonFollow);
    buttonFollow.addEventListener("click",function(event){
        event.path[0].classList.toggle("active");
        if(event.path[0].innerText == "Seguindo"){
            event.path[0].innerText = "Seguir"
        }
        else{
            event.path[0].innerText = "Seguindo" 
        }                     
    });
    return cardSugest;    
}

function showSugests(list){
    let sugestsList = document.getElementById("sugestsList");
    for(let i=0; i<list.length; i++){
        sugestsList.appendChild(createCardSugest(list[i]-1));        
    }
}
showSugests(sugestUsers);

function createModalPost(idPost){
    let idUser = (posts[idPost-1].user)-1;
    let modalContainer = document.createElement("div");
    modalContainer.classList.add("modal_container");
    let modalDefault = document.createElement("section");
    modalDefault.classList.add("modal_default");
    modalDefault.innerHTML =   `<div class="user">
                                    <img src="${users[idUser].img}" alt="">
                                    <div>
                                    <h2 class="title_2 color_grey_1">${users[idUser].user}</h2>
                                    <h3 class="text_2 color_grey_2">${users[idUser].stack}</h3>
                                    </div>
                                </div>
                                <h2  class="title_1 color_grey_1">${posts[idPost-1].title}</h2>
                                <p class="text_1 color_grey_2">${posts[idPost-1].text}</p>`;                        
    let buttonClose = document.createElement("button");
    buttonClose.classList.add("button_close");
    buttonClose.classList.add("title_1");
    buttonClose.innerText = "X";   
    buttonClose.addEventListener("click",function(event){
        (event.path[2].remove());
    })
    modalDefault.appendChild(buttonClose);
    modalContainer.appendChild(modalDefault);
    return modalContainer;
}