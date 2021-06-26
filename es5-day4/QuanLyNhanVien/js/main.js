var dsnv = new DanhSachNhanVien();
var getEle = function (id) {
  return document.getElementById(id);
};

var renderDSNV = function (dsnv) {
  var content = "";
  dsnv.forEach((nv, index) => {
    content += `
            <tr>
                <td>${nv.maNV}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngaySinh}</td>
                <td>${nv.chucVu}</td>
                <td>
                    <button class="btn btn-success">Xem</button>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.maNV}')">Xóa</button>
                </td>
            </tr>
        `;
  });
  getEle("tableDanhSach").innerHTML = content;
};

function xoaNhanVien(maNV){
    dsnv.xoaNhanVien(maNV);
    renderDSNV(dsnv.arr);
    setLocalStorage();
}

getLocalStorage();

getEle("btnThem").addEventListener("click", function () {
  getEle("btnCapNhat").style.display = "none";
});

getEle("btnThemNV").addEventListener("click", function () {
  var maNV = getEle("msnv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngaySinh = getEle("datepicker").value;
  var chucVu = getEle("chucvu").value;

  /**
   * Khởi tạo Nhân Viên
   */
  var nhanVien = new NhanVien(maNV, hoTen, email, matKhau, ngaySinh, chucVu);
  dsnv.themNhanVien(nhanVien);
  setLocalStorage();
  renderDSNV(dsnv.arr);
});

function getLocalStorage() {
  if (localStorage.getItem("DSNV")) {
    dsnv.arr = JSON.parse(localStorage.getItem("DSNV"));
    renderDSNV(dsnv.arr);
  }
}

function setLocalStorage() {
  // chuyển thành JSON
  localStorage.setItem("DSNV", JSON.stringify(dsnv.arr));
}
