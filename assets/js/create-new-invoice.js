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
];

var table = new Tabulator("#example-table", {
    data: tabledata,
    columns: [
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Progress", field: "progress", sorter: "number" },
        { title: "Gender", field: "gender" },
        { title: "Rating", field: "rating" },
        { title: "Favourite Color", field: "col" },
        { title: "Date Of Birth", field: "dob", hozAlign: "center" },
    ],
});