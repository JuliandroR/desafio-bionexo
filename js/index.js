let span_events = document.getElementsByClassName("switch-event");

for (const span in span_events) {
  try {
    span_events[span].addEventListener("click", () => {
      if (!span_events[span].classList.contains("selected")) {
        span_events[span].classList.add("selected");
        displayContainer(span_events[span].firstElementChild.innerHTML);
        for (const key in span_events) {
          try {
            if (key != span) {
              span_events[key].classList.remove("selected");
            }
          } catch (error) {}
        }
      } else {
        span_events[span].classList.remove("selected");
        for (const key in span_events) {
          try {
            if (key != span) {
              span_events[key].classList.add("selected");
              displayContainer(span_events[key].firstElementChild.innerHTML);
            }
          } catch (error) {}
        }
      }
    });
  } catch (error) {}
}


const displayContainer = (titleSwitch) =>{
    if(titleSwitch === "Próximos Eventos"){
        document.getElementById("next-events").style.display = "block"
        document.getElementById("past-events").style.display = "none"
    }else{
        document.getElementById("past-events").style.display = "block"
        document.getElementById("next-events").style.display = "none"
    }
}


let view_more_button = document.getElementById("view-more-button");

view_more_button.addEventListener("click", () => {
  let past_events = document.getElementsByClassName("past-event");

  if (view_more_button.innerHTML === "Ver mais") {
    for (const id in past_events) {
      try {
        if (past_events[id].classList.contains("hidden")) {
          past_events[id].classList.remove("hidden");
        }
      } catch (error) {}
    }
    view_more_button.innerHTML = "Ver menos";
  } else {
    for (let i = 3; i < past_events.length; i++) {
      past_events[i].classList.add("hidden");
    }
    view_more_button.innerHTML = "Ver mais";
  }
});
