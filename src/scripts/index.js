var InputListener = /** @class */ (function () {
    function InputListener(input) {
        this.input = input;
    }
    InputListener.prototype.deleteText = function () {
        this.input.innerHTML = "";
    };
    InputListener.prototype.resetText = function () {
        this.input.innerHTML = "Введите текст сообщения";
    };
    return InputListener;
}());
var BtnListener = /** @class */ (function () {
    function BtnListener(btn) {
        this.btn = btn;
    }
    BtnListener.prototype.changeColorToActive = function () {
        this.btn.style.background = '#ABD873';
    };
    BtnListener.prototype.changeColorToDisabled = function () {
        this.btn.style.background = '#A1A1A1';
    };
    BtnListener.prototype.sendComment = function () {
        var _a;
        var container = document.createElement('div');
        container.className = "block-comments-user__container";
        var img = document.createElement("img");
        img.src = "./src/img/max.png";
        img.className = "block-comments-user__img";
        var textContainer = document.createElement("div");
        textContainer.className = "block-comments-user__textContainer";
        var headerText = document.createElement("div");
        headerText.className = "block-comments-user__header";
        var name = (_a = document.querySelector(".block-comments-form__userName")) === null || _a === void 0 ? void 0 : _a.innerHTML;
        var userName = document.createElement("p");
        userName.innerHTML = name;
        userName.className = 'block-comments-user__name';
        var date = new Date();
        var dateComment = document.createElement("p");
        dateComment.innerHTML = date.getDate() + '.' + (date.getMonth() + 1) + " " + ((date.getHours() < 10) ? "0" : "") + date.getHours() + ":" + ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes();
        dateComment.className = "block-comments-user__date";
        headerText.appendChild(userName);
        headerText.appendChild(dateComment);
        textContainer.appendChild(headerText);
        var mainComment = document.createElement("div");
        mainComment.className = "block-comments-user__main";
        var commentText = document.createElement("p");
        commentText.innerHTML = inputDOM === null || inputDOM === void 0 ? void 0 : inputDOM.innerHTML;
        commentText.className = "block-comments-user__text";
        mainComment.appendChild(commentText);
        textContainer.appendChild(mainComment);
        var actions = document.createElement("div");
        actions.className = "block-comments-user__actions";
        var replyImage = document.createElement("img");
        replyImage.className = "block-comments-user__replyImg";
        replyImage.src = "./src/img/reply.svg";
        actions.appendChild(replyImage);
        var replyText = document.createElement("p");
        replyText.className = "block-comments-user__replyText";
        replyText.innerHTML = "Ответить";
        actions.appendChild(replyText);
        var favouriteImg = document.createElement("img");
        favouriteImg.className = "block-comments-user__favouriteImg";
        favouriteImg.src = "./src/img/toFavourite.svg";
        actions.appendChild(favouriteImg);
        var favouriteText = document.createElement("p");
        favouriteText.className = "block-comments-user__favouriteText";
        favouriteText.innerHTML = "В избранное";
        actions.appendChild(favouriteText);
        var minusBtn = document.createElement("button");
        minusBtn.className = "block-comments-user__minus";
        minusBtn.innerHTML = "-";
        actions.appendChild(minusBtn);
        var rating = document.createElement("p");
        rating.className = "block-comments-user__rating";
        rating.innerHTML = "0";
        actions.appendChild(rating);
        var plusBtn = document.createElement("button");
        plusBtn.className = "block-comments-user__plus";
        plusBtn.innerHTML = "+";
        actions.appendChild(plusBtn);
        container.appendChild(img);
        container.appendChild(textContainer);
        container.appendChild(actions);
        comments === null || comments === void 0 ? void 0 : comments.appendChild(container);
        Input.resetText();
        Button.changeColorToDisabled();
        inputDOM === null || inputDOM === void 0 ? void 0 : inputDOM.addEventListener('click', deleteInnerHtml);
    };
    return BtnListener;
}());
var inputDOM = document.querySelector(".block-comments-form__input");
var btnDOM = document.querySelector(".block-comments-form__btn");
var comments = document.querySelector(".block-comments-users");
var Input = new InputListener(inputDOM);
var Button = new BtnListener(btnDOM);
function deleteInnerHtml() {
    Input.deleteText();
    inputDOM === null || inputDOM === void 0 ? void 0 : inputDOM.removeEventListener('click', deleteInnerHtml);
}
inputDOM === null || inputDOM === void 0 ? void 0 : inputDOM.addEventListener('click', deleteInnerHtml);
inputDOM === null || inputDOM === void 0 ? void 0 : inputDOM.addEventListener('keyup', function () {
    var _a;
    if ((inputDOM === null || inputDOM === void 0 ? void 0 : inputDOM.innerHTML) != '' && ((_a = inputDOM === null || inputDOM === void 0 ? void 0 : inputDOM.textContent) === null || _a === void 0 ? void 0 : _a.length) <= 1000) {
        Button.changeColorToActive();
    }
    else {
        Button.changeColorToDisabled();
    }
});
btnDOM === null || btnDOM === void 0 ? void 0 : btnDOM.addEventListener('click', Button.sendComment);
