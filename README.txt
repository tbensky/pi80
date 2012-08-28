pi80: a small browser-based programming language and environment.

Usage
-----
From your html5 compliant browser, open the file called pi80.html found
in this packaage.  You will be greeted with a text-editor on the left
and output screen on the right.

Thanks
------
Thanks to CodeMirror (codemirror.net) for the superb in-browser
text-editor. Thanks to jquery and its UI components for making the
browser interactions easy. All files from these fine projects have been
included in pi80's package to make it self-contained, without requiring
an internet connection.

Quick Start
-----------
In the code editor type: 

writeln('hello there') 

then click the "Run" button. You should see the text 'hello there'
appear in the output window. Now try:

for i=1,10,2 do
 writeln('i='+i)
end

and click the "Run" button. Draw some graphics with:

cls('red')
i=0
while i < 400 do
 line(0,i,500,i,'yellow')
 i = i + 10
end

or

for r=10,100,10 do
 circle(250,200,r,"red")
end

Do a bit of animation with:

x=0
while x < 500 animate
 rectangle(x,200,x+10,210,'green')
 x=x+10
end

More examples can be found by scrolling down and selecting an example. 
Clicking on an example will auto-insert code into the editor, which you
may then run, edit, modify, etc.

pi80
----
pi80 is a small, browser-based programming environment. This work was
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


Language
---------
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

but keep in mind that underneath it all, is simply Javascript. Here is a
language description.

Screen output
-------------
Use write and writeln to add a newline after you text, like this:

write('this is a test')
writeln('this will have a blank line after it')

Variables
---------
No types, and no declarations needed. Just write things like:

x=5 
str='this is my text.'
cost=500
account=1200
balance=account-cost
writeln('you have '+balance+' in your account.')_

Loops
-----
While and for loops are available like this

while condition do
...
end

and 

for var=start,end[,step] do
...
end

Javascript is a strange single-threaded language that must keep moving
forward or the whole browser will lock up. Remember to go easy with the
while and for loops.  For animation or keeping a program going for a
while (or forever), we offer a few special kinds of loops.


forever do
...
end

is an endless loop that will keep executing the included statements
forever, in a way that won't lock up your browser (technical way: using
either setTimeout or requestAnimationFrame).

We also have

while condition animate
...
end

which will enter a while loop whose condition should keep things running
for a while. The loop is browser-safe. The 'animate' keyword (instead of
'do') will force the loop to try an execute 60 times per second, and to
clear the output area after each loop interation.

if-statement
------------

if condition then
...
end

executes the included statements if condition is true. No else
variety has been implemented yet.


Keyboard Input
--------------
Interacting with the keyboard can be done as follows:

key = inkey()
-----------

Looks if a key has been pressed.  Returns false if not.  You will have
to enter a long term loop to make this function useful, like this

forever do
 key = inkey()
 if key <> false then
  writeln(key)
 end
end

which will print the keycodes as they are typed. Be sure to click in the output
window to give it focus.

str = input(prompt)
-----------------

This will bring up Javascript's annoying prompt window, but will return
the string typed by the user.

str = lineinput()
---------------
Works more like inkey() in that is returns false unless a complete line
has a been typed. Again a long-term loop is needed for this, like

write('What is your name? ')
forever do
	x = lineinput()
	if x <> false then
		writeln('Hi '+x);
	end
end

Operators 
---------
Optional mappings can be used to keep the beginner away from strange symbols.

* Use and and or instead of && and ||.
* Use <> instead !=

