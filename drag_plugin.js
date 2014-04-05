// JavaScript Document
//Place the plugin within an anonymous function to avoid outside problems
(function($){

	//Attatch the new method		   
	jQuery.fn.extend({

		//Plugin Name
		drag_plugin: function(options) {
			
			
				var defaults = {
                speed: 5,
                otherThing: 'hello'
            	};
			
					// This is the easiest way to have default options.
				var settings = $.extend(defaults,options);
				
				
				
				
				var selector = this;
				
				
				this.on("mousedown",function(e){
				
				console.log("START--------------: "+e.pageX);
				var startx = e.pageX;					
						
				selector.on("mousemove",function(e){
				console.log("moving "+e.pageX);
					
						var newx = startx - e.pageX;
							
						if(newx>0){
							if(newx>settings.speed){
							newx=-settings.speed;
							}else{
								newx=-newx;
							}
						}else if(newx<0){
							var tx = newx*-1;
							if(tx>settings.speed){
							newx=settings.speed;
							}else{
								newx=tx;
							}
						}
						//console.log("new x-------------: "+newx);
							
						var scrollx = selector.scrollLeft();
						selector.scrollLeft(scrollx-newx);			
						
						//set the startx to the current x so there is no offset on change of direction
						startx=e.pageX;
						
						});
				});
			
					this.on("mouseup",function(e){
					console.log("up "+e.pageX);
					selector.off("mousemove");
					});
			
					this.on("mouseleave",function(e){
					console.log("up "+e.pageX);
					//alert("left");
					selector.off("mousemove");
					});
						
				
				
		 /*
				// Greenify the collection based on the settings variable.
				return this.css({
					color: settings.color,
					backgroundColor: settings.backgroundColor
				});
			*/
		}

	});
})(jQuery);