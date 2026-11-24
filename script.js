
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// فتح وإغلاق قائمة الموبايل
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// إغلاق القائمة بعد اختيار أي قسم
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// إرسال الاشتراك إلى واتساب
const bookingNumber = "9647728017552";

document.querySelectorAll(".choose-plan").forEach((button) => {
  button.addEventListener("click", () => {
    const plan = button.dataset.plan;
    const message = `مرحباً روز فتنس، أريد الاستفسار والحجز على ${plan}.`;
    const whatsappLink =
      `https://wa.me/${bookingNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  });
});

// السنة الحالية في أسفل الموقع
document.getElementById("year").textContent = new Date().getFullYear();
