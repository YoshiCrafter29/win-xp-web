var main = function(args) {
    var w = WindowAPI.CreateWindow("Web XP's Documentation");
    var iframe = document.createElement("div");
    iframe.style.boxSizing = "border-box";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    //iframe.style.border = "1px solid #000";
    iframe.innerHTML = `<h1>Welcome to the Web XP's Documentation !</h1>
	<p>This documentation will learn you to make a JS program for this Web Browser Windows XP !</p>
	<br>
	<h3>1. Create a simple Window</h3>
	<p><b>a. Create the Window element</b></p>
	<p>Before creating a Window, we'll learn about the WindowAPI. What is the WindowAPI ? It's the API used to make Windows, Context Menus, add elements in start menu, ect... To create a Window, use <smallCode>WindowAPI.CreateWindow("Title name")</smallCode>. It'll return the Window itself.</p>
	<p><b>b. Add elements to the Window's content</b></p>
	<p>After creating the Window, there is a few more values in it. The <smallCode>content</smallCode> value will return the Window's client, the <smallCode>titlebar</smallcode> Will return JSON with Close, Max, Min, and the title text, and the <smallCode>setTitle(text)</smallCode> function will set the Window's title. To get the Window's content, use <smallCode>Window.content</smallCode>.
	<p><b>3. The window doesn't get focus by default, what do i do ?</b></p>
	<p>Actually, the window doesn't directly get focused after it's creation. It can be useful to make Gadgets, or custom notifications. To focus the Window, use <smallCode>window.focus()</smallCode>.</p>
	<p><b>4. An example code</b></p>
	<p>Here's an example "Hello, world !" code.</p>
	<code oncontextmenu="event.stopPropagation();">
		<p>var window = WindowAPI.CreateWindow("Hello world program");</p>
		<p>window.content.innerText = "Hello, world !";</p>
		<p>window.focus();</p>
	</code>
	<p>Here's the result :</p>
	<img src="img/documentation/HelloWorldApp.png">
	
	<h3>2. Messageboxes</h3>
	<p>Exceptions are handled by messageboxes. However, if you want to create your own, it's easy. All you'll need to do is use <smallCode>WindowAPI.ShowError()</smallCode>. This function require 3 arguments. errorText, errorTitle and ErrorType. errorText is the text displayed in the message box, errorTitle is the caption of the error Window, and ErrorType (ErrorIconID) is the error type.=</p>
	<p>Here's the values that ErrorType accepts.</p>
	<p>0 : <img src="img/Icons/Icon_52.ico"></p>
	<p>1 : <img src="img/Icons/Icon_60.png"></p>
	<p>2 : <img src="img/Icons/Icon_49.ico"></p>
	<p>Like .net, the error sound depends on the ErrorType too.</p>`
    iframe.style.overflow = "hidden scroll";
    iframe.style.padding = "5px";
    w.content.appendChild(iframe);
    w.focus();
}