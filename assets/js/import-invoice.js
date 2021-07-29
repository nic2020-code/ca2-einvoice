(function uploadFileClickHandle() {

    const uploadBtn = document.querySelector("#upload-file-btn");
    const uploadInput = document.querySelector("#upload-file-input");
    const fileName = document.querySelector("#file-name");
    const uploadInputLink = document.querySelector("#upload-file-link");

    uploadBtn.addEventListener("click", function () {
        uploadInput.click();
    });

    uploadInput.addEventListener("change", function () {
        $("#upload-file-btn").hide();
        $("#upload-file-link").show();
        fileName.textContent = this.files[0].name;
    });

    uploadInputLink.addEventListener("click", function () {
        uploadInput.click();
    });
})();

