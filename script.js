(function () {
  "use strict";

  var toggle = document.getElementById("solar-toggle");
  var switchLabel = document.getElementById("switch-label");
  var dot = document.getElementById("solar-dot");
  var status = document.getElementById("solar-status");
  var text = document.getElementById("solar-text");
  var mode = document.getElementById("charging-mode");
  var updated = document.getElementById("last-updated");

  function stamp() {
    var now = new Date();
    updated.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    updated.setAttribute("datetime", now.toISOString());
  }

  function render(on) {
    toggle.setAttribute("aria-checked", String(on));
    switchLabel.textContent = on ? "On" : "Off";
    dot.className = "dot " + (on ? "dot-green" : "dot-grey");
    status.textContent = on ? "Active" : "Inactive";
    text.textContent = on ? "Solar charging enabled" : "Solar charging disabled";
    mode.textContent = on ? "Solar Charging" : "Standby";
  }

  toggle.addEventListener("click", function () {
    var next = toggle.getAttribute("aria-checked") !== "true";
    render(next);
    stamp();
  });

  render(false);
  stamp();
})();
