function gerar() {
     function makeid(length) {
       var result           = '';
       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
       var charactersLength = characters.length;
       for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }
    
  toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
toastr["success"]("Codigo Gerado Com Sucesso", "Pronto") 
    
    document.getElementById("nitro").innerHTML = "https://discord.gift/" + makeid(16);
     $(".copy").removeClass("d-none");
}


function copy() {
    //getting text from P tag
    var copyText = document.getElementById("nitro");  
    // creating textarea of html
    var input = document.createElement("textarea");
    //adding p tag text to textarea 
    input.value = copyText.textContent;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    // removing textarea after copy
    input.remove();
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    toastr["success"]("Codigo Copiado Com Sucesso", "Pronto")   

}

console.log("Onii-Chan Porque Você Está Vendo Minhas Partes INTIMAS");
console.log('%c By Neltron', 'color: #00ff75; font-size: 40px;');
console.log('%c https://github.com/erickvinicios', 'color: #6812f4; font-size: 16x;');
