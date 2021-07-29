var tabledata1 = [
    { id: 1, hangmuc: "Số thứ tự", cotexcel: "A", thongtinhienthi: "Số thứ tự" },
    { id: 2, hangmuc: "Ngày hóa đơn", cotexcel: "B", thongtinhienthi: "Ngày hóa đơn" },
    { id: 3, hangmuc: "Tên đơn vị / khách hàng", cotexcel: "C", thongtinhienthi: "Tên đơn vị / khách hàng" },
    { id: 4, hangmuc: "Mã số thuế", cotexcel: "D", thongtinhienthi: "Mã số thuế" },
    { id: 5, hangmuc: "Địa chỉ", cotexcel: "E", thongtinhienthi: "Địa chỉ" },
    { id: 6, hangmuc: "Email", cotexcel: "F", thongtinhienthi: "Email" },
    { id: 7, hangmuc: "Số điện thoại", cotexcel: "G", thongtinhienthi: "Số điện thoại" },
    { id: 8, hangmuc: "Hình thức thanh toán", cotexcel: "H", thongtinhienthi: "Hình thức thanh toán" },
];

//Build Tabulator
var table = new Tabulator("#invoice-info", {
    data: tabledata1,
    layout: "fitDataStretch",
    // height: "311px",
    // pagination: "local",
    // paginationSize: 6,
    // paginationSizeSelector: [3, 6, 8, 10],
    // movableColumns: true,
    columns: [
        {
            formatter: "rowSelection", titleFormatter: "rowSelection", width: 40, hozAlign: "center", headerSort: false, cellClick: function (e, cell) {
                cell.getRow().toggleSelect();
            }
        },
        { title: "Hạng mục", field: "hangmuc", hozAlign: "left", width: 222, editor: "input" },
        { title: "Cột Excel", field: "cotexcel", width: 120, hozAlign: "center", editor: "input" },
        { title: "Thông tin hiển thị Excel", field: "thongtinhienthi", hozAlign: "left", editor: "input" },
    ],
});

var tabledata2 = [
    { id: 1, hangmuc: "Tên hàng hóa dịch vụ", cotexcel: "I", thongtinhienthi: "Tên hàng hóa dịch vụ" },
    { id: 2, hangmuc: "Đơn vị tính", cotexcel: "J", thongtinhienthi: "Đơn vị tính" },
    { id: 3, hangmuc: "Số lượng", cotexcel: "K", thongtinhienthi: "Số lượng" },
    { id: 4, hangmuc: "Đơn giá", cotexcel: "L", thongtinhienthi: "Đơn giá" },
    { id: 5, hangmuc: "Thành tiền", cotexcel: "M", thongtinhienthi: "Thành tiền" },
    { id: 6, hangmuc: "Thành tiền quy đổi", cotexcel: "-", thongtinhienthi: "Thành tiền quy đổi" },
    { id: 7, hangmuc: "Hàng khuyến mại", cotexcel: "-", thongtinhienthi: "Hàng khuyến mại" },
    { id: 8, hangmuc: "Tỉ lệ chiết khấu", cotexcel: "-", thongtinhienthi: "Tỉ lệ chiết khấu" },
];

//Build Tabulator
var table = new Tabulator("#price-info", {
    data: tabledata2,
    layout: "fitDataStretch",
    // height: "311px",
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
        { title: "Hạng mục", field: "hangmuc", hozAlign: "left", width: 222, editor: "input" },
        { title: "Cột Excel", field: "cotexcel", width: 120, hozAlign: "center", editor: "input" },
        { title: "Thông tin hiển thị Excel", field: "thongtinhienthi", hozAlign: "left", editor: "input" },
    ],
});