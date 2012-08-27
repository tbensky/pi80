function js_pre_error(str)
{
	console.log(str);
}

function js_prefix()
{
	var str = '';
	
	str += 'function cos(x) { return(Math.cos(x)); }\n';
	str += 'function sin(x) { return(Math.sin(x)); }\n';
	return(str);
}

function js_simple_replace(code_in)
{
	var in_dq = false;
	var in_sq = false;
	var i=0;
	var code_out = '';
	
	while(i < code_in.length)
		{
			if (code_in[i] == '\'') 
				in_sq = !in_sq;
			if (code_in[i] == '"') 
				in_dq = !in_dq;
		
			if (!in_sq && !in_dq)
				{
				
					if (look_right_no_ws(code_in,i,"PI"))
						{
							code_out += 'Math.PI';
							i += "PI".length;
						}
						
					if (look_right(code_in,i,"and"))
						{
							code_out += ' && ';
							i += ws_length("and");
						}
						
					if (look_right(code_in,i,"or"))
						{
							code_out += ' || ';
							i += ws_length("or");
						}
						
					if (i < code_in.length)
						{
							code_out += code_in[i];
							i++;
						}
						
					if (look_right_no_ws(code_in,i,"<>"))
						{
							code_out += '!=';
							i += "<>".length;
						}
				}
			else 
				{
					code_out += code_in[i];
					i++;
				}
		}
	return(code_out);
}


function js_preprocess(code_in)
{
	var in_dq = false;
	var in_sq = false;
	var in_comment = false;
	var function_start = false;
	var in_function_args = false;
	var if_condition_start;
	var in_if_condition = false;
	var in_body_of = [];
	var in_while_condition = false;
	var in_forever_condition = false;
	var in_for_limits = 0; //1=looking for variable,1=looking for start,2=looking for end,3=looking for step
	var for_last_start;
	var for_variable = '', for_start = '', for_end = '', for_step = '';
	var while_condition_start;
	var while_condition;
	var i=0;
	var code_out = '';
	var ws = ' \n\r\t';
	var ret;
	Array.prototype.last = function() { return this[this.length - 1];}
	
	while(i < code_in.length)
		{
			if (!in_dq && code_in[i] == '\'') 
				in_sq = !in_sq;
			if (!in_sq && code_in[i] == "\"") 
				in_dq = !in_dq;
				
			if (i > 0 && code_in[i-1] == '/' && code_in[i] == '/')
				in_comment = true;
			if ((code_in[i] == '\n' || code_in[i] == '\r') && in_comment == true)
				in_comment = false;
			
			if (!in_dq && !in_sq && !in_comment)
				{
					if (look_right(code_in,i,"if"))
						{
							if_condition_start = i + ws_length("if");
							in_if_condition = true;
							code_out += 'if ';
							i += ws_length("if");
						}
					
					if (look_right(code_in,i,"for"))
						{
							for_last_start = i + ws_length("for");
							in_for_limits = 1;
							code_out += 'for ';
							i += ws_length("for");
						}
						
					
					if (code_in[i] == '=' && in_for_limits == 1)
						{
							for_variable = code_in.substr(for_last_start,i-for_last_start);
							for_last_start = i+1;
							in_for_limits++;
							i++;
						}
					
					if (code_in[i] == ',' && in_for_limits == 2)
						{
							for_start = code_in.substr(for_last_start,i-for_last_start);
							for_last_start = i+1;
							in_for_limits++;
							i++;
						}
						
					if (code_in[i] == ',' && in_for_limits == 3)
						{
							for_end = code_in.substr(for_last_start,i-for_last_start);
							for_last_start = i+1;
							in_for_limits++;
							i++;
						}
						
							
					if (look_right(code_in,i,'do') && in_for_limits >= 3)
						{
							if (in_for_limits == 3)
								for_end = code_in.substr(for_last_start,i-for_last_start);
							if (in_for_limits == 4)
								for_step = code_in.substr(for_last_start,i-for_last_start);
							if (for_start < for_end)
								{
									if (for_step == '')
										for_step = 1;
									code_out += '('+for_variable+'='+for_start+';'+for_variable+'<='+for_end+';'+for_variable + '+=' + for_step + ')\n{\n';
								}
							for_variable = for_start = for_end = for_step = '';
							in_for_limits = 0;
							in_body_of.push('for');
							i += ws_length('do');
						}
					
						
					if (look_right(code_in,i,"then") && in_if_condition)
						{
							in_if_condition = false;
							in_body_of.push('if');
							if_cond = code_in.substr(if_condition_start,i - if_condition_start);
							code_out += '(' + if_cond + ')\n{\n';
							i += ws_length("then");
						}
					

					if (look_right(code_in,i,"end") && (in_body_of.last() == 'if' || in_body_of.last() == 'function' || in_body_of.last() == 'while' || in_body_of.last() == 'for'))
						{
							//Be sure an in_body_of.pop(); is somewhere in this block
							code_out += '\n} //' + in_body_of.pop() + '\n';
							i += ws_length("end");
						}
						
					if (look_right(code_in,i,"end") && in_body_of.last() == 'animate')
						{
							in_body_of.pop();
							code_out += '\n if ('+animate_cond+') { run_animate(); }\n}\ncore_animate();\n\n';
							i += ws_length("end");
						}
						
					if (look_right(code_in,i,"end") && in_body_of.last() == 'forever')
						{
							in_body_of.pop();
							code_out += '\nif (__pi80_stop_request == false) {requestAnimationFrame(__pi80_forever_loop);}\n}\n__pi80_forever_loop();\n\n';
							i += ws_length("end");
						}
				
					if (look_right(code_in,i,"function"))
						function_start = true;
						
					if (code_in[i] == '(' && function_start == true && !in_function_args)
						{
							in_function_args = true;
							function_start = false;
						}
						
					if (code_in[i] == ')' && in_function_args)
						{
							in_function_args = false;
							in_body_of.push('function');
							code_out += ')\n{\n';
							i++;
						}
						
					if (look_right(code,i,"while"))
						{
							in_while_condition = true;
							i += ws_length("while");
							while_condition_start = i;
						}
					
					if (look_right(code,i,"forever"))
						{
							in_forever_condition = true;
							i += ws_length("forever");
						}
						
					if (look_right(code,i,"animate") && in_while_condition)
						{
							in_while_condition = false;
							in_body_of.push('animate');
							animate_cond = code_in.substr(while_condition_start,i - while_condition_start);
							i += ws_length("animate");
							code_out += 'function core_animate()\n{\n';
						}
							
					if (look_right(code,i,"do") && in_while_condition)
						{
							in_while_condition = false;
							in_body_of.push('while');
							while_cond = code_in.substr(while_condition_start,i - while_condition_start);
							i += ws_length("do");
							code_out += 'while ('+while_cond+')\n{\n';
						}
						
					if (look_right(code,i,"do") && in_forever_condition)
						{
							in_forever_condition = false;
							in_body_of.push('forever');
							i += ws_length("do");
							code_out += 'function __pi80_forever_loop()\n{\n';
						}
						
				}
				
		 	if (i < code_in.length)
		 		{
		 			if (!in_if_condition && !in_while_condition && in_for_limits == 0)
						code_out += code_in[i];
					i++;
				}
		}

	code_out = js_simple_replace(code_out);
	ret = js_prefix() + code_out;
	return(ret);
}

function ws_length(str)
{
	return(str.length );
}

function look_right(str,offset,token)
{
	var left_ws, right_ws;
	var left_c, right_c;
	
	if (offset == 0)
		left_ws = true;
	else 
		{
			left_c = str.substr(offset-1,1);
			left_ws = " \n\r\t".indexOf(left_c) != -1;
		}
	
	if (offset == str.length-1)
		right_ws = true;
	else 
		{
			right_c = str.substr(offset+token.length,1);
			right_ws =  " \n\r\t".indexOf(right_c) != -1;
		}
	
	return(str.substr(offset,token.length) == token && left_ws && right_ws);
}


function look_right_no_ws(str,offset,token)
{
	return(str.substr(offset,token.length) == token);
}

