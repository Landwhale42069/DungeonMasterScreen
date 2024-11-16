```dataviewjs
const div = document.createElement("div");
div.setAttribute("class", "health-bar");

const slider = document.createElement("input");
slider.setAttribute("class", "health-bar-slider");
slider.setAttribute("type", "range");
slider.setAttribute("min", 0);
slider.setAttribute("max", 100);
slider.setAttribute("value", 100);

div.appendChild(slider);
dv.container.appendChild(div);
```