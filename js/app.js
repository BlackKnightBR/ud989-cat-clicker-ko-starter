var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function(){
    var title = "Sopra";
    var clicks = this.clickCount();
    if(clicks < 10) {
      title = "Newborn";
    }else if(clicks < 50) {
      title = "Infant";
    }else if(clicks < 100) {
      title = "Child";
    }else if(clicks < 200){
      title = "Teen";
    }else if(clicks < 500){
      title = "Adult";
    }else{
      title = "Ninja";
    }
    return title;
  }, this);
}

var ViewModel = function() {
  var self = this;//Você pode usar isso para simplificar a troca de contexto. Acessa o contexto mais externo.
  //Self sermpre estará definido como o ViewModel (contexto mais externo).
  this.currentCat = ko.observable(new Cat({
    clickCount : 0,
    name : "Tabby",
    imgSrc : "img/434164568_fea0ad4013_z.jpg",
    imgAttribution : "Relax",
    nicknames : ['Amido','Farinha','Meleca','T-bone']
  }));

  this.incrementCounter = function() {
    //"No lugar de this pode se usar self agora".
    this.clickCount(this.clickCount() + 1);

    var count = 0;
    count++;
  };
}

ko.applyBindings(new ViewModel());
