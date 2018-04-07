// VALIDATE
function validateInput(text){
	var $val = $(text).val();
	if ($val.match(/[^a-zA-Z0-9]/)){
		var length = $val.length - 1;
		$val = $val.substring(length,0)
		$(text).val($val);
	}
}

function getBranches(){
	document.getElementById('userInputPrompt').style = "display: block";
}

function submitBranchEdit(){
	var limit = 15,
	    amount = document.getElementById('childNum').value,
	    lower_bound = document.getElementById('rangeMin').value,
	    upper_bound = document.getElementById('rangeMax').value,
	    unique_random_numbers = [];

	if (amount > limit) limit = amount; //Infinite loop if you want more unique
	                                    //Natural numbers than exist in a
	                                    // given range
	while (unique_random_numbers.length < limit) {
	    var random_number = Math.floor(Math.random()*(upper_bound - lower_bound) + lower_bound);
	    if (unique_random_numbers.indexOf(random_number) == -1) { 
	        // Yay! new random number
	        unique_random_numbers.push( random_number );
	        console.log(unique_random_numbers);
	    }
	}

}