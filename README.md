# Text-to-Speech-Converter


key notes:
Optimizing my codes

javascript: 

1) REFLOWS
A reflow (also known as a layout recalculation) is the process where the browser calculates the positions and dimensions of elements on a page. Multiple reflows occur when a script makes several changes to the DOM one after another, 
forcing the browser to repeat these expensive calculations for every single change.

Why Reflows are a prblem
Performance Bottleneck: Reflow is one of the most CPU-intensive operations in the rendering pipeline because changing one element can force the browser to re-measure all its children, siblings, and ancestors.
Browser-Blocking: Both the user and the application are blocked during a reflow; the page may freeze or feel unresponsive until the calculation finishes.
Layout Thrashing: If you "read" a property (like offsetWidth) immediately after "writing" a change, you force a synchronous reflow, making the browser perform layout work mid-script instead of waiting for a natural break

Solving reflows: create a Document fragment to store the new changes before finally putting the appropriate storage. See example:
const newDOMChanges = document.createElementFragment(); /* 
     Creates a document fragments to hold new changes to the DOM i.e the new elements created
    */
    newDOMChanges.appendChild(option);
    voiceSelect.appendChild(newDOMChanges)
    where voiceSelect = document.querySelector("select")
    /*
        stores the new element called option in the document fragement before storing it in the select dropdown         
        */  
2) 
