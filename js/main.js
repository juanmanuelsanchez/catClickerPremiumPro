// JavaScript Document
(function() {
var model= {
           currentCat:null,
		   cats: [
		       { 
			     name: "wonkie",
			     src : "assets/wonkie.jpg",
				 counter: 0
			   },
			   
			   { 
			     name: "donkie",
			     src : "assets/donkie.jpg",
				 counter: 0
			   },
			   
			   { 
			     name: "honkie",
			     src: "assets/honkie.jpg",
				 counter: 0
			   }
			   ]			
};

var octopus= {
	
	init: function() {
		model.currentCat= model.cats[0];
		catView.init();
		listView.init();
		//adminBarView.init();
		
	},
	
	getCurrentCat: function() {
		return model.currentCat;
	},
	getCats: function() {
		return model.cats;
	},
	
	setCurrentCat: function(cat) {
		
		model.currentCat= cat;
		console.log(cat);
	
	},
	
	getCurrentCounter: function() {
		
		return model.currentClick;
	},
	
	incrementCounter: function() {
		
		model.currentCat.counter +=1;
		catView.render();
		
	}
	
};

var catView= {
	init: function() {
		this.cat= document.getElementById("cat");
		this.catName= document.getElementById("catname");
		this.counter= document.getElementById("counter");
		this.catImage= document.getElementById("catimage");
			
		this.catImage.addEventListener('click', function () {
			
			octopus.incrementCounter();
			adminBarView.init();
		   	
		});
		
		this.render();
		
	},
	
	render: function() {
		
		var currentCat= octopus.getCurrentCat();
		this.catName.textContent=currentCat.name;
		this.counter.textContent= currentCat.counter;
		this.catImage.src= currentCat.src;
		/*this.catImage.style.webkitAnimationName='myfirst';
		this.catImage.style.webkitAnimationDuration='1s';*/
		
		adminBarView.init();
		
	}

};

var adminBarView= {
	
	init: function () {
		var currentCat= octopus.getCurrentCat();
		this.adminPanel= document.getElementById("contenedorAdmin");
		this.adminButton= document.getElementById("buttonAdmin");
		this.saveForm= document.getElementById("botonguardar");
		this.resetForm= document.getElementById("botoncancelar");
		this.newCatName= document.querySelector("#new-cat-name");
		this.newCatNumClicks=document.querySelector("#new-cat-numclicks");
		this.newCatName.value=currentCat.name;
		this.newCatNumClicks.value=(currentCat.counter).toString();
		this.adminPanel.style.display="none";
		
		 
		 //almaceno la referencia de this en "self" para poder actuar sobre ella dentro del evento 'click'
		 var self= this; 
		this.adminButton.addEventListener('click', function () {
			
			
		if(self.adminPanel.style.display==="none") {
		   self.adminPanel.style.display="block";
		   self.adminPanel.style.webkitAnimationName='myfirst';
		self.adminPanel.style.webkitAnimationDuration='1s';
		  }else{
		 self.adminPanel.style.display="none";
		 self.adminPanel.style.webkitAnimationName='myfirst';
		self.adminPanel.style.webkitAnimationDuration='1s';	
		  };
	
		});
		
		this.render();
		
	},
	//Esta función se puede poner dentro de init, he preferido separarla para diferenciar inicialización
	//del renderizado o visualización
	render: function () {
	       var self= this; 
		this.saveForm.addEventListener('click', function () {
		
		

			var newName= document.querySelector("#new-cat-name").value;
			var newNumClicks=document.querySelector("#new-cat-numclicks").value;
			var numClicks= Number(newNumClicks);
			console.log(numClicks);
			var cats= octopus.getCats();
			var  cat,
			i=0,
			length= cats.length;
			for (i; i<length; i++){
				cat= cats[i];
				if(cat.name===newName) {
				console.log("Eureka!");
				cat.counter=numClicks;
				octopus.setCurrentCat(cat);
				}
			catView.render();
			adminBarView.init();
			self.adminPanel.style.display="none";
			
			}
					
		});
		
		this.resetForm.addEventListener('click', function() {
			
			self.adminPanel.style.display="none";
		});
		
		
	 }
	 
	    
	
};

var listView= {
	
	init: function() {
		
		this.catList= document.getElementById("listadogatos");
		
		this.render();
	},
	
	render: function() {
		
		var cats= octopus.getCats();
		var  cat,
			elem,
			i=0,
			length= cats.length;
		this.catList.innerHTML= " ";
		
		for (i; i<length; i++){
			
			cat= cats[i];
			elem= document.createElement('li');
			elem.textContent=cat.name;
			
			
			elem.addEventListener('click',(function (catCopy) {
				
				return function() {
					
					octopus.setCurrentCat(catCopy);
					catView.render();
					adminBarView.init();
				}
				
			})(cat));
			
			this.catList.appendChild(elem);
			elem.style.webkitAnimationName='myfirst';
		    elem.style.webkitAnimationDuration='1s';
		}
		
	}
	
};

octopus.init();
}());


function calculate (event) {
		
		 var newCatName= document.getElementById("new-cat-name");
		 var newCatNumClicks= document.getElementById("new-cat-numclicks");
		 console.log(newCatName.value);
		 console.log(newCatNumClicks.value);
	};
	
	function alphaSet (event) {
		
		var image=document.getElementsByTagName("img");
		image.style.webkitAnimationName='myfirst';
		image.style.webkitAnimationDuration='1s';
	};
		