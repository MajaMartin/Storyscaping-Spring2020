(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"koglejagtkonku_atlas_", frames: [[338,663,43,43],[0,883,365,7],[456,545,12,365],[338,545,116,116],[0,545,336,336],[0,0,481,543]]}
];
    


// symbols:



(lib.CachedBmp_16 = function() {
	this.initialize(ss["koglejagtkonku_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["koglejagtkonku_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["koglejagtkonku_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["koglejagtkonku_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["koglejagtkonku_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["koglejagtkonku_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(78.35,79,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(-1.7,88.9,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_14();
	this.instance_2.setTransform(86.4,-1.7,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_13();
	this.instance_3.setTransform(60.35,60.45,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_12();
	this.instance_4.setTransform(5.6,5.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1.7,-1.7,182.5,182.5), null);


(lib.kogle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(89.5,89.5,1,1,0,0,0,89.5,89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.7,182.5,182.5);


(lib.zoomsigte = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kogle();
	this.instance.setTransform(89.5,89.5,1,1,0,0,0,89.5,89.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleX:0.7287,scaleY:0.7287,x:23.35,y:24.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.7,182.5,182.5);


// stage content:
(lib.koglejagtbutton = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// Lag_1
	this.instance = new lib.zoomsigte();
	this.instance.setTransform(-93.45,173,1,1,0,0,0,89.5,89.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:89.6,regY:89.6,x:-76.6,y:173.1},0).wait(1).to({x:-59.9},0).wait(1).to({x:-43.15},0).wait(1).to({x:-26.45},0).wait(1).to({x:-9.75},0).wait(1).to({x:7},0).wait(1).to({x:23.7},0).wait(1).to({x:40.45},0).wait(1).to({x:57.15},0).wait(1).to({x:73.85},0).wait(1).to({x:90.55},0).wait(1).to({x:107.25},0).wait(1).to({x:124},0).wait(1).to({x:140.7},0).wait(1).to({x:157.45},0).wait(1).to({x:174.15},0).wait(1).to({x:190.85},0).wait(1).to({x:207.6},0).wait(1).to({x:224.3},0).wait(1).to({x:241.05},0).wait(1).to({x:257.75},0).wait(1).to({x:274.45},0).wait(1).to({x:291.2},0).wait(1).to({x:307.9},0).wait(1).to({x:324.65},0).wait(1).to({x:307.4},0).wait(1).to({x:290.2},0).wait(1).to({x:273},0).wait(1).to({x:255.75},0).wait(1).to({x:238.55},0).wait(1).to({x:221.35},0).wait(1).to({x:204.15},0).wait(1).to({x:186.9},0).wait(1).to({x:169.7},0).wait(1).to({x:152.5},0).wait(1).to({x:135.25},0).wait(1).to({x:118.05},0).wait(1).to({x:100.85},0).wait(1).to({x:83.65},0).wait(1).to({x:94.65},0).wait(1).to({x:105.65},0).wait(1).to({x:116.65},0).wait(1).to({x:127.65},0).wait(1).to({x:138.65},0).wait(1).to({x:149.65},0).wait(1).to({x:160.65},0).wait(1).to({x:171.65},0).wait(1).to({x:182.65},0).wait(1).to({x:193.65},0).wait(1).to({x:204.65},0).wait(1).to({x:215.65},0).wait(12).to({scaleX:0.9957,scaleY:0.9957,x:215.6,y:173.05},0).wait(1).to({scaleX:0.9914,scaleY:0.9914,x:215.65,y:173.1},0).wait(1));

	// Lag_1
	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(158,108,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.3,336.8,388.59999999999997,-72.5);
// library properties:
lib.properties = {
	id: '92B68E2D27493B489B6C1BBA00D30784',
	width: 424,
	height: 510,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"../wp-content/plugins/pop-up-kogle/images/koglejagtkonku_atlas_.png", id:"koglejagtkonku_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['92B68E2D27493B489B6C1BBA00D30784'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;