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
  