var uiController = (function () {})();

var financeController = (function () {})();

var appController = (function (uiCtrl, fnCtrl) {
  var ctrlAddItem = function () {};
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
    // 1.Оруулах өгөгдлийг дэлгэцээс олж авах

    // 2.Олж авсан өгөгдлүүдээ санхүүгийн контролерт дамжуулж тэнд хадгалах

    // 3.Өгөгдлүүдээ веб дээрээ тохирох хэсэгт гаргах

    // 4.Төсвийг тооцоолно

    // 5.Эцсийн үлдэгдэл,тооцоог дэлгэцэнд гаргана
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
