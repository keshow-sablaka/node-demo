$(document).ready(function() {
    $('#submit-form').on('click', function() {
        var form_data = new CreateFormData();
        form_data.getData();
        send_data = new SendFormData();
        send_data.sendData();
    });
});
var CreateFormData = function() {
    this.fname = null;
    this.lname = null;
    this.password = null;
    this.gender = null;
}
CreateFormData.prototype.getFname = function() {
    this.fname = $('#fname').val();
}
CreateFormData.prototype.getLname = function() {
    this.lname = $('#lname').val();
}
CreateFormData.prototype.getPassword = function() {
    this.password = $('#password').val();
}
//1--> Male 2--> Female
CreateFormData.prototype.getGender = function() {
    this.gender = $('input[name=gender]:checked').val();
}
CreateFormData.prototype.setData = function() {
    this.getFname();
    this.getLname();
    this.getPassword();
    this.getGender();
}
CreateFormData.prototype.getData = function() {
    this.setData();
    var data_struct = {
        "fname" : this.fname,
        "lname" : this.lname,
        "password" : this.password,
        "gender" : this.gender
    };
    data_struct = JSON.stringify(data_struct);
    return data_struct;
}

var SendFormData = function(data) {
    this.data = data;
}
SendFormData.prototype.sendData = function() {
    const ref = this;
    $.ajax({
        url:"/url",
        method: "POST",
        data: ref.data,
        success: function(data) {
            alert(data.status);         
        },
        error: function() {
            alert("ERROR");
        }
    });
}
