  

$(document).ready(function(){

	var txt,check,checkAll;
	$(".completedGrid").hide();
	$(".name").click(function(){
		if(checkAll==true)
			$(".checkAll").click();

	});
	$(".name").keyup(function(check){

		txt = $(".name").val();
		filter($(".check").prop( "checked" ),txt,$(".checkAll").prop( "checked" ));
	});


	$(".check").change(function(){
		check= $(this).prop( "checked" );
		filter(check,txt,$(".checkAll").prop( "checked" ));

		
		
	});
	$(".checkAll").change(function(){
		checkAll= $(this).prop( "checked" );
		filter(check,txt,checkAll);
	});

	function filter(check,name,all){
		


		if(all==true)
		{ 
			$(".name").val("");

			if (check==true)
			{
				ajax({completed: true},".compData");
				ajax({completed: false},".taskData");
				$( ".completedGrid").show("slide","slow");
			}
			else
			{
				ajax({completed: false},".taskData");
				$(".compData").html("");
				$(".completedGrid").hide("slide","right","slow");
			}
		}
		else if (check==true && name != null)
		{
			ajax({userId: name , completed: true},".compData");
			ajax({userId: name , completed: false},".taskData");
			$( ".completedGrid").show("slide","slow");
		}
		else if(name != null){
			ajax({userId: name , completed: false},".taskData");
			$(".compData").html("");
			$(".completedGrid").hide("slide","right","slow");
		}
	}


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


