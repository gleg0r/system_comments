class InputListener {
    input: HTMLElement;
    constructor(input: HTMLElement) {
        this.input = input;
    }
    deleteText() {
        this.input.innerHTML = "";
    }
    
    resetText() {
        this.input.innerHTML = "Введите текст сообщения";
    }
}

class BtnListener{
    btn: HTMLElement;
    constructor(btn) {
        this.btn = btn;
    }
    changeColorToActive() {
        this.btn.style.background = '#ABD873';
    }
    changeColorToDisabled() {
        this.btn.style.background = '#A1A1A1';
    }
    sendComment() {
        const container = document.createElement('div');
        container.className = "block-comments-user__container"
        const img = document.createElement("img");
        img.src = "./src/img/max.png"
        img.className = "block-comments-user__img";
        const textContainer = document.createElement("div");
        textContainer.className = "block-comments-user__textContainer";
        const headerText = document.createElement("div");
        headerText.className = "block-comments-user__header";
        const name: string = document.querySelector(".block-comments-form__userName")?.innerHTML;
        const userName = document.createElement("p");
        userName.innerHTML = name;
        userName.className = 'block-comments-user__name'
        const date = new Date();
        const dateComment = document.createElement("p");
        dateComment.innerHTML = date.getDate() + '.' + (date.getMonth()+1) + " " + ((date.getHours() < 10)?"0":"") + date.getHours() +  ":" + ((date.getMinutes()<10)?"0":"") + date.getMinutes();
        dateComment.className = "block-comments-user__date";
        headerText.appendChild(userName);
        headerText.appendChild(dateComment);
        textContainer.appendChild(headerText);
        const mainComment = document.createElement("div");
        mainComment.className = "block-comments-user__main";
        const commentText = document.createElement("p");
        commentText.innerHTML = inputDOM?.innerHTML;
        commentText.className = "block-comments-user__text";
        mainComment.appendChild(commentText);
        textContainer.appendChild(mainComment);
        const actions = document.createElement("div");
        actions.className = "block-comments-user__actions";
        const replyImage = document.createElement("img");
        replyImage.className = "block-comments-user__replyImg";
        replyImage.src = "./src/img/reply.svg";
        actions.appendChild(replyImage);
        const replyText = document.createElement("p");
        replyText.className = "block-comments-user__replyText";
        replyText.innerHTML = "Ответить"; 
        actions.appendChild(replyText);
        const favouriteImg = document.createElement("img");
        favouriteImg.className = "block-comments-user__favouriteImg";
        favouriteImg.src = "./src/img/toFavourite.svg";
        actions.appendChild(favouriteImg);
        const favouriteText = document.createElement("p");
        favouriteText.className = "block-comments-user__favouriteText";
        favouriteText.innerHTML = "В избранное"; 
        actions.appendChild(favouriteText);
        const minusBtn = document.createElement("button");
        minusBtn.className = "block-comments-user__minus";
        minusBtn.innerHTML = "-";
        actions.appendChild(minusBtn)
        const rating = document.createElement("p");
        rating.className = "block-comments-user__rating";
        rating.innerHTML = "0"
        actions.appendChild(rating);
        const plusBtn = document.createElement("button");
        plusBtn.className = "block-comments-user__plus"
        plusBtn.innerHTML = "+";
        actions.appendChild(plusBtn);
        container.appendChild(img);
        container.appendChild(textContainer);
        container.appendChild(actions);
        comments?.appendChild(container);
        Input.resetText();
        Button.changeColorToDisabled();
        inputDOM?.addEventListener('click', deleteInnerHtml)
    }
    
}

const inputDOM: HTMLElement = document.querySelector(".block-comments-form__input");
const btnDOM:HTMLElement = document.querySelector(".block-comments-form__btn");
const comments: HTMLElement = document.querySelector(".block-comments-users");

const Input = new InputListener(inputDOM);
const Button = new BtnListener(btnDOM);

function deleteInnerHtml(): void {
    Input.deleteText();
    
    inputDOM?.removeEventListener('click', deleteInnerHtml)
}

inputDOM?.addEventListener('click', deleteInnerHtml)

inputDOM?.addEventListener('keyup', () => {
    if(inputDOM?.innerHTML != '' && inputDOM?.textContent?.length <= 1000) {
        Button.changeColorToActive();
    } else {
        Button.changeColorToDisabled();
    }
})

btnDOM?.addEventListener('click', Button.sendComment)