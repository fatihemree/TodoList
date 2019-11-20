  

$(document).ready(function(){


	$(".name").keyup(function(){

		var txt = $("input").val();
		ajax({ userId : txt, completed:true },".taskData");
		ajax({ userId : txt, completed:false },".compData");
	});

	function ajax (data,print){
		$.ajax({
			dataType: "json",
			url: "https://jsonplaceholder.typicode.com/todos",
			data:data,
			success: function(veri)
			{

				$(print).html("");

				$.each( veri, function( key, veri ) {
					var name = veri.userId;
					var comp= veri.completed;
					var title= veri.title;
					var id= veri.id;
					$(print).append("<tr><td>"+title+"</td></tr>");
				});
			}
		});

	}

});


