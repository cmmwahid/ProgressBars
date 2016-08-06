describe("Ractive ProgressBars Test Cases", function (){
	var ProgressBarsObj;
	beforeEach(function() {
		loadFixtures('myfixture.html');
		ProgressBarsObj = new ProgressBars();	    
		ProgressBarsObj.Init();
	});



	it("should display width and color of first Progressbar", function(){

		
		expect(ProgressBarsObj.getWidth(0)).toBe(18.181818181818183);
		expect(ProgressBarsObj.getWidth(0)).not.toBe(10);
		expect(ProgressBarsObj.getColor(0)).toBe("progress-bar-success");
	});
	it("should display width and color of second Progressbar", function(){

		
		
		expect(ProgressBarsObj.getWidth(1)).toBe(37.27272727272727);
		expect(ProgressBarsObj.getWidth(1)).not.toBe(50);
		expect(ProgressBarsObj.getColor(1)).toBe("progress-bar-success");
		
	});
	it("should display width and color of third Progressbar", function(){

		
		expect(ProgressBarsObj.getWidth(2)).toBe(15.454545454545455);
		expect(ProgressBarsObj.getWidth(2)).not.toBe(75);
		expect(ProgressBarsObj.getColor(2)).toBe("progress-bar-success");
		
	});
	it("should display width and color of fourth Progressbar", function(){

		
		expect(ProgressBarsObj.getWidth(3)).toBe(8.636363636363637);
		expect(ProgressBarsObj.getWidth(3)).not.toBe(100);
		expect(ProgressBarsObj.getColor(3)).toBe("progress-bar-success");
		
	});

});


describe ("Checks for the DOM Containers", function(){

	var ProgressBarsObj;
	beforeEach(function() {
		loadFixtures('myfixture.html');
		ProgressBarsObj = new ProgressBars();
	    ProgressBarsObj.Init();
	});

	afterEach (function (){
		
		ProgressBarsObj = null;	
		
	});



	it("should exist DOM containers for the Progress Bars", function(){

		
		expect($("#container1")).toExist();
		expect($("#container2")).toExist();
		expect($("#container3")).toExist();
		expect($("#container4")).toExist();
				
	});
	

});
	

  

describe ("Click Events of the Action Buttons", function(){

	var ProgressBarsObj;
	beforeEach(function() {
		loadFixtures('myfixture.html');
		ProgressBarsObj = new ProgressBars();
		
	    ProgressBarsObj.Init();
	});

	afterEach (function (){
		
		ProgressBarsObj = null;	


	});


	it ("should generate add45 click events", function() {
	 	
	 	
	 	spyEvent = spyOnEvent('#add45', 'click');
    	$('#add45').trigger( "click" );
       
    	expect('click').toHaveBeenTriggeredOn('#add45');
    	expect(spyEvent).toHaveBeenTriggered();
	    
	    
	});
	it ("should generate add20 click events", function() {
	 	
	 	
	 	spyEvent = spyOnEvent('#add20', 'click');
    	$('#add20').trigger( "click" );
       
    	expect('click').toHaveBeenTriggeredOn('#add20');
    	expect(spyEvent).toHaveBeenTriggered();
	    
	    
	});

	it ("should generate subtract37 click events", function() {
	 	
	 	
	 	spyEvent = spyOnEvent('#subtract37', 'click');
    	$('#subtract37').trigger( "click" );
       
    	expect('click').toHaveBeenTriggeredOn('#subtract37');
    	expect(spyEvent).toHaveBeenTriggered();
	    
	    
	});

	it ("should generate subtract11 click events", function() {
	 	
	 	
	 	spyEvent = spyOnEvent('#subtract11', 'click');
    	$('#subtract11').trigger( "click" );
       
    	expect('click').toHaveBeenTriggeredOn('#subtract11');
    	expect(spyEvent).toHaveBeenTriggered();
	    
	    
	});
	
});


describe("Different ProgressBar is selected", function() {
	var ProgressBarsObj;
	beforeEach(function() {
		loadFixtures('myfixture.html');
		ProgressBarsObj = new ProgressBars();
	    ProgressBarsObj.Init();
	});
	afterEach (function (){
		ProgressBarsObj = null;	
		

	});


    it("should call the setProgressBarsDropDown(3) function", function() {
       	
        ProgressBarsObj.setProgressBarsDropDown(3);
        expect(ProgressBarsObj.getProgressBarsDropDown()).toBe(3);
        
    });

     it("should call the setProgressBarsDropDown(2) function", function() {
       	
        ProgressBarsObj.setProgressBarsDropDown(2);
        expect(ProgressBarsObj.getProgressBarsDropDown()).toBe(2);
        
    });

      it("should call the setProgressBarsDropDown(1) function", function() {
       	
        ProgressBarsObj.setProgressBarsDropDown(1);
        expect(ProgressBarsObj.getProgressBarsDropDown()).toBe(1);
        
    });

   
    
});

