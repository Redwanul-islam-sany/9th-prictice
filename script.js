// আপনি যদি গ্যালারিতে কিছু ইন্টারেক্টিভ ফিচার যোগ করতে চান, তাহলে এখানে JavaScript কোড লিখতে পারেন।
// উদাহরণস্বরূপ, একটি মডাল উইন্ডো যোগ করা যেতে পারে যখন কোনো ছবিতে ক্লিক করা হয়।

const images = document.querySelectorAll(".gallery img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    alert("তুমি আমার হৃদয়ের রানী! ❤️" + "I Love you ❤️");
  });
});
