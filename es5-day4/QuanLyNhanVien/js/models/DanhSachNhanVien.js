function DanhSachNhanVien() {
  this.arr = [];
}
DanhSachNhanVien.prototype.themNhanVien = function (nhanVien) {
  this.arr.push(nhanVien);
};

DanhSachNhanVien.prototype.timViTri = function (maNV) {
  var viTri = this.arr.findIndex(function (nv) {
    return maNV === nv.maNV;
  });
  return viTri;
};

DanhSachNhanVien.prototype.xoaNhanVien = function (maNV) {
  var viTri = this.timViTri(maNV);
  if (viTri !== -1) {
    this.arr.splice(viTri, 1);
  }
};

DanhSachNhanVien.prototype.layThongTinNhanVien = function (maNV) {
  var viTri = this.timViTri(maNV);
  if (viTri !== -1) return this.arr[viTri];
};

DanhSachNhanVien.prototype.capNhatNhanVien = function (nhanVien){
  var viTri = this.timViTri(nhanVien.maNV);
  if(viTri !== -1){
    this.arr[viTri] = nhanVien;
  }
}

DanhSachNhanVien.prototype.timKiemNhanVien = function (keyword){
  return this.arr.filter(function(nv){
    return nv.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  });
}
