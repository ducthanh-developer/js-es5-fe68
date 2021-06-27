function Validator() {
  this.kiemTraRong = function (value, spanId, mess) {
    if (value === "") {
      getEle(spanId).style.display = "block";
      getEle(spanId).innerHTML = mess;
      return false;
    }

    getEle(spanId).style.display = "none";
    getEle(spanId).innerHTML = "";
    return true;
  };
  this.kiemTraChucVu = function (select, spanId, mess) {
    if (getEle(select).selectedIndex === 0) {
      getEle(spanId).style.display = "block";
      getEle(spanId).innerHTML = mess;
      return false;
    }

    getEle(spanId).style.display = "none";
    getEle(spanId).innerHTML = "";
    return true;
  };
  this.kiemTraDoDaiKyTu = function (value, spanId, mess, min, max) {
    if (value.length < min || value.length > max) {
      getEle(spanId).style.display = "block";
      getEle(spanId).innerHTML = mess;
      return false;
    }
    getEle(spanId).style.display = "none";
    getEle(spanId).innerHTML = "";
    return true;
  };
  this.kiemTraChuoi = function (value, spanId, mess) {
    var pattern = new RegExp(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );
    if (!pattern.test(value)) {
      getEle(spanId).style.display = "block";
      getEle(spanId).innerHTML = mess;
      return false;
    }
    getEle(spanId).style.display = "none";
    getEle(spanId).innerHTML = "";
    return true;
  };
  this.kiemTraEmail = function (value, spanId, mess) {
    var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!pattern.test(value)) {
      getEle(spanId).style.display = "block";
      getEle(spanId).innerHTML = mess;
      return false;
    }
    getEle(spanId).style.display = "none";
    getEle(spanId).innerHTML = "";
    return true;
  };
}
