Sketch Pad Project - The Odin Project: My Sketch Pad Project
==================================================

Project Overview:
-----------------
Create an interactive sketch pad where users can "draw" by moving their mouse over a dynamically
generated grid of squares. The grid is built using JavaScript and styled with CSS Flexbox.
As the user hovers over the grid squares, they change color to leave a pixelated trail.
Additionally, users can reset the grid to a custom size via a prompt, allowing for a flexible drawing 
experience.

Core Requirements:
------------------
1. Grid Creation:
   - Create a webpage with a 16x16 grid of square divs.
   - Dynamically generate the divs using JavaScript (do not hand-code them in your HTML).
   - Place the grid squares inside a container div (this container can be defined in your HTML file).
   - Use Flexbox to arrange the divs as a grid (do not use CSS Grid for this project).
   - Pay attention to borders and margins, as they can affect the size of the squares.
   - Troubleshooting:
       • Ensure your CSS stylesheet is properly linked.
       • Open your browser’s developer tools to check for JavaScript errors.
       • Inspect the "Elements" panel to verify the divs are being created and displayed.
       • Use console.log statements in your JavaScript to confirm your code is executing.

2. Hover Effect:
   - Implement a hover effect so that when the mouse passes over a grid square, its color changes,
     leaving a "pixelated" trail similar to drawing with a pen.
   - Suggestions for implementation:
       • Use event listeners (e.g., mouseenter or mouseover) to detect when the mouse interacts with a square.
       • Change the square’s background color by either adding a new class or modifying its style directly.

3. Dynamic Grid Resizing:
   - Add a button at the top of the screen that triggers a popup (via a prompt) asking for the 
     number of squares per side for a new grid.
   - Upon receiving the input:
       • Remove the existing grid.
       • Generate a new grid in the same total space as before (e.g., a 960px-wide container), so that
         the squares resize accordingly.
   - Limit the user input to a maximum of 100 squares per side to prevent performance issues or browser crashes.
   - Research HTML button elements and how to execute a JavaScript function when the button is clicked.

4. Version Control:
   - Push your completed project to GitHub.

Extra Credit:
-------------
Enhance the interactive behavior of the grid squares with one or both of the following features:

1. Randomized Colors:
   - Instead of applying the same color every time, randomize the RGB values for each square
     when it is hovered over.

2. Progressive Darkening:
   - Implement a progressive darkening effect where each hover interaction darkens the square by 10%.
   - After 10 interactions, the square should be fully dark (or completely colored).
   - Hint: Consider using the CSS opacity property to achieve this effect. Refer to MDN docs on opacity for guidance.

==================================================
