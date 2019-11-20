  

$(document).ready(function(){
	var txt,check,check2;


	

	$(".name").keyup(function(check){

		txt = $("input").val();
		filter($(".check").prop( "checked" ),txt);
		
	});
	$(".check").change(function(){

		check= $(this).prop( "checked" );
		
		filter(check,txt);
		
	});
	

	function filter(check,name){
//console.log(check+" filter");
		if (check==true)
		{
			
			ajax({userId: name , completed: true},".compData");
			ajax({userId: name , completed: false},".taskData");
		}
		else{
			
			ajax({userId: name , completed: false},".taskData");
			$(".compData").html("");
		}


		
	}


	function ajax (data,print){
		//console.log(data.userId+data.completed+print+"Ajax");

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


