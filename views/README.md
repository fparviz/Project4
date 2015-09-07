frontend-nanodegree-browser-optimization
===============================


Resources used for project:  


1. Code School (https://www.codeschool.com) for Javascript class  
2. Udacity class on Browser Rendering Optimization 
3. Udacity P4 Forum discussions  


How to Run:

1. Visit my GitHub Page https://github.com/fparviz/Project4 
2. Open the file 'index.html' 
3. Scroll the website to see the pizza animation 

Optimizations made in views/js/main.js:   

1. From looking at the timeline of the original site, I was able to identify that the problem lied in the function updatePositions. 
2. I added a worker thread animationReadyCheck that calls updatePosition rather than having it in the main thread. 
3. From animating Layout, I changed it to use transform. 
4. I changed the number of pizzas being created from 200 to 22   
  
