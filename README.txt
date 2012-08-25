pi80 
====

pi80 is a minimal browser-based programming environment. This work was
originally developed for the Raspberry Pi, which seemed like was in need
of a small-footprint programming environment.  Requring only an HTML5
compliant browser (such as Midori browser installed on the Rasp. Pi), it
has a code editor, output screen, and single "run" button all in a
single browser window. Both text and graphics output are available, with
graphics made possible by the HTML5 canvas.

The name "pi80" is a play on words, reminicent of the computer scene in
the 1980's (and the TRS-80), in which the computer world was filled with
different machines that essentially booted directly into some dialect of
the BASIC programming language, more-or-less requiring everyone to learn
a bit of programming in order to even use the systems at all.  We feel
as if this "low-level-ish" view of computers has been lost for the most
part, and many people have an outright aversion to even the idea of
"programming a computer." Pi80 is written with the same spirit as these
early computers: "turn it on and program," with one-line programs
entirely possible, such as writeln('hello there') to print some text and
circle(50,50,10,"red") which will draw a red 10-pixel-radius circle at
(50,50).

The entire package is meant to serve as a platform for learning how to
program with an ultra-small footprint and essentially zero-installation.
Simply point your browser to the pi80.html (local) file and off you go.
The system doesn't need an Internet connection or any kind of framework.

The driving language is Javascript, which is built in to all browsers,
but pi80 has a Javascript preprocessor, ridding the beginning programmer
of concerns about semicolons or curly bracers.  The preprocessor
attempts to adapt Javascript into the clean(er) syntax of the Lua
language (lua.org).  So instead of

for(i=0;i<=10;i++) 
{ 
	console.log(i); 
}

you would write

for i=1,10 do 
	writeln(i) 
end

