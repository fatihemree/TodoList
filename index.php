<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Todo</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">

</head>
<body>
	
	<div class="container">
		<form>
			<div class="row my-5 d-flex align-items-start">

				<div class="col-3"><div class="input-group input-group-sm mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
					</div>
					<input name="userId" type="text" class="form-control name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
				</div>
			</div>

			<div class="col-3">

				<div class="custom-control custom-switch">
					<input type="checkbox" name="completed" class="custom-control-input check" value="true" id="customSwitch1">
					<label class="custom-control-label" for="customSwitch1">Completed</label>
				</div>
			</div>	
			<div class="col-3">

				<div class="custom-control custom-switch">
					<input type="checkbox" name="all" class="custom-control-input checkAll" value="true" id="customSwitch2">
					<label class="custom-control-label" for="customSwitch2">All</label>
				</div>
			</div>	
		</form>

	</div>

	<div class="row d-flex justify-content-between">
		<div class="col-5 shadow p-3 mb-5 bg-white rounded">

			<table class="table table-hover">
				<thead>
					<tr>
						<th scope="col">Task</th>
					</tr>
				</thead>
				<tbody class="taskData">


				</tbody>
			</table>


		</div>
		<div class="col-5 shadow p-3 mb-5 bg-white rounded animated completedGrid">
			
			<table class="table table-hover">
				<thead>
					<tr>
						<th scope="col">Completed</th>
					</tr>
				</thead>
				<tbody class="compData">


				</tbody>
			</table>
		</div>
	</div>
</div>
<script
src="https://code.jquery.com/jquery-3.4.1.js"
integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
crossorigin="anonymous"></script>
<script
src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"
integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E="
crossorigin="anonymous"></script>

<script src="js/script.js"></script>
</body>
</html>