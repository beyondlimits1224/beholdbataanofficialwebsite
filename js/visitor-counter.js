const selectElement = function (element){
  return document.querySelector (element);
};

// visitor counter
let visitorMenuToggler = selectElement('.visitor-eye-ico');
let visitorCloseMenu = selectElement('.visitor-closebutton');
let body = selectElement('body');

visitorMenuToggler.addEventListener('click', function(){
  body.classList.add('openVisitorCounter');
});

visitorCloseMenu.addEventListener('click', function(){
  body.classList.remove('openVisitorCounter');
});