function __pi80_append_text(str)
{
	var current = $(__pi80_text_output).text();
	current += str;
	$(__pi80_text_output).html(current);

}

function writeln(str)
{
	__pi80_append_text(str + '<br/>\n');
}

function write(str)
{
	__pi80_append_text(str);
}

function input(msg)
{
	return(prompt(msg));
}

function lineinput()
{
	switch(__pi80_lineinput_status)
		{	
			case 0:
					writeln('<input type=text id=lineinput name=lineinput'+__pi80_lineinput_count+' size=5/><button id=lineinput name=lineinput'+__pi80_lineinput_count+' onclick=\'__pi80_lineinput_incoming();\'>Go</button><p/>');
					__pi80_lineinput_status = 1; //waiting for input
					__pi80_lineinput_data = '';
					return(new Boolean(false));
			case 1:
					return(new Boolean(false));
			case 2:
					__pi80_lineinput_status = 0;
					__pi80_lineinput_count++;
					write(__pi80_lineinput_data+'<br/>\n');
					return(__pi80_lineinput_data);
					break;
		}
}

function __pi80_lineinput_incoming()
{
	__pi80_lineinput_status = 2; // input is ready
	var line = $('#lineinput').val();
	write('<br/>\n');
	__pi80_lineinput_data = line;
}

function rnd()
{
	return(Math.random());
}

function rndfloat(min,max)
{
    return Math.random() * (max - min) + min;
}

function rndinteger(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function stop()
{
	__pi80_stop_request = true;
}

function inkey()
{	
	r = __pi80_keypress;
	if (r == false)
		return(new Boolean(false));
	__pi80_keypress = false;
	return(r);
}