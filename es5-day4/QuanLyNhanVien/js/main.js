var dsnv = new DanhSachNhanVien();
var validator = new Validator();
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
                    <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="suaNhanVien('${nv.maNV}')">Xem</button>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.maNV}')">Xóa</button>
                </td>
            </tr>
        `;
  });
  getEle("tableDanhSach").innerHTML = content;
};

function xoaNhanVien(maNV) {
  dsnv.xoaNhanVien(maNV);
  renderDSNV(dsnv.arr);
  setLocalStorage();
};

function suaNhanVien(maNV){
  getEle("btnThemNV").style.display = "none";
  getEle("btnCapNhat").style.display = "block";
  var nhanVien = dsnv.layThongTinNhanVien(maNV);
  getEle("msnv").value = nhanVien.maNV;
  getEle("name").value = nhanVien.hoTen;
  getEle("email").value = nhanVien.email;
  getEle("password").value = nhanVien.matKhau;
  getEle("datepicker").value = nhanVien.ngaySinh;
  getEle("chucvu").value = nhanVien.chucVu;
  
};

getEle('btnCapNhat').addEventListener('click', function(){
  var maNV = getEle("msnv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngaySinh = getEle("datepicker").value;
  var chucVu = getEle("chucvu").value;
  var nhanVien = new NhanVien(maNV, hoTen, email, matKhau, ngaySinh, chucVu);
  dsnv.capNhatNhanVien(nhanVien);
  renderDSNV(dsnv.arr);
  setLocalStorage();
})

getEle('searchName').addEventListener('keyup', function(){
  var keyword = getEle('searchName').value;
  var mangTimKiem = dsnv.timKiemNhanVien(keyword);
  renderDSNV(mangTimKiem);
})

getLocalStorage();

getEle("btnThem").addEventListener("click", function () {
  getEle("btnCapNhat").style.display = "none";
  getEle("btnThemNV").style.display = "block";
});

getEle("btnThemNV").addEventListener("click", function () {
  var maNV = getEle("msnv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngaySinh = getEle("datepicker").value;
  var chucVu = getEle("chucvu").value;

  /**
   * Kiểm tra dữ liệu
   */

  var isValid = true;
  isValid &=
    validator.kiemTraRong(maNV, "tbMaNV", "Mã nhân viên không được để trống") &&
    validator.kiemTraDoDaiKyTu(
      maNV,
      "tbMaNV",
      "Vui lòng nhập từ 4 - 10 kí tự",
      4,
      10
    );
  isValid &= validator.kiemTraRong(
    hoTen,
    "tbTen",
    "Họ tên không được để trống"
  ) &&
  validator.kiemTraChuoi(hoTen, 'tbTen', 'Họ tên không hợp lệ');
  isValid &= validator.kiemTraRong(
    email,
    "tbEmail",
    "Email không được để trống"
  ) &&
  validator.kiemTraEmail(email, "tbEmail", "Email không hợp lệ");
  isValid &=
    validator.kiemTraRong(
      matKhau,
      "tbMatKhau",
      "Mật khẩu không được để trống"
    ) &&
    validator.kiemTraDoDaiKyTu(
      matKhau,
      "tbMatKhau",
      "Vui lòng nhập từ 4 - 18 kí tự",
      6,
      18
    );
  isValid &= validator.kiemTraChucVu(
    "chucvu",
    "tbChucVu",
    "Bạn chưa chọn chức vụ"
  );
  if (!isValid) return;
  console.log(isValid);

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
