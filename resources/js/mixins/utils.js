
//import {ServiceFactory} from '@/services/ServiceFactory';
//const VerificationPhoneService = ServiceFactory.get('verificationPhone');

export const utilMix = {
	data: () => ({

	}),
	methods: {

		setTitle(title) {
			document.title = title ? title : this.titleApp;
		},
	}


};
