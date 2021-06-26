function DanhSachNhanVien() {
  this.arr = [];
  this.themNhanVien = function (nhanVien) {
    this.arr.push(nhanVien);
  };
  this.timViTri = function (maNV) {
    var viTri = this.arr.findIndex(function (nv) {
        return maNV === nv.maNV;
    });
  };
  this.xoaNhanVien = function(maNV){
      var viTri = this.timViTri(maNV);
      if(viTri !== -1){
          this.arr.splice(viTri, 1);
      }
  }
}
