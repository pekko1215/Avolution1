class PatiSlot {
	//メイン基板,サブ基板,リール,リール制御
	constructor(mainFoundation,subFoundation,reel,reelControl){
		Object.assign(this,{mainFoundation,subFoundation,reel,reelControl});
	}
}

class MainFoundation {
	constructor(){

	}
}

class SubFoundation {
	constructor(){

	}
}

class Reel {
	constructor(){

	}
}

class ReelControl {

}

export {PatiSlot,MainFoundation,SubFoundation,Reel,ReelControl};