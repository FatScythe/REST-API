const allPost = document.querySelector("main #all");
const editPost = document.querySelector("main #edit form");
const editIDInput = document.querySelector("main #edit form #editID");
const editTitleInput = document.querySelector("main #edit form #title");
const editDescInput = document.querySelector("main #edit form #desc");

const FetchAllPost = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api`);
    const { posts } = await response.json();
    posts.map((post) => {
      allPost.innerHTML += `<div class="post">
                      <div>
                          <div class="title">${post.title}</div>
                          <code class="id">${post._id}</code>
                      </div>
                      <p>
                    <span>${post.description}</span>
                    <span class="fn-btn">
                    <a href="#edit">
                      <button class="edit-btn edit" data-id="${post._id}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="edit" data-id="${post._id}" >
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" data-id="${post._id}" class="edit" />
                        </svg>
                      </button>
                    </a> 

                      <button class="delete-btn delete" data-id="${post._id}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="delete" data-id="${post._id}">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" data-id="${post._id}" class="delete"  />
                        </svg>
                      </button>
                    </span>
                    
                </p>
                  </div>`;
    });
  } catch (err) {
    console.log(err);
  }
};

FetchAllPost();

const handleDeletePost = async (id) => {
  try {
    await fetch(`http://localhost:5000/api/${id}`, {
      method: "DELETE",
    });

    location.reload();
    console.log("deleted sucessfully");
  } catch (error) {
    console.log(error);
  }
};

const handleEditPost = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/${id}`);
    const { data } = await response.json();
    const { title, description } = data;
    editIDInput.value = id;
    editDescInput.value = description;
    editTitleInput.value = title;
  } catch (error) {
    console.log(error);
  }
};

allPost.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let deleteID =
      e.target.dataset.id ||
      e.target.parentElement.dataset.id ||
      e.target.parentElement.parentElement;
    handleDeletePost(deleteID);
  }

  if (e.target.classList.contains("edit")) {
    editID =
      e.target.dataset.id ||
      e.target.parentElement.dataset.id ||
      e.target.parentElement.parentElement;

    handleEditPost(editID);
  }
});

editPost.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    let editID = editIDInput.value;
    await fetch(`http://localhost:5000/api/${editID}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: editTitleInput.value,
        description: editDescInput.value,
      }),
    });
    location.reload();
    console.log("updated sucessfully");
  } catch (err) {
    console.log(err);
  }
});
