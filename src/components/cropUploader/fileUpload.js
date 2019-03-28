// import $ from 'jquery';

const canUseDOM = !!(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
);
const ENV = (canUseDOM && window.env) || process.env.NODE_ENV;
let S3url;
if (ENV === 'staging') {
	S3url = '//ori.doc.104-staging.com.tw';
} else if (ENV === 'production') {
	S3url = '//ori.doc.104.com.tw';
} else {
	S3url = '//ori.doc.104-dev.com.tw';
}

const MIMEMap = {
	'image/jpeg': 'IMAGE',
	'image/png': 'IMAGE',
	'image/gif': 'IMAGE',
	'image/bmp': 'IMAGE',
	'image/vnd.wap.wbmp': 'IMAGE',
	'application/pdf': 'DOCUMENT',
	'application/msword': 'DOCUMENT',
	'application/rtf': 'DOCUMENT',
	'application/vnd.ms-powerpoint': 'DOCUMENT',
	'application/vnd.ms-powerpoint.slideshow.macroenabled.12': 'DOCUMENT',
	'application/vnd.openxmlformats-officedocument.presentationml.presentation':
		'DOCUMENT',
	'application/vnd.openxmlformats-officedocument.presentationml.slideshow':
		'DOCUMENT',
	'application/vnd.openxmlformats-officedocument.presentationml.template':
		'DOCUMENT',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
		'DOCUMENT',
	'application/vnd.ms-powerpoint.template.macroenabled.12': 'DOCUMENT',
	'audio/x-wav': 'AUDIO',
	'audio/x-ms-wma': 'AUDIO',
	'audio/mp3': 'AUDIO',
	'audio/mpeg': 'AUDIO',
	'audio/x-m4a': 'AUDIO',
	'audio/mp4': 'AUDIO',
	'audio/m4a': 'AUDIO',
	'video/3gpp': 'VIDEO',
	'video/mpeg': 'VIDEO',
	'video/x-msvideo': 'VIDEO',
	'video/x-ms-wmv': 'VIDEO',
	'video/vnd.uvvu.mp4': 'VIDEO',
	'video/mp4': 'VIDEO',
	'video/x-flv': 'VIDEO',
	'video/webm': 'VIDEO',
	'video/mov': 'VIDEO',
};
export { MIMEMap };

export function getAtomicType(MIMEType) {
	if (MIMEMap[MIMEType]) {
		return MIMEMap[MIMEType];
	} else {
		alert('不支援的檔案格式');
		return false;
	}
}

const plusAPI = 'https://plus.104-dev.com.tw/ajax';

export function getSignature(file, dataInfo) {
	let ajaxConfig = {
		IMAGE: '/getSignature/activityImage',
		VIDEO: '/getSignature/activityVideo',
		AUDIO: '/getSignature/activityAudio',
		DOCUMENT: '/getSignature/activityDocument',
		HYPERLINK: '/htmlConvert',
	};

	let jsonDataForSig = {
		contentType: file.type,
		filename: file.name,
	};

	return new Promise(function(resolve, reject) {
		fetch(plusAPI + ajaxConfig[MIMEMap[file.type]], {
			method: 'POST',
			body: JSON.stringify(jsonDataForSig),
			headers: {
				'content-type': 'application/json',
			},
		})
			.then(res => {
				return res.json();
			})
			.then(json => {
				return resolve(json);
			});
	});
}
export function uploadToS3(file, jsonDataForUpload) {
	let formData = new FormData();
	formData.append('key', jsonDataForUpload.objectKey);
	formData.append('content-type', file.type);
	formData.append('acl', 'authenticated-read');
	formData.append('AWSAccessKeyId', jsonDataForUpload.AWSAccessKeyId);
	formData.append('policy', jsonDataForUpload.policyDocument);
	formData.append('signature', jsonDataForUpload.signature);
	formData.append('file', file);
	formData.append('Content-Disposition', file.name);
	return new Promise(function(resolve, reject) {
		fetch(window.location.protocol + S3url, {
			method: 'POST',
			body: formData,
			processData: false,
			headers: {
				'content-type': 'application/json',
			},
			mode: 'no-cors',
		}).then(res => {
			return resolve();
		});
	});
}
export function getFileUrl(fileId, type, tagArr) {
	var params = {};
	params.timestamp = Math.floor(Date.now() / 1000) + 1800;
	params.getFileArr = [
		{
			fileId: fileId,
			protocol: 'common',
		},
	];
	//console.log(type);
	if (!tagArr || tagArr.length === 0) {
		params.getFileArr.push({
			fileId: fileId,
			protocol: 'common',
		});
	}
	for (let i in tagArr) {
		if (tagArr[i]) {
			if (type === 'DOCUMENT' && tagArr[i] === 'activityPlay') {
				params.getFileArr.push({
					fileId: fileId,
					protocol: 'common',
					fileTag: tagArr[i],
					page: '-1',
				});
			} else {
				params.getFileArr.push({
					fileId: fileId,
					protocol: 'common',
					fileTag: tagArr[i],
				});
			}
		} else {
			params.getFileArr.push({
				fileId: fileId,
				protocol: 'common',
			});
		}
	}
	if (params.getFileArr.length === 0 && type === 'HYPERLINK') {
		params.getFileArr.push({
			fileId: fileId,
			protocol: 'common',
			fileTag: 'hyperlink',
		});
	}
	//console.log(params.getFileArr);
	// return	$.ajax({
	// 		method: 'POST',
	// 		url: '/ajax/getFileUrl',
	// 		contentType: "application/json; charset=utf-8",
	// 		dataType: 'json',
	// 		data: JSON.stringify(params)
	//     })

	return fetch(plusAPI + '/getFileUrl', {
		method: 'POST',
		body: JSON.stringify(params),
		processData: false,
		headers: {
			'content-type': 'application/json',
		},
	}).then(res => {
		return res.json();
	});
}

export function waitUrlSuccess(id, type, tagArr) {
	return new Promise(function(resolve, reject) {
		let time = 0;
		let loop = () =>
			getFileUrl(id, type, tagArr).then(function(res) {
				// const result = res.json();
				console.log(res);
				if (res[0].convertStatus === 'success') {
					resolve(res);
				} else if (res[0].convertStatus === 'noResponse') {
					reject();
				} else {
					setTimeout(() => {
						time = time + 500;
						loop();
					}, 500);
				}
			});
		loop();
	});
}

// export function getURLData(apnum, pid, url, tag){
// 	let jsonData = {
// 		apnum: apnum,
// 		pid: pid,
// 		isP: 0,
// 		urlList:[{
// 			url: url,
// 			tag: tag
// 		}]
// 	}
// 	return $.ajax({
// 		method: 'POST',
// 		url: '/ajax/htmlConvert',
// 		contentType: 'application/json; charset=utf-8',
// 		dataType:'json',
// 		data: JSON.stringify(jsonData),
// 	})
// }

/*
export function fileUpload (pid, file){
	getSignature(file).done(function(jsonDataForUpload){
		callback.signatureDone(jsonDataForUpload);
		uploadToS3(jsonDataForUpload, file).done(function(){
			callback.uploadDone();
		})
	})

	let callback = new Object;
	let signatureDone = function(f){
		f();
		return callback;
	}
}

fileUpload(pid,file).signatureDone(function(res){

}).uploadDone(function(res){

})*/
