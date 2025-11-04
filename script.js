document.getElementById("downloadBtn").addEventListener("click", function () {
    const status = document.getElementById("status");
    status.innerText = "İndirme başlatıldı...";
    setTimeout(() => {
        status.innerText = "BTL is downloading..";
    }, 1500);
});
