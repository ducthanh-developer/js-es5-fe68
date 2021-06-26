var danhSachSinhVien = [];
var getEle = function(id){
    return document.getElementById(id);
}

var renderDSSV = function(){
    danhSachSinhVien.forEach((item, index) => {
        
    });
}
var themSinhVien = function(){
   var maSV = getEle('txtMaSV').value;
   var tenSV = getEle('txtTenSV').value;
   var email =  getEle('txtEmail').value;
   var matKhau = getEle('txtPass').value;
   var ngaySinh = getEle('txtNgaySinh').value;
   var khoaHoc = getEle('khSV').value;
   var diemToan = getEle('txtDiemToan').value;
   var diemLy = getEle('txtDiemLy').value;
   var diemHoa = getEle('txtDiemHoa').value;
   var sinhVien = new SinhVien(maSV, tenSV, email, matKhau, ngaySinh, khoaHoc, diemToan, diemLy, diemHoa);
   danhSachSinhVien.push(sinhVien);
   console.log(danhSachSinhVien);
   
}