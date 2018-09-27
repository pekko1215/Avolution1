import {MainFoundation,SaveData} from './slotmodule3.min.js';

export class extends MainFoundation {
	constructor(save = new SaveData(),level){
		this.level = level;
	}
}