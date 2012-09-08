var Monkey=function(a){this.game=a.game;this.el=document.createElement("canvas");this.el.classList.add("monkey");this.el.width=this.el.height=config.monkeyRadius*2;this.position=a.coords;this.move();this.game.el.appendChild(this.el);this.ctx=this.el.getContext("2d");this.center={x:config.monkeyRadius,y:config.monkeyRadius};this.nearestTiger=this.findNearestTiger();this.render();this.point();this.radius=config.monkeyRadius};Monkey.prototype={render:function(){this.ctx.fillStyle="rgba(0,200,0,0.7)";this.ctx.arc(this.center.x,this.center.y,20,0,Math.PI*2);this.ctx.fill()},point:function(){var a=this.nearestTiger.position.x-this.position.x,b=this.nearestTiger.position.y-this.position.y,c=Math.atan2(b,a),d={x:config.armLength*Math.cos(c),y:config.armLength*Math.sin(c)};this.ctx.beginPath();this.ctx.moveTo(this.center.x,this.center.y);this.ctx.lineTo(this.center.x+d.x,this.center.y+d.y);this.ctx.closePath();this.ctx.stroke()},startPointing:function(){},stopPointing:function(){},runAway:function(){},tap:function(){console.log("tapped a monkey")},move:function(){this.el.style.left=this.position.x-config.monkeyRadius+"px";this.el.style.top=this.position.y-config.monkeyRadius+"px"},findNearestTiger:function(){var a,b,c,d,e;for(a=0;a<this.game.tigers.length;a+=1){b=this.game.tigers[a];c=this.game.getDistance(this.position.x,this.position.y,b.position.x,b.position.y);if(!d||c<d)e=b}return e}};