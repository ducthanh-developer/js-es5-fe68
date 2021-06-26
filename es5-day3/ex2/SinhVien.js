//  Lớp đối tượng: constructor function()
function SinhVien(_ma, _ten, _email, _matKhau, _ngaySinh, _khoaHoc, _dToan, _dLy, _dHoa){
    this.ma = _ma;
    this.ten = _ten;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngaySinh = _ngaySinh;
    this.khoaHoc = _khoaHoc;
    this.dToan = _dToan;
    this.dLy = _dLy;
    this.dHoa = _dHoa;
    this.tinhDTB = function(){
        return (parseFloat(this.dToan) + parseFloat(this.dHoa) + parseFloat(this.dLy)) / 3;
    }

}

// Khởi tạo đối tượng sinh viên
var sv1 = new SinhVien('PS14316', 'Đức', 'ducthanh.developer@gmail.com', '12345', '17/02/1999', 'fe68', 8, 9, 10);