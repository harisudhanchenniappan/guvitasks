Document Object:
The document object represents a web page that is loaded in the browser. By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. The document object can be accessed with a window.document or just document.   

Window Object:
The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created.    

A document is an object inside the window object and we use a document object for manipulation inside the document.
The first thing that gets loaded into the browser is the window and the properties related to that window are stored in the window object. Properties related to window objects are length, innerWidth, innerHeight, caches, etc.   
So after the window gets loaded then there’s a document (HTML, PHP, or another document) loaded inside that window, and the properties related to that document is stored in the document object. Properties related to document objects are title, URL, cookie, etc.   

Document :
  1.It represents the document loaded inside the window or browser.
  2.The properties related to it are stored in the document object.
  3.It is loaded after the loading window because the window contains a document.
  4.It is the root element of the document object model.
  5.It is an object of window.
  6.We can not access windows objects properties inside the document.

Window:
  1.It represents the browser window in which you are seeing the content.
  2.The properties related to it are stored in the window object.
  3.It is loaded before the document because window container document.
  4.The window is the global element for all objects, functions, etc.
  5.It is an object of the browser.
  6.We can access document object properties inside the window.