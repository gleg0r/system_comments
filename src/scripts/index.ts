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

btnDOM?.addEventListener('click', (): void => {
    const container = document.createElement('div');
    const img = document.createElement("img");
    img.src = "./src/img/max.png"
    img.className = "block-comment-user__img";
    const name: string = document.querySelector(".block-comments-form__userName")?.innerHTML;
    const userName = document.createElement("p");
    userName.innerHTML = name;
    userName.className = 'block-comment-user__name'
    const date = new Date();
    const dateComment = document.createElement("p");
    dateComment.innerHTML = date.getDate() + '.' + (date.getMonth()+1) + " " + ((date.getHours() < 10)?"0":"") + date.getHours() +  ":" + ((date.getMinutes()<10)?"0":"") + date.getMinutes();
    dateComment.className = "block-comment-user__date";
    const commentText = document.createElement("p");
    commentText.innerHTML = inputDOM?.innerHTML;
    commentText.className = "block-comment-user__text";
    container.appendChild(img);
    container.appendChild(userName);
    container.appendChild(dateComment);
    container.appendChild(commentText);
    comments?.appendChild(container);
    Input.resetText();
    Button.changeColorToDisabled();
    inputDOM?.addEventListener('click', deleteInnerHtml)
})