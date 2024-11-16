
let blogs = [
    {
        title: "How to Learn JavaScript",
        content: "JavaScript is a versatile programming language. Whether you're a beginner or an experienced developer, mastering JavaScript is essential for building modern web applications. In this blog, we'll explore various learning resources and tips for mastering JavaScript.",
        comments: [
            "Great tips! I just started learning JavaScript and this helped me a lot!",
            "This is a comprehensive guide. I learned a lot!"
        ]
    },
    {
        title: "Top 5 Travel Destinations for 2024",
        content: "2024 is shaping up to be a fantastic year for travel. From the beaches of Bali to the historic streets of Europe, here are the top five destinations you should visit this year.",
        comments: [
            "I have been to Bali! Such a beautiful place!",
            "I can't wait to visit Europe. This guide will be really helpful!"
        ]
    },
    {
        title: "The Future of Artificial Intelligence",
        content: "Artificial intelligence is evolving rapidly. From chatbots to self-driving cars, AI is changing the world as we know it. In this blog, we'll discuss how AI is being used today and where it's headed in the future.",
        comments: [
            "AI is fascinating. I am excited to see where it's going!",
            "Amazing insights! I agree that AI will revolutionize many industries."
        ]
    }
];

let currentPostIndex = null;

// Handle the creation of a new blog post
document.getElementById("post-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;

    if (title && content) {
        const newPost = {
            title: title,
            content: content,
            comments: []
        };

        blogs.push(newPost);
        renderBlogs();
        document.getElementById("post-title").value = '';
        document.getElementById("post-content").value = '';
    }
});

// Render the list of all blog posts
function renderBlogs() {
    const blogListDiv = document.getElementById("blog-list");
    blogListDiv.innerHTML = ''; // Clear previous posts

    blogs.forEach((post, index) => {
        const blogDiv = document.createElement("div");
        blogDiv.classList.add("blog-post");
        blogDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content.substring(0, 100)}...</p>
            <button onclick="viewPost(${index})">Read More</button>
        `;
        blogListDiv.appendChild(blogDiv);
    });
}

// Display a specific blog post and show the comments section
function viewPost(index) {
    currentPostIndex = index;
    const post = blogs[index];

    const commentSection = document.getElementById("comments-section");
    commentSection.style.display = "block";

    // Display post content
    const blogListDiv = document.getElementById("view-posts");
    blogListDiv.innerHTML = `
        <div class="blog-post">
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        </div>
    `;

    // Render existing comments for the post
    renderComments(post.comments);
}

// Render the comments for a selected blog post
function renderComments(comments) {
    const commentsDiv = document.getElementById("comments");
    commentsDiv.innerHTML = ''; // Clear previous comments

    comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.textContent = comment;
        commentsDiv.appendChild(commentDiv);
    });
}

// Handle the submission of a comment
document.getElementById("submit-comment").addEventListener("click", function() {
    const commentText = document.getElementById("comment-text").value;

    if (commentText && currentPostIndex !== null) {
        blogs[currentPostIndex].comments.push(commentText);
        renderComments(blogs[currentPostIndex].comments);
        document.getElementById("comment-text").value = ''; // Clear the comment box
    }
});

// Initial rendering of blog posts
renderBlogs();
