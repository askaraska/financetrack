let currentStep = 0;
const steps = document.querySelectorAll(".step");
const indicator = document.getElementById("step-indicator");

function showStep(index) {
  steps.forEach(step => step.classList.remove("active"));
  steps[index].classList.add("active");
  indicator.innerText = `Step ${index + 1} of 6`;
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    window.location.href = "dashboard.html";
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

showStep(currentStep);
