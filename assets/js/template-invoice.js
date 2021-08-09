$("#show-menu-btn").click(function () {
    $("#show-menu-btn").toggleClass("rotate-180");
    $("#right-panel").toggleClass("left-64.5");
    $("#right-panel").toggleClass("left-0");
});

var menuIcon = function (cell, formatterParams) { //plain text value
    return "<span class='h-8 w-8 rounded-sm border border-gray-300 flex items-center justify-center text-blue-900'><i class='fas fa-trash'></i></span>";
};

var eyeIcon = function (cell, formatterParams) { //plain text value
    return "<span class='h-8 w-8 rounded-sm border border-gray-300 flex items-center justify-center text-blue-900'><i class='far fa-eye'></i></span>";
};

var tabledata = [
    { id: 1, mauso: "Hồ sơ 001", ngayhoadon: "31/01/2020", sohoadon: "QĐAD00088", khachhang: "TBPH00088", giatrihoadon: "Chưa nộp cho CQ Thuế" },
    { id: 2, mauso: "Hồ sơ 002", ngayhoadon: "31/01/2020", sohoadon: "QĐAD00088", khachhang: "TBPH00088", giatrihoadon: "Chưa nộp cho CQ Thuế" },
    { id: 3, mauso: "Hồ sơ 003", ngayhoadon: "31/01/2020", sohoadon: "QĐAD00088", khachhang: "TBPH00088", giatrihoadon: "Chưa nộp cho CQ Thuế" },
];

//Build Tabulator
var table = new Tabulator("#example-table", {
    data: tabledata,
    // layout: "fitColumns",
    layout: "fitDataStretch",
    columns: [
        { title: "Hồ sơ thông báo", field: "mauso", width: 170, hozAlign: "center", formatter: "html" },
        { title: "Ngày tạo", field: "ngayhoadon", width: 120, hozAlign: "left", sorter: "date", formatter: "html" },
        { title: "Quyết định sử dụng", field: "sohoadon", width: 200, hozAlign: "left", sorter: "number", formatter: "html" },
        { title: "Thông báo phát hành", field: "khachhang", hozAlign: "left", width: 200, formatter: "html" },
        { title: "Trạng thái", field: "giatrihoadon", width: 450, hozAlign: "left", sorter: "number", formatter: "html" },
        { formatter: eyeIcon, width: 56, frozen: true, hozAlign: "center", cellClick: function (e, cell) { alert("Printing row data for: " + cell.getRow().getData().name) } },
        { formatter: menuIcon, width: 56, frozen: true, hozAlign: "center", cellClick: function (e, cell) { alert("Printing row data for: " + cell.getRow().getData().name) } },
    ],
});

