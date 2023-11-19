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
btnDOM === null || btnDOM === void 0 ? void 0 : btnDOM.addEventListener('click', function () {
    var _a;
    var container = document.createElement('div');
    var img = document.createElement("img");
    img.src = "./src/img/max.png";
    img.className = "block-comment-user__img";
    var name = (_a = document.querySelector(".block-comments-form__userName")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    var userName = document.createElement("p");
    userName.innerHTML = name;
    userName.className = 'block-comment-user__name';
    var date = new Date();
    var dateComment = document.createElement("p");
    dateComment.innerHTML = date.getDate() + '.' + (date.getMonth() + 1) + " " + ((date.getHours() < 10) ? "0" : "") + date.getHours() + ":" + ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes();
    dateComment.className = "block-comment-user__date";
    var commentText = document.createElement("p");
    commentText.innerHTML = inputDOM === null || inputDOM === void 0 ? void 0 : inputDOM.innerHTML;
    commentText.className = "block-comment-user__text";
    container.appendChild(img);
    container.appendChild(userName);
    container.appendChild(dateComment);
    container.appendChild(commentText);
    comments === null || comments === void 0 ? void 0 : comments.appendChild(container);
    Input.resetText();
    Button.changeColorToDisabled();
    inputDOM === null || inputDOM === void 0 ? void 0 : inputDOM.addEventListener('click', deleteInnerHtml);
});
