$("#handle-btn").click(function (e) {
    $("#handle-menu").fadeToggle();
    e.stopPropagation();
});

// $("#handle-menu").click(function (e) {
//     e.stopPropagation();
// });

$(document).click(function () {
    $("#handle-menu").hide();
});

//Xoa bo hoa don modal-popup

$("#delete-modal-btn").click(function () {
    $("#delete-modal").removeClass("hidden");
});

$("#close-delete-btn").click(function () {
    $("#delete-modal").addClass("hidden");
});

$("#open-modal2").click(function () {
    $("#delete-modal").addClass("hidden");
    $("#check-modal").removeClass("hidden");
});

$("#close-check-btn").click(function () {
    $("#check-modal").addClass("hidden");
});

$("#open-done-modal").click(function () {
    $("#check-modal").addClass("hidden");
    $("#done-popup").removeClass("hidden");
});

$("#close-popup-btn").click(function () {
    $("#done-popup").addClass("hidden");
});

$("#close-popup").click(function () {
    $("#done-popup").addClass("hidden");
});

//Thay the hoa don modal-popup


//Datepicker

$(function () {
    $('input[name="birthday"]').daterangepicker({
        opens: 'right',
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'), 10)
    });
});

$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'right'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

//Tabular

var menuIcon = function (cell, formatterParams) { //plain text value
    return "<span class='h-8 w-8 rounded-sm border border-gray-300 flex items-center justify-center text-blue-900'><i class='fas fa-ellipsis-v'></i></span>";
};

var eyeIcon = function (cell, formatterParams) { //plain text value
    return "<span class='h-8 w-8 rounded-sm border border-gray-300 flex items-center justify-center text-blue-900'><i class='far fa-eye'></i></span>";
};

