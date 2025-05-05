// 1. Event Handling
const btn = document.getElementById('changeBtn');
const colorText = document.getElementById('colorText');
let colors = ['#e74c3c', '#2ecc71', '#3498db', '#f1c40f'];
let index = 0;

btn.addEventListener('click', () => {
  colorText.style.color = colors[index];
  index = (index + 1) % colors.length;
});

btn.addEventListener('dblclick', () => {
  alert('🎉 Double-click secret unlocked!');
});

document.addEventListener('keydown', (e) => {
  document.getElementById('keyOutput').textContent = `You pressed: ${e.key}`;
});

// 2. Slideshow
const slides = document.querySelectorAll('.slideshow img');
let slideIndex = 0;
setInterval(() => {
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}, 2000);

// 3. Tabs
function showTab(i) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(c => c.classList.remove('active'));
  contents[i].classList.add('active');
}

// 4. Form Validation
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');

const nameFeedback = document.getElementById('nameFeedback');
const emailFeedback = document.getElementById('emailFeedback');
const passFeedback = document.getElementById('passFeedback');

nameInput.addEventListener('input', () => {
  nameFeedback.textContent = nameInput.value.trim().length >= 3 ? 'Looks good!' : 'Name must be at least 3 characters.';
  nameFeedback.className = nameInput.value.trim().length >= 3 ? 'feedback valid' : 'feedback';
});

emailInput.addEventListener('input', () => {
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  emailFeedback.textContent = emailValid ? 'Valid email.' : 'Invalid email format.';
  emailFeedback.className = emailValid ? 'feedback valid' : 'feedback';
});

passInput.addEventListener('input', () => {
  passFeedback.textContent = passInput.value.length >= 8 ? 'Strong password.' : 'Password must be 8+ characters.';
  passFeedback.className = passInput.value.length >= 8 ? 'feedback valid' : 'feedback';
});

form.addEventListener('submit', (e) => {
  if (
    nameInput.value.trim().length < 3 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value) ||
    passInput.value.length < 8
  ) {
    e.preventDefault();
    alert("Yu've got some errors PLEASE fix them before submitting.");
  }
});
