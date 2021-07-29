var menuIcon = function (cell, formatterParams) { //plain text value
    return "<span class='h-8 w-8 rounded-sm border border-gray-300 flex items-center justify-center text-blue-900'><i class='fas fa-ellipsis-v'></i></span>";
};

var eyeIcon = function (cell, formatterParams) { //plain text value
    return "<span class='h-8 w-8 rounded-sm border border-gray-300 flex items-center justify-center text-blue-900'><i class='far fa-eye'></i></span>";
};

var mailIcon = function (cell, formatterParams) { //plain text value
    return "<span class='h-8 w-8 rounded-sm border border-gray-300 flex items-center justify-center text-blue-900'><i class='far fa-envelope'></i></span>";
};

var tabledata = [
    { id: 1, mauso: "02GTTTO/001 - BH/18E", ngayhoadon: "31/01/2020", sohoadon: "012345678", khachhang: "Công ty TNHH Du lịch Thăng Long", giatrihoadon: "432,450,280 đ", trangthai: "Hóa đơn thay thế - <span class='text-blue-600'>Hóa đơn gốc 0000016</span>" },
    { id: 2, mauso: "02GTTTO/001 - BH/18E", ngayhoadon: "31/01/2020", sohoadon: "012345678", khachhang: "Công ty TNHH Du lịch Thăng Long", giatrihoadon: "432,450,280 đ", trangthai: "<span class='text-red-600'>Hóa đơn xóa bỏ</span> - Hóa đơn gốc 0000016" },
    { id: 3, mauso: "02GTTTO/001 - BH/18E", ngayhoadon: "31/01/2020", sohoadon: "012345678", khachhang: "Công ty TNHH Du lịch Thăng Long", giatrihoadon: "432,450,280 đ", trangthai: "Hóa đơn gốc" },
    { id: 4, mauso: "02GTTTO/001 - BH/18E", ngayhoadon: "31/01/2020", sohoadon: "012345678", khachhang: "Công ty TNHH Du lịch Thăng Long", giatrihoadon: "432,450,280 đ", trangthai: "Hóa đơn gốc" },
    { id: 5, mauso: "02GTTTO/001 - BH/18E", ngayhoadon: "31/01/2020", sohoadon: "012345678", khachhang: "Công ty TNHH Du lịch Thăng Long", giatrihoadon: "432,450,280 đ", trangthai: "Hóa đơn gốc" },
    { id: 6, mauso: "02GTTTO/001 - BH/18E", ngayhoadon: "31/01/2020", sohoadon: "012345678", khachhang: "Công ty TNHH Du lịch Thăng Long", giatrihoadon: "432,450,280 đ", trangthai: "Hóa đơn gốc" },
    { id: 7, mauso: "02GTTTO/001 - BH/18E", ngayhoadon: "31/01/2021", sohoadon: "012345679", khachhang: "Công ty TNHH Du lịch Thăng Long", giatrihoadon: "432,450,281 đ", trangthai: "Hóa đơn gốc" },
    { id: 8, mauso: "02GTTTO/001 - BH/18E", ngayhoadon: "31/01/2020", sohoadon: "012345678", khachhang: "Công ty TNHH Du lịch Thăng Long", giatrihoadon: "432,450,280 đ", trangthai: "Hóa đơn gốc" },
    { id: 9, mauso: "02GTTTO/001 - BH/18E", ngayhoadon: "31/01/2020", sohoadon: "012345678", khachhang: "Công ty TNHH Du lịch Thăng Long", giatrihoadon: "432,450,280 đ", trangthai: "Hóa đơn gốc" },
    { id: 10, mauso: "02GTTTO/001 - BH/18E", ngayhoadon: "31/01/2020", sohoadon: "012345678", khachhang: "Công ty TNHH Du lịch Thăng Long", giatrihoadon: "432,450,280 đ", trangthai: "Hóa đơn gốc" },
    { id: 11, mauso: "02GTTTO/001 - BH/18E", ngayhoadon: "31/01/2020", sohoadon: "012345678", khachhang: "Công ty TNHH Du lịch Thăng Long", giatrihoadon: "432,450,280 đ", trangthai: "Hóa đơn gốc" },
];

//Build Tabulator
var table = new Tabulator("#example-table", {
    data: tabledata,
    // layout: "fitColumns",
    height: "311px",
    layout: "fitDataStretch",
    pagination: "local",
    paginationSize: 6,
    paginationSizeSelector: [3, 6, 8, 10],
    movableColumns: true,
    columns: [
        {
            formatter: "rowSelection", titleFormatter: "rowSelection", width: 40, hozAlign: "center", headerSort: false, cellClick: function (e, cell) {
                cell.getRow().toggleSelect();
            }
        },
        { title: "Mẫu số - Ký hiệu", field: "mauso", width: 210, hozAlign: "left", formatter: "html" },
        { title: "Ngày hóa đơn", field: "ngayhoadon", width: 150, hozAlign: "center", sorter: "date", formatter: "html" },
        { title: "Số hóa đơn", field: "sohoadon", width: 130, hozAlign: "center", sorter: "number", formatter: "html" },
        { title: "Tên đơn vị / khách hàng", field: "khachhang", hozAlign: "left", width: 352, formatter: "html" },
        { title: "Giá trị hóa đơn", field: "giatrihoadon", width: 170, hozAlign: "right", sorter: "number", formatter: "html" },
        { title: "Trạng thái", field: "trangthai", width: 300, hozAlign: "left", formatter: "html" },
        { formatter: mailIcon, width: 56, frozen: true, hozAlign: "center", cellClick: function (e, cell) { alert("Printing row data for: " + cell.getRow().getData().name) } },
        { formatter: eyeIcon, width: 56, frozen: true, hozAlign: "center", cellClick: function (e, cell) { alert("Printing row data for: " + cell.getRow().getData().name) } },
        { formatter: menuIcon, width: 56, frozen: true, hozAlign: "center", cellClick: function (e, cell) { alert("Printing row data for: " + cell.getRow().getData().name) } },
    ],
});

$("#handle-btn").click(function (e) {
    $("#handle-menu").fadeToggle();
    e.stopPropagation();
});

$("#handle-menu").click(function (e) {
    e.stopPropagation();
});

$(document).click(function () {
    $("#handle-menu").hide();
});

$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'right'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});
