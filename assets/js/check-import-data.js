$("#open-done-modal").click(function () {
    $("#done-popup").removeClass("hidden");
});

$("#close-popup-btn").click(function () {
    $("#done-popup").addClass("hidden");
});

$("#close-popup").click(function () {
    $("#done-popup").addClass("hidden");
});

var tabledata = [
    { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
    { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
    { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
    { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
    { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
    { id: 6, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
    { id: 7, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
    { id: 8, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
    { id: 9, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
    { id: 10, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
];

//Build Tabulator
var table = new Tabulator("#import-table", {
    data: tabledata,
    layout: "fitDataFill",
    height: "311px",
    // pagination: "local",
    // paginationSize: 6,
    // paginationSizeSelector: [3, 6, 8, 10],
    // movableColumns: true,
    columns: [
        {
            formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "center", headerSort: false, cellClick: function (e, cell) {
                cell.getRow().toggleSelect();
            }
        },
        { title: "Name", field: "name", width: 200 },
        { title: "Progress", field: "age", width: 150, hozAlign: "center", sorter: "number" },
        { title: "Favourite Color", field: "col", hozAlign: "center" },
        { title: "Date Of Birth", field: "dob", hozAlign: "center", sorter: "date" },
        { title: "Driver", field: "car", hozAlign: "center", width: 100 },
    ],
});