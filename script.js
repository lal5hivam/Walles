function openModal(type) {
  document.getElementById(`modal-${type}`).style.display = 'block';
}

function closeModal(type) {
  document.getElementById(`modal-${type}`).style.display = 'none';
}

window.onclick = function(event) {
  const modals = ['web', 'consultancy', 'other'];
  modals.forEach(type => {
    const modal = document.getElementById(`modal-${type}`);
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// Scroll to card section
function scrollToSection() {
  document.getElementById('cardsSection').scrollIntoView({ behavior: 'smooth' });
}

// Reveal cards on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
