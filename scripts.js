// Custom JavaScript for form submission feedback
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // You can implement custom alerts, confirms, prompts, or other actions here
      alert('Form submitted successfully!');
    });
  });
  