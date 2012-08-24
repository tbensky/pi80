
function writeln(str)
{
	var current = $('#text_small').html();
	current += str + '<br/>';
	$('#text_small').html(current);
}

function write(str)
{
	var current = $('#text_small').html();
	current += str;
	$('#text_small').html(current);
}

function input(msg)
{
	return(prompt(msg));
}