		function ProgressBars(){}

			ProgressBars.prototype.ractive = [];
			ProgressBars.prototype.Endpoints= {"buttons":[45,20,-37,-11],"bars":[40,82,34,19],"limit":220}

			//initialize by creating Progress Bars and Control Buttons DOM Elements from the Endpoints
			ProgressBars.prototype.Init = function()
			{
		
			    var x = this.Endpoints.bars.length;
				
				var initialValue = 0;

				//creating the default bars
				for (var i =0 ; i<x; i++)
				{
					initialValue = this.Endpoints.bars[i];
					this.addToProgressBars(initialValue);

				};
				//creating control buttons
				var y = this.Endpoints.buttons.length;
				for (var j =0 ; j<y; j++)
				{
					initialValue = this.Endpoints.buttons[j];
					this.createControlButton(initialValue);

				};
				

			};

			//creates a single control button as a DOM Element
			ProgressBars.prototype.createControlButton = function( actionValue )
			{
				var thisObj = this;
				var val = parseInt(actionValue);
								  
				  var element = document.createElement("input");				  
				  element.type = "button";
				  var id = val < 0 ? "subtract" + Math.abs(val) : "add" + Math.abs(val) ; // And the name too?
				  element.value = actionValue; // Really? You want the default value to be the type string?
				  element.name = actionValue;
				  element.id = id;
				  element.className = "form-control btn btn-success" ; 
				  

				  var container = document.createElement("div");
				  container.className ="control-containers";
				  container.appendChild(element);

				  var controlsParent = document.getElementById("controls");				  
				  controlsParent.appendChild(container);

				  thisObj.myClickHandler(id);
				  
				
			}
			//Eventhandler for the control buttons
			ProgressBars.prototype.myClickHandler = function (buttonId)
			{
				var thisObj = this;
				document.getElementById( buttonId ).addEventListener( 'click', function (event) {
					var val = this.getAttribute("value");
					thisObj.controlButtonAction(val);
	  			
				});
			};

			//this function is called by the click event handler for the control buttons
			ProgressBars.prototype.controlButtonAction = function(widthValue){

				var selectedProgressBar = document.getElementById("progressbars").selectedIndex;
				console.log (widthValue);
	  			this.setWidth(selectedProgressBar, parseInt(widthValue));
	  			this.setColor(selectedProgressBar);
	  			
			};


			//creates new bars as a DOM Element on the fly
			ProgressBars.prototype.addToProgressBars = function(initialValue){

				var i = document.getElementById("progressbars").options.length;
				var containersWrapper = document.getElementById("containers-wrapper");
				myContainer = document.createElement('div');
				myContainer.setAttribute ("id", "container" + (i+1));
				myContainer.setAttribute ("class", "container");
				containersWrapper.appendChild(myContainer);
				myContainerElement = document.getElementById("container" + (i+1));
				var widthValue = (initialValue *100) /parseInt(this.Endpoints.limit);
				displayWidthValue = initialValue;
				var bgcolorValue = displayWidthValue > parseInt(this.Endpoints.limit) ? "progress-bar-danger" : "progress-bar-success";
				var ractiveObj = new Ractive ({

					el: myContainerElement,
					template: "#template",
					data:{width: widthValue, bgcolor: bgcolorValue, displayWidth: displayWidthValue}
				});

				this.ractive.push(ractiveObj);					
				

				var pb = document.getElementById("progressbars");
				var newOption = document.createElement("option");
				newOption.text = "#Progress" + (i+1);
				newOption.value = "progress" + (i+1);

				pb.add(newOption);


			}

			//removes a bar from the DOM on the fly
			ProgressBars.prototype.removeFromProgressBars = function(){

				var length = document.getElementById("progressbars").options.length;
				var max = this.Endpoints.bars.length;
				
				if (length> max)
				{
					//remove from dropdown
					document.getElementById("progressbars").options[length-1] = null;
					
					//remove from DOM
					var parent = document.getElementById("containers-wrapper");
					var child = document.getElementById("container"+ length);
					parent.removeChild(child);

					//remove from ractive array
					this.ractive.pop();
				}
			}

			//used to set width of the current/ active /selected progress bar
			ProgressBars.prototype.setWidth = function(selectedProgressBar, widthValue){
				var nowValue = this.ractive[selectedProgressBar].get( 'width' ) ;
				var newValue =  nowValue + (widthValue *100) /parseInt(this.Endpoints.limit);
				
				var value = newValue > 0 ? newValue : 0; 
				
	  			this.ractive[selectedProgressBar].set( 'width', value );

	  			var displayWidthValue = (this.ractive[selectedProgressBar].get( 'displayWidth' ) + widthValue) >0 ? (this.ractive[selectedProgressBar].get( 'displayWidth' ) + widthValue) : 0;
	  			this.ractive[selectedProgressBar].set( 'displayWidth', displayWidthValue );
			};

			//used to get width of the current / active / selected progress bar
			ProgressBars.prototype.getWidth = function (selectedProgressBar){

				var value =this.ractive[selectedProgressBar].get( 'width' ) ; 
				console.log (selectedProgressBar);
				
	  			return value;
			};			

			//used to set color of the current/ active /selected progress bar
			ProgressBars.prototype.setColor = function(selectedProgressBar){
				var bgColorClass = this.ractive[selectedProgressBar].get( 'displayWidth' ) > parseInt(this.Endpoints.limit) ? "progress-bar-danger" : "progress-bar-success";
	  			this.ractive[selectedProgressBar].set( 'bgcolor', bgColorClass );
				
			};
			//used to get color of the current/ active /selected progress bar
			ProgressBars.prototype.getColor = function (selectedProgressBar){

				var value =this.ractive[selectedProgressBar].get( 'bgcolor' ) ; 
				
	  			return value;
			};
			 

			//used to make a progress bar active/current/selected
			ProgressBars.prototype.setProgressBarsDropDown = function(newIndex){
				
				if (newIndex>=0 && newIndex<this.Endpoints.bars.length)
				{
		  			document.getElementById("progressbars").selectedIndex = newIndex;
		  		}
				
			};

			//used to get the index of the active/current / selected progress bar
			ProgressBars.prototype.getProgressBarsDropDown = function (){

	  			return document.getElementById("progressbars").selectedIndex; 
			};

			//event listener for the add bar button 
			document.getElementById( 'add' ).addEventListener( 'click', function () {

				var randomValue = Math.floor (Math.random()*100);
				ProgressBarsObj.addToProgressBars(randomValue);	  			
			}); 

			//event listener for the remove bar button 
			document.getElementById( 'remove' ).addEventListener( 'click', function () {

				ProgressBarsObj.removeFromProgressBars();
	  			
			}); 


			//create the instance of ProgressBars Object and start playing
			var ProgressBarsObj = new ProgressBars();
			ProgressBarsObj.Init();	
			


