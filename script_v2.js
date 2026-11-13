const pageOne = document.getElementById("pageOne");
const pageTwo = document.getElementById("pageTwo");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalAction = document.getElementById("modalAction");

const whatsappNumber = "201127780678";
const messageGroup = "https://chat.whatsapp.com/H3G5S8jUHNyK4awaYYShxr?s=cl&p=a&iam=2";

function showPageTwo() {
  pageOne.classList.add("hidden");
  pageTwo.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function showPageOne() {
  pageTwo.classList.add("hidden");
  pageOne.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function openModal(title, text, actionText, actionHref) {
  modalTitle.textContent = title;
  modalText.textContent = text;
  if (actionText && actionHref) {
    modalAction.textContent = actionText;
    modalAction.href = actionHref;
    modalAction.classList.remove("hidden");
  } else {
    modalAction.removeAttribute("href");
    modalAction.classList.add("hidden");
  }
  modalBackdrop.classList.remove("hidden");
}
function closeModal() { modalBackdrop.classList.add("hidden"); }

document.getElementById("openInvite").addEventListener("click", showPageTwo);
document.getElementById("backButton").addEventListener("click", showPageOne);

document.getElementById("locationButton").addEventListener("click", () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("أهلاً، ممكن تبعتيلي تفاصيل لوكيشن حنة نورهان؟ 😂")}`;
  openModal("بيت العروسة 😂", "اضغطي هنا عشان ديه خصوصيات 😂", "اضغطي هنا", url);
});

document.getElementById("dateButton").addEventListener("click", () => {
  openModal("ميعادنا مع نورهان 💜", "الإثنين ١٦ نوفمبر ٢٠٢٦\\nالساعة ٦ مساءً", "تمام، مستنياكم ❤️", null);
});

document.getElementById("messageButton").addEventListener("click", () => {
  openModal("كلمة حلوة للعروسة 💌", "سيبي لنورهان كلمة حلوة أو دعوة من قلبك في جروب الواتساب ❤️", "اكتبي كلمتك لنورهان", messageGroup);
});

document.getElementById("confirmButton").addEventListener("click", () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("تأكيد حضور حنة نورهان يوم الإثنين ١٦ نوفمبر ٢٠٢٦ الساعة ٦ مساءً ❤️")}`;
  openModal("مستنياكي يا قمر! 💃", "ياريت تأكدي حضورك علشان نفرح بنورهان سوا.", "تأكيد الحضور على واتساب", url);
});

document.getElementById("closeModal").addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
