const client = require('cheerio-httpcli');
const request = require('request');
const fs = require('fs');
const URL = require('url');
const async = require('async');

const savedir = __dirname + '/img';
if (!fs.existsSync(savedir)){
	fs.mkdirSync(savedir);
}

const url = "http://ruricho.net/cast";
var param = {};
//HTMLの取得
client.fetch(url,param,function(err,$,res,body){
	if(err) { console.log(err); return; }
	/*
	$("#profile_image img").each(function(idx){
		var src = $(this).attr('src');
		//相対パスを絶対パスに
		src = URL.resolve(url,src);
		var fname = URL.parse(src).pathname;
		// console.log(fname);
		fname = savedir + "/" + fname.replace(/[^a-zA-Z0-9\.]+/g,'_');
		// console.log(fname);
		request(src).pipe(fs.createWriteStream(fname));
	});
*/

	$("#cast_list li div.cast_frame a").each(function(idx){
		// console.log($(this).children());
		var link = $(this).attr('href');
		console.log(link);
		var cld = $(this).children('div');
		// console.log(cld.eq(0).children());
		var cast_thumb_src = cld.eq(0).children().attr('src');
		var cast_section = cld.eq(1);

		var cast_name = cast_section.find('.cast_name').text().trimRight();
		var cast_size = cast_section.find('.cast_size').text();
	});
});