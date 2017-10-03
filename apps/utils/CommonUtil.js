export default function loadImage (param){
		switch (param.id){
			case 1:
				return require('ThirdProject/apps/assets/images/ryu_hoshi.png')
			case 2:
				return require('ThirdProject/apps/assets/images/ken_masters.png')
			case 3:
				return require('ThirdProject/apps/assets/images/akuma.png')
			case 4:
				return require('ThirdProject/apps/assets/images/dan_hibiki.png')
		}
}
