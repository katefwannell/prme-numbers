function getPrimes(max) {var sieve = [], i, j, primes = [];for (i = 2; i <= max; ++i) {if (!sieve[i]) {// i has not been marked -- it is prime
            primes.push(i);for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;}}}return primes;}

$(document).ready(function() {

	$("form#prime").submit(function(event) {
		event.preventDefault();

    $("#results").show();

    var input1 = parseInt($("#input1").val());
    var primeNumbers = getPrimes(input1);
    // alert("var input1 is " + input1);
    // alert("var primeNumbers is " + primeNumbers);
    $("#results").append(input1 + "! = " + primeNumbers + "<br>");
    $("#prime").hide();
	});
});