var tabledata1 = [
    { id: 1, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>0000018</span><br><span class='text-gray-400'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>", state: "<span class='text-sm text-red-600'>Hóa đơn xóa bỏ</span><br><span class='text-sm text-blue-600'>Hóa đơn gốc - 0000016</span>" },
    { id: 2, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>0000018</span><br><span class='text-gray-400'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>" },
    { id: 3, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>0000018</span><br><span class='text-gray-400'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>" },
    { id: 4, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>0000018</span><br><span class='text-gray-400'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>" },
];

//Build Tabulator
var table = new Tabulator("#delete-table", {
    data: tabledata1,
    // layout: "fitDataFill",
    layout: "fitColumns",
    // pagination: "local",
    // paginationSize: 6,
    // paginationSizeSelector: [3, 6, 8, 10],
    // movableColumns: true,
    columns: [
        {
            formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "center", width: 50, headerSort: false, cellClick: function (e, cell) {
                cell.getRow().toggleSelect();
            }
        },
        { title: "Người/ Đơn vị mua hàng", field: "name", width: 300, formatter: "textarea" },
        { title: "Mẫu/ Ký hiệu", field: "age", width: 150, hozAlign: "left", sorter: "number", formatter: "textarea" },
        { title: "Số Hóa đơn / Ngày", field: "col", width: 200, formatter: "html" },
        { title: "Giá trị", field: "dob", width: 150, hozAlign: "right", sorter: "date", formatter: "html" },
        {
            title: "Trạng thái", field: "state", width: 200, hozAlign: "left", sorter: "date", formatter: "html"
        },
        { title: "", field: "", hozAlign: "right", sorter: "date", formatter: "textarea" },
        { formatter: eyeIcon, width: 45, frozen: true, hozAlign: "center", cellClick: function (e, cell) { alert("Printing row data for: " + cell.getRow().getData().name) } },
        { formatter: menuIcon, width: 45, frozen: true, hozAlign: "center", cellClick: function (e, cell) { alert("Printing row data for: " + cell.getRow().getData().name) } },
    ],
});

var eyeModalIcon = function (cell, formatterParams) { //plain text value
    return "<span class='h-8 w-8 rounded-sm border border-gray-300 flex items-center justify-center text-blue-900'><i class='far fa-eye'></i></span>";
};

var tabledata2 = [
    { id: 1, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>0000018</span><br><span class='text-gray-400'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>", state: "<span class='text-sm text-red-600'>Hóa đơn xóa bỏ</span><br><span class='text-sm text-blue-600'>Hóa đơn gốc - 0000016</span>" },
    { id: 2, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>0000018</span><br><span class='text-gray-400'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>" },
    { id: 3, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>0000018</span><br><span class='text-gray-400'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>" },
    { id: 4, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>0000018</span><br><span class='text-gray-400'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>" },
];

//Build Tabulator
var table = new Tabulator("#delete-modal-table", {
    data: tabledata2,
    height: '256px',
    layout: "fitData",
    // pagination: "local",
    // paginationSize: 6,
    // paginationSizeSelector: [3, 6, 8, 10],
    // movableColumns: true,
    columns: [
        {
            formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "center", width: 50, headerSort: false, cellClick: function (e, cell) {
                cell.getRow().toggleSelect();
            }
        },
        { title: "Người/ Đơn vị mua hàng", field: "name", width: 300, formatter: "textarea" },
        { title: "Mẫu/ Ký hiệu", field: "age", width: 200, hozAlign: "left", sorter: "number", formatter: "textarea" },
        { title: "Số Hóa đơn / Ngày", field: "col", width: 200, formatter: "html" },
        { title: "Giá trị", field: "dob", width: 150, hozAlign: "right", sorter: "date", formatter: "html" },
        { formatter: eyeModalIcon, width: 45, hozAlign: "center", cellClick: function (e, cell) { alert("Printing row data for: " + cell.getRow().getData().name) } },
    ],
});

var tabledata3 = [
    { id: 1, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>Chưa cấp số</span><br><span class='text-red-600'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>", state: "<span>Hóa đơn chưa phát hành</span><br><span class='text-sm text-blue-600'>Hóa đơn gốc - 0000016</span>" },
    { id: 2, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "0000018<br>02/06/2020", dob: "<span class='font-medium'>1,450,280 đ</span>" },
    { id: 3, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "0000018<br>02/06/2020", dob: "<span class='font-medium'>1,450,280 đ</span>" },
    { id: 4, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "0000018<br>02/06/2020", dob: "<span class='font-medium'>1,450,280 đ</span>" },
];

//Build Tabulator
var table = new Tabulator("#change-table", {
    data: tabledata3,
    // layout: "fitDataFill",
    layout: "fitColumns",
    // pagination: "local",
    // paginationSize: 6,
    // paginationSizeSelector: [3, 6, 8, 10],
    // movableColumns: true,
    columns: [
        {
            formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "center", width: 50, headerSort: false, cellClick: function (e, cell) {
                cell.getRow().toggleSelect();
            }
        },
        { title: "Người/ Đơn vị mua hàng", field: "name", width: 300, formatter: "textarea" },
        { title: "Mẫu/ Ký hiệu", field: "age", width: 150, hozAlign: "left", sorter: "number", formatter: "textarea" },
        { title: "Số Hóa đơn / Ngày", field: "col", width: 200, formatter: "html" },
        { title: "Giá trị", field: "dob", width: 150, hozAlign: "right", sorter: "date", formatter: "html" },
        {
            title: "Trạng thái", field: "state", width: 200, hozAlign: "left", sorter: "date", formatter: "html"
        },
        { title: "", field: "", hozAlign: "right", sorter: "date", formatter: "textarea" },
        { formatter: eyeIcon, width: 45, frozen: true, hozAlign: "center", cellClick: function (e, cell) { alert("Printing row data for: " + cell.getRow().getData().name) } },
        { formatter: menuIcon, width: 45, frozen: true, hozAlign: "center", cellClick: function (e, cell) { alert("Printing row data for: " + cell.getRow().getData().name) } },
    ],
});

var tabledata4 = [
    { id: 1, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>0000018</span><br><span class='text-gray-400'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>", state: "<span class='text-sm text-red-600'>Hóa đơn hủy</span><br><span class='text-sm text-blue-600'>Hóa đơn gốc - 0000016</span>" },
    { id: 2, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>0000018</span><br><span class='text-gray-400'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>" },
    { id: 3, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>0000018</span><br><span class='text-gray-400'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>" },
    { id: 4, name: "Công ty TNHH công nghệ Thái Lan\n2400651899-002", age: "1C21TAA/028\nBH/18E", col: "<span class='font-medium'>0000018</span><br><span class='text-gray-400'>02/06/2020</span>", dob: "<span class='font-medium'>1,450,280 đ</span>" },
];

//Build Tabulator
var table = new Tabulator("#cancel-table", {
    data: tabledata4,
    // layout: "fitDataFill",
    layout: "fitColumns",
    // pagination: "local",
    // paginationSize: 6,
    // paginationSizeSelector: [3, 6, 8, 10],
    // movableColumns: true,
    columns: [
        {
            formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "center", width: 50, headerSort: false, cellClick: function (e, cell) {
                cell.getRow().toggleSelect();
            }
        },
        { title: "Người/ Đơn vị mua hàng", field: "name", width: 300, formatter: "textarea" },
        { title: "Mẫu/ Ký hiệu", field: "age", width: 150, hozAlign: "left", sorter: "number", formatter: "textarea" },
        { title: "Số Hóa đơn / Ngày", field: "col", width: 200, formatter: "html" },
        { title: "Giá trị", field: "dob", width: 150, hozAlign: "right", sorter: "date", formatter: "html" },
        {
            title: "Trạng thái", field: "state", width: 200, hozAlign: "left", sorter: "date", formatter: "html"
        },
        { title: "", field: "", hozAlign: "right", sorter: "date", formatter: "textarea" },
        { formatter: eyeIcon, width: 45, frozen: true, hozAlign: "center", cellClick: function (e, cell) { alert("Printing row data for: " + cell.getRow().getData().name) } },
        { formatter: menuIcon, width: 45, frozen: true, hozAlign: "center", cellClick: function (e, cell) { alert("Printing row data for: " + cell.getRow().getData().name) } },
    ],
});