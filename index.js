const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        id: "post-one",
        dataId: 1,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        id: "post-two",
        dataId: 2,
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment:
            "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        id: "post-three",
        dataId: 3,
    },
];

const mainElement = document.querySelector("main");

function renderPost() {
    let items = "";
    for (let i = 0; i < posts.length; i++) {
        items += `
        <section id="${posts[i].id}">
            <header class="about">
                <img class="avatar-pic" src="${posts[i].avatar}" />
                <div class="avatar-short-info">
                    <p class="avatar-name">${posts[i].name}</p>
                    <p class="avatar-location">${posts[i].location}</p>
                </div>
            </header>
            <article class="post">
                <img
                    class="post-pic"
                    src="${posts[i].post}"
                    alt="a portrait of ${posts[i].name}"
                />
                <div class="post-icons">
                    <span class="icon heart" data-id="${posts[i].dataId}">
                        <i class="fa-regular fa-heart"></i>
                    </span>
                    <span class="icon">
                        <i class="fa-regular fa-comment"></i>
                    </span>
                    <span class="icon">
                        <i class="fa-regular fa-paper-plane"></i>
                    </span>
                </div>
                <p class="likes">${posts[i].likes} likes</p>
                <p class="comment">
                    <span class="username">${posts[i].username}</span>
                    ${posts[i].comment}
                </p>
            </article> 
        </section>
        `;
    }

    mainElement.innerHTML = items;
}

mainElement.addEventListener("dblclick", function (e) {
    if (e.target.closest(".heart")) {
        const heartIcon = e.target.closest(".heart");
        const postId = parseInt(heartIcon.getAttribute("data-id"));

        const post = posts.find((p) => postId === p.dataId);
        if (post) {
            post.likes++;
            const likesElement = document
                .querySelector(`#${post.id}`)
                .querySelector(".likes");
            likesElement.textContent = `${post.likes} likes`;
        }
    }
});

renderPost();
