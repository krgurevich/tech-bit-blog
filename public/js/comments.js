const commentFormHandler = async function (event) {
  event.preventDefault();

  const post_id = document
    .querySelector("#new-comment-container")
    .getAttribute("data-id");
  const comment_text = document.querySelector("#comment_text").value.trim();
  console.log(post_id);
  if (comment_text) {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.location.reload();
  }
};

document
  .querySelector("#new-comment-container")
  .addEventListener("submit", commentFormHandler);
