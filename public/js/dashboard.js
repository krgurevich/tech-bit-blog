const newFormHandler = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector("#post_title").value.trim();
  const post_text = document.querySelector("#post_content").value.trim();

  if (post_title && post_text) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ post_title, post_text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create a new post");
    }
  }
};

const delButtonHandler = async (event) => {
  if (window.event.target.hasAttribute("data-id")) {
    const id = window.event.target.getAttribute("data-id");
    console.log(id);
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};

const updateFormHandler = async (event) => {
  window.event.preventDefault();
  if (window.event.target.hasAttribute("data-id")) {
    const id = window.event.target.getAttribute("data-id");
    const post_title = document.querySelector("#post_title").value.trim();
    const post_text = document.querySelector("#post_content").value.trim();
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ post_title, post_text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update post");
    }
  }
};

document.getElementById("newpost").addEventListener("submit", newFormHandler);
