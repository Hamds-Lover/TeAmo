function openEnvelope() {
    // Get envelope and paper elements
    const envelope = document.querySelector('.envelope');
    const paper = document.querySelector('.paper');
  
    // Add the 'opened' class to the envelope
    envelope.classList.add('opened');
  
    // Ensure the paper becomes visible
    paper.style.opacity = '1';
  }
  