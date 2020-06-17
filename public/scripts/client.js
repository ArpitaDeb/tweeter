/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
    const createTweetElement = function(tweetData) {
        const $tweetPost = `
 <article class="tweet">
 <header>
  <div class="profile">
  <img class="avatar" src=${tweetData.user.avatars} alt="" />
  <p class="firstLastName">${tweetData.user.name}</p>
  </div>
  <p class="uname">${tweetData.user.handle}</p>
  </header>
  <p class="sentence">${tweetData.content.text}</p>
  <footer>
  <div class="date">
  <p class="days">${tweetData.created_at}</p>
  </div>
  </footer>
  </article>
 `
        return $tweetPost;
    };
    $('form').on('submit', () => {
        const $tweet = createTweetElement(tweetData);
        console.log($tweet);
        $('#tweets-container').append($tweet);
    })


    // Test / driver code (temporary). Eventually will get this from the server.
    const tweetData = {
        "user": {
            "name": "Newton",
            "avatars": "https://i.imgur.com/73hZDYK.png",
            "handle": "@SirIsaac"
        },
        "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
    }

    // Test / driver code (temporary)
    // to see what it looks like
    // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    // Fake data taken from initial-tweets.json
    const data = [{
            "user": {
                "name": "Newton",
                "avatars": "https://i.imgur.com/73hZDYK.png",
                "handle": "@SirIsaac"
            },
            "content": {
                "text": "If I have seen further it is by standing on the shoulders of giants"
            },
            "created_at": 1461116232227
        },
        {
            "user": {
                "name": "Descartes",
                "avatars": "https://i.imgur.com/nlhLi3I.png",
                "handle": "@rd"
            },
            "content": {
                "text": "Je pense , donc je suis"
            },
            "created_at": 1461113959088
        }
    ]

    const renderTweets = function(tweets) {
        // loops through tweets
        for (let element of tweets) {
            // calls createTweetElement for each tweet
            let $tweet = createTweetElement(element);
            // takes return value and appends it to the tweets container
            $("#tweets-container").append($tweet);
        }
    }

    renderTweets(data);
});