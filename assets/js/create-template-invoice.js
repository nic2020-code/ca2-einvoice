const tabItems = document.querySelectorAll('#tab .btn');
const tabPanes = document.querySelectorAll("#tab-content .tab-pane");


tabItems.forEach((tab) => {
    tab.addEventListener("click", function (e) {
        e.preventDefault();
        tabItems.forEach(tab => {
            tab.classList.remove('btn-active');
            tab.classList.add('btn-deactive');
        });

        this.classList.remove("btn-deactive");
        this.classList.add("btn-active");

        const activePaneId = this.getAttribute('href');
        tabPanes.forEach(tabPane => {
            tabPane.classList.add('hidden');
            tabPane.classList.remove('block');
        });
        const activePane = document.querySelector(activePaneId);
        activePane.classList.remove('hidden');
        activePane.classList.add('block');
    })
});