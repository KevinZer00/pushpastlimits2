let url = 'https://api.sheety.co/9e8b82aa06a9300f5d9280b134fcc5f4/pushPastLimitsBlog/sheet1';

// function to structure the text from Google Sheets
function formatBodyText(text) {
    // detects numbered lists and formats them into HTML list items
    const listPattern = /^(\d+)\.\s+/gm;

    if (listPattern.test(text)) {
        // wrap the detected numbered list into <ol> and <li> tags
        const formattedText = text
            .replace(listPattern, '<li>') // example: replace "1." with "<li>"
            .replace(/\n/g, '</li>\n'); // close the list items at each new line

        return `<ol>${formattedText}</ol>`;
    } else {
        // for non-list text, detect new lines and wrap each line in <p> tags
        const paragraphs = text
            .split('\n') // split the text by new line characters
            .map(line => `<p>${line}</p>`) // wrap each segment in <p> tags
            .join('<br>'); // join them back together

        return paragraphs;
    }
}


fetch(url)
    .then((response) => response.json())
    .then(json => {
        const blogPosts = json.sheet1;
        const blogContainer = document.getElementById('blog-grid');

        // loop through the blog posts and display
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');

            // use the formatBodyText() function to format the body of the post
            const formattedBody = formatBodyText(post.body);

            // create HTML structure for each blog post
            postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p class="date">Published on ${new Date(post.date).toLocaleDateString()}</p>
          <p>${formattedBody}</p>
    `;

            // append blog post to container 
            blogContainer.appendChild(postElement);
        });
        console.log(json.sheet1S);
    });