function circle(x,y,radius,color)
{
	context.beginPath();
	context.arc(x,y,radius,0,2.0 * Math.PI,false);
	context.strokeStyle = color;
	context.stroke();
}

function fillcircle(x,y,radius,color,fillcolor)
{
	context.beginPath();
	context.arc(x,y,radius,0,2.0 * Math.PI,false);
	context.strokeStyle = color;
	
	context.fillStyle = fillcolor;
	context.fill();
	context.stroke();
}

function line(x1,y1,x2,y2,color)
{
	context.beginPath();
	context.moveTo(x1,y1);
	context.lineTo(x2,y2);
	context.strokeStyle = color;
	context.stroke();
}

function rectangle(x1,y1,x2,y2,color)
{
	context.beginPath();
	context.rect(x1,y1,x2-x1,y2-y1);
	context.strokeStyle = color;
	context.stroke();
}

function point(x,y,color)
{
	context.fillStyle = color;
	context.fillRect(x,y,1,1);
}


function cls(color)
{
	context.fillStyle = color;
	context.fillRect(0,0,canvas_width,canvas_height);
	context.stroke();
}

function printat(x,y,str,pt_size,color)
{
	context.font = pt_size+"pt Calibri";
    context.fillStyle = color;
    context.fillText(str, x,y);
}

function whilstcls(color)
{
	whilst_color = color;
}
	

function width(n)
{
	context.lineWidth = n;
}


function hcolor(text_color)
{	
	switch($.trim(text_color.toLowerCase()))
		{
			case 'black':return("0x000000");
			case 'navy':return("0x000080");
			case 'darkblue':return("0x00008b");
			case 'mediumblue':return("0x0000cd");
			case 'blue':return("0x0000ff");
			case 'darkgreen':return("0x006400");
			case 'green':return("0x008000");
			case 'teal':return("0x008080");
			case 'darkcyan':return("0x008b8b");
			case 'deepskyblue':return("0x00bfff");
			case 'darkturquoise':return("0x00ced1");
			case 'mediumspringgreen':return("0x00fa9a");
			case 'lime':return("0x00ff00");
			case 'springgreen':return("0x00ff7f");
			case 'aqua':return("0x00ffff");
			case 'cyan':return("0x00ffff");
			case 'midnightblue':return("0x191970");
			case 'dodgerblue':return("0x1e90ff");
			case 'lightseagreen':return("0x20b2aa");
			case 'forestgreen':return("0x228b22");
			case 'seagreen':return("0x2e8b57");
			case 'darkslategray':return("0x2f4f4f");
			case 'darkslategrey':return("0x2f4f4f");
			case 'limegreen':return("0x32cd32");
			case 'mediumseagreen':return("0x3cb371");
			case 'turquoise':return("0x40e0d0");
			case 'royalblue':return("0x4169e1");
			case 'steelblue':return("0x4682b4");
			case 'darkslateblue':return("0x483d8b");
			case 'mediumturquoise':return("0x48d1cc");
			case 'indigo':return("0x4b0082");
			case 'darkolivegreen':return("0x556b2f");
			case 'cadetblue':return("0x5f9ea0");
			case 'cornflowerblue':return("0x6495ed");
			case 'mediumaquamarine':return("0x66cdaa");
			case 'dimgray':return("0x696969");
			case 'dimgrey':return("0x696969");
			case 'slateblue':return("0x6a5acd");
			case 'olivedrab':return("0x6b8e23");
			case 'slategray':return("0x708090");
			case 'slategrey':return("0x708090");
			case 'lightslategray':return("0x778899");
			case 'lightslategrey':return("0x778899");
			case 'mediumslateblue':return("0x7b68ee");
			case 'lawngreen':return("0x7cfc00");
			case 'chartreuse':return("0x7fff00");
			case 'aquamarine':return("0x7fffd4");
			case 'maroon':return("0x800000");
			case 'purple':return("0x800080");
			case 'olive':return("0x808000");
			case 'gray':return("0x808080");
			case 'grey':return("0x808080");
			case 'skyblue':return("0x87ceeb");
			case 'lightskyblue':return("0x87cefa");
			case 'blueviolet':return("0x8a2be2");
			case 'darkred':return("0x8b0000");
			case 'darkmagenta':return("0x8b008b");
			case 'saddlebrown':return("0x8b4513");
			case 'darkseagreen':return("0x8fbc8f");
			case 'lightgreen':return("0x90ee90");
			case 'mediumpurple':return("0x9370d8");
			case 'darkviolet':return("0x9400d3");
			case 'palegreen':return("0x98fb98");
			case 'darkorchid':return("0x9932cc");
			case 'yellowgreen':return("0x9acd32");
			case 'sienna':return("0xa0522d");
			case 'brown':return("0xa52a2a");
			case 'darkgray':return("0xa9a9a9");
			case 'darkgrey':return("0xa9a9a9");
			case 'lightblue':return("0xadd8e6");
			case 'greenyellow':return("0xadff2f");
			case 'paleturquoise':return("0xafeeee");
			case 'lightsteelblue':return("0xb0c4de");
			case 'powderblue':return("0xb0e0e6");
			case 'firebrick':return("0xb22222");
			case 'darkgoldenrod':return("0xb8860b");
			case 'mediumorchid':return("0xba55d3");
			case 'rosybrown':return("0xbc8f8f");
			case 'darkkhaki':return("0xbdb76b");
			case 'silver':return("0xc0c0c0");
			case 'mediumvioletred':return("0xc71585");
			case 'indianred':return("0xcd5c5c");
			case 'peru':return("0xcd853f");
			case 'chocolate':return("0xd2691e");
			case 'tan':return("0xd2b48c");
			case 'lightgray':return("0xd3d3d3");
			case 'lightgrey':return("0xd3d3d3");
			case 'palevioletred':return("0xd87093");
			case 'thistle':return("0xd8bfd8");
			case 'orchid':return("0xda70d6");
			case 'goldenrod':return("0xdaa520");
			case 'crimson':return("0xdc143c");
			case 'gainsboro':return("0xdcdcdc");
			case 'plum':return("0xdda0dd");
			case 'burlywood':return("0xdeb887");
			case 'lightcyan':return("0xe0ffff");
			case 'lavender':return("0xe6e6fa");
			case 'darksalmon':return("0xe9967a");
			case 'violet':return("0xee82ee");
			case 'palegoldenrod':return("0xeee8aa");
			case 'lightcoral':return("0xf08080");
			case 'khaki':return("0xf0e68c");
			case 'aliceblue':return("0xf0f8ff");
			case 'honeydew':return("0xf0fff0");
			case 'azure':return("0xf0ffff");
			case 'sandybrown':return("0xf4a460");
			case 'wheat':return("0xf5deb3");
			case 'beige':return("0xf5f5dc");
			case 'whitesmoke':return("0xf5f5f5");
			case 'mintcream':return("0xf5fffa");
			case 'ghostwhite':return("0xf8f8ff");
			case 'salmon':return("0xfa8072");
			case 'antiquewhite':return("0xfaebd7");
			case 'linen':return("0xfaf0e6");
			case 'lightgoldenrodyellow':return("0xfafad2");
			case 'oldlace':return("0xfdf5e6");
			case 'red':return("0xff0000");
			case 'fuchsia':return("0xff00ff");
			case 'magenta':return("0xff00ff");
			case 'deeppink':return("0xff1493");
			case 'oranger':return("0xff4500");
			case 'tomato':return("0xff6347");
			case 'hotpink':return("0xff69b4");
			case 'coral':return("0xff7f50");
			case 'darkorange':return("0xff8c00");
			case 'lightsalmon':return("0xffa07a");
			case 'orange':return("0xffa500");
			case 'lightpink':return("0xffb6c1");
			case 'pink':return("0xffc0cb");
			case 'gold':return("0xffd700");
			case 'peachpuff':return("0xffdab9");
			case 'navajowhite':return("0xffdead");
			case 'moccasin':return("0xffe4b5");
			case 'bisque':return("0xffe4c4");
			case 'mistyrose':return("0xffe4e1");
			case 'blanchedalmond':return("0xffebcd");
			case 'papayawhip':return("0xffefd5");
			case 'lavenderblush':return("0xfff0f5");
			case 'seashell':return("0xfff5ee");
			case 'cornsilk':return("0xfff8dc");
			case 'lemonchiffon':return("0xfffacd");
			case 'floralwhite':return("0xfffaf0");
			case 'snow':return("0xfffafa");
			case 'yellow':return("0xffff00");
			case 'lightyellow':return("0xffffe0");
			case 'ivory':return("0xfffff0");
			case 'white':return("0xffffff");
			default: return('0x' + $.trim(color));
		}
}
