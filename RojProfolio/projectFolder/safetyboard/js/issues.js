// function render(data) {
// 		var html = "<div class='commentBox'><div class='leftPanel'><img src='img/Pick Me.gif'/></div><div class='rightPanel'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><p>"+data.body+"</p></div><div class='clear'></div></div>";
// 		$('#container').append(html)
// }

// $(document).ready(function () {
	
// 		var issues =  []
// 		if(!localStorage.commentData) {
// 			localStorage.commentData = []
// 		}else{
// 			issues = JSON.parse(localStorage.commentData)
// 		}

	

// 	for (var i = 0; i < issues.length; i++) {
// 		render(issues[i])
// 	}
// 	$('#safetyIssue').click(function () {
// 		var addObj = {
// 			"name": $('#name').val(),
// 			"date": $('#date').val(),
// 			"body": $('#bodyText').val()
// 		}
		
// 		issues.push(addObj)
// 		localStorage.commentData = JSON.stringify(issues)
// 		render(addObj)
// 		$('#name').val(''),
// 		$('#date').val('dd/mm/yyyy'),
// 		$('#bodyText').val('')

// 	})
// })