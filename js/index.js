!(function(){
	window.addEventListener('DOMContentLoaded',function(){
		var btn = document.querySelector('#btn');
		
		btn.onclick = function(){
			var form = $('form').serializeArray();
			var birth = `${form[3].value}${form[4].value}${form[5].value}${form[6].value}${form[6].value}${form[6].value}`;
			var firstname = form[0].value;
			var gender = form[2].value;
			var SECOND_NAME = form[1].value
		console.log(form)
			let httpUrl = `https://xuanxue.market.alicloudapi.com/ai_china_knowledge/bazi/v1?BIRTH=${birth}&FIRST_NAME=${firstname}&GENDER=${gender}&SECOND_NAME=${SECOND_NAME}`
			let options = {
				headers:{
					'Authorization':"APPCODE c94545b66fe84762a69b0b488ebd9152"
				}
			}
			fetch(httpUrl,options)
			.then((res)=>res.json())
			.then((data)=>{
				console.log(data)
				var warper = document.querySelector('#wraper');
				warper.innerHTML = `<div class="viewbox">
				<div class="title">
					<h2>五行查询算命结果</h2>
				</div>
		
				<div class="content">
					${Object.keys(data['命主实体信息']).map(key=>{
						return `<h3>${key}</h3><p>${data["命主实体信息"][key]}</p>`
					}).join("")}
				</div><!-- /content -->
				<input type="button" value="继续算命" class="button" id="rebtn">
			</div>`



			})
		}
	})
})()