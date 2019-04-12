import validator from 'validator';

const Message = {
	notEmpty: '欄位不可為空',
	isURL: '含有不法字元',
	isName: '含有不法字元',
	maxLength: '輸入的字數已達上限',
	minLength: '字數不足',
	illegalText: '有不合法字元',
	isEmail: 'email格式不合法',
};

const result = (name, expression) => {
	let message = '';
	if (!expression) {
		message = Message[name];
	}
	return {
		status: expression,
		errorMessage: message,
	};
};

const Method = {
	notEmpty: value => {
		return result('notEmpty', value.length > 0);
	},
	isURL: value => {
		return result('isURL', validator.isURL(value));
	},
	isName: value => {
		return result('isName', value.match(/^[a-zA-Z0-9_-]{3,16}$/));
	},
	isEmail: value => {
		let regex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
		return result('isEmail', value.match(regex));
	},
	maxLength: (value, length) => {
		return result('maxLength', value.length <= length);
	},
	minLength: (value, length) => {
		return result('minLength', value.length > length);
	},
	illegalText: (value, text) => {
		let result = false,
			i = 0;
		if (typeof text === 'string') {
			result = value.match(text);
		} else if (typeof text === 'array') {
			while (!result) {
				result = value.match(text[i]);
				i++;
			}
		} else {
			console.log('not avalible type');
		}
		return result('illegalText', !result);
	},
};

export { Method, Message };
