const reviews = [
  {
    name: "Marvin McKinney",
    rating: 3,
    message:
      "The team clearly has talent, and the final product met my expectations in terms of quality and functionality. However, the communication throughout the process left much to be desired — I found myself having to reach out several times for updates, which delayed the timeline and created some frustration. With better responsiveness, this could have been a much smoother experience.",
    date: "Jun 24, 2025",
  },
  {
    name: "Jacob Jones",
    rating: 5,
    message:
      "The quality of their work exceeded my expectations, with remarkable attention to detail at every stage. Their creative designs truly elevated my brand’s image, and they were proactive in offering suggestions that improved the outcome even further. Working with them was seamless and enjoyable — highly recommended!",
    date: "Jun 24, 2025",
  },
];

const inboxList = document.getElementById("inbox-list");
const reviewDetails = document.getElementById("review-details");

function loadInbox() {
  inboxList.innerHTML = "";
  reviews.forEach((review, i) => {
    const div = document.createElement("div");
    div.class = "p-4 rounded-md border hover:bg-gray-100 cursor-pointer";
    div.innerHTML = `
      <div class="flex item-center  px-2 space-x-2 ">
      <div class="profile flex space-x-3 -ml-4">
      <img src="assets/profile-icon.svg" class="w-7 h-7 />
            <div class="font-semibold">${review.name}</div>

      </div>
      <div class="name ">
      <div class="text-sm text-gray-500">${review.date}</div>
      </div>
      </div>
      <div class="text-yellow-500 mb-1">${"★".repeat(review.rating)}</div>
      <div class="text-sm text-gray-600">${review.message.slice(0, 60)}...</div>
    `;
    div.onclick = () => showDetails(i);
    inboxList.appendChild(div);
  });
}

function showDetails(i) {
  const review = reviews[i];
  reviewDetails.innerHTML = `
   <div class="flex items-center justify-between mx-2 border-b pb-3">
        <p class="font-medium text-lg">Review</p>
        <div class="flex justify-between items-center space-x-2 w-42 pr-2 border rounded-full bg-gray-200">
          <img src="assets/profile-icon.svg" alt="pfp" class="h-8 w-8 " />
              <p class="text-xs mb-2">${review.name}</p>

        </div>
        
      </div>

    <div class="flex space-x-2">
          <img src="assets/profile-icon.svg" alt="pfp" class="h-9 w-9 " />
              <p class="font-medium mb-2">${review.name}</p>

        </div>
    <p class="text-sm text-gray-500">Posted on: ${review.date}</p>
    <div class="text-yellow-500 text-2xl mb-4">${"★".repeat(
      review.rating
    )}</div>
    <p class="mb-4">${review.message}</p>
    <textarea class="w-full border p-2 rounded mb-2" placeholder="Write a reply..."></textarea>
    <button class="bg-blue-600 text-white px-4 py-2 rounded">Reply</button>
  `;
}

window.onload = loadInbox;
