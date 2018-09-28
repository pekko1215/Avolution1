class PatiSlot {
	//メイン基板,サブ基板,リール,リール制御
	constructor(mainFoundation,subFoundation,reel,reelControl,save = new SaveData){
		subFoundation.reel = reel;
		mainFoundation.reelControl = reelControl;
		Object.assign(this,{mainFoundation,subFoundation,reel,reelControl,save});
	}
	init(){

	}
	async game(){
		while(true){
			await this.bet();
			await this.lot();
			await this.lever();
			for(var i=0;i<3;i++){
				await this.stop(i);
			}
			await this.pay();
		}
	}
	async bet(){
		var bet = await mainFoundation.bet();
		await subFoundation.bet(bet);
	}
	async lot(){
		this.lotFlag = this.mainFoundation.lot();
	}
	async lever(){
		await this.subFoundation.lever(this.lotFlag);
	}
	async stop(i){
		var slip = await this.mainFoundation.stop(i);
		await this.reel.slip(slip);
	}
	async pay(){
		var pay = await this.mainFoundation.pay();
		await this.subFoundation.pay(pay);
	}
}

class MainFoundation {
	constructor(){

	}
	bet(){}
	lot(){}
	stop(){}
	pay(){}
}

class SubFoundation {
	constructor(){

	}
	bet(){}
	lever(){}
	pay(){}
}

class Reel {
	constructor(){

	}
}

class ReelControl {

}

class SaveData {
	constructor(){
		this.play = 0;
		this.allPlay = 0;
		this.in = 0;
		this.out = 0;
		this.bouns = [];
	}
}

export {PatiSlot,MainFoundation,SubFoundation,Reel,ReelControl};