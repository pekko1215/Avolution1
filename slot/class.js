class EventEmiter {
	constructor(){
		this.list = {};
	}
	on(event,fn){
		if(!this.list[event]) this.list[event] = [];
		var obj = {
			fn,
			once:false
		}
		this.list[event].push(obj);
		return obj;
	}
	once(event,fn){
		var obj = this.on(event,fn);
		obj.once = true;
		return obj;
	}
	fire(event,obj){
		this.event[event] = this.event[event].filter(e=>{
			e.fn(obj);
			return !e.once;
		})
	}

}

class PatiSlot {
	//メイン基板,サブ基板,リール,リール制御
	constructor(mainFoundation,subFoundation,reel,reelControl){
		Object.assign(this,{mainFoundation,subFoundation,reel,reelControl});
		this.events = new EventEmiter;
	}
}

class MainFoundation {
	constructor(level){
		this.level = level;
	}
	lot(){
		return 'はずれ'
	}
}

class SubFoundation {
	constructor(main){
		this.mainFoundation = main;
	}
	effect(event){

	}
}

class Reel {
	constructor(){

	}
}

class ReelControl {

}

export {PatiSlot,MainFoundation,SubFoundation,Reel,ReelControl};