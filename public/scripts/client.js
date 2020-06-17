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
    // Test / driver code (temporary). Eventually will get this from the server.


    // Test / driver code (temporary)
    // to see what it looks like
    // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    // Fake data taken from initial-tweets.json


    const renderTweets = function(tweets) {
            // loops through tweets
            for (let element of tweets) {
                // calls createTweetElement for each tweet
                let $tweet = createTweetElement(element);
                // takes return value and appends it to the tweets container
                $("#tweets-container").prepend($tweet);
            }
        }
        //renderTweets(data);

    $('form').on('submit', (event) => {
        event.preventDefault();
        let formData = $("form").serialize();
        $.ajax({
            url: "/tweets/",
            method: "POST",
            dataType: 'JSON',
            data: formData
        }).then(function(response) {
            console.log(response);
        });
    })
    const loadtweets = () => {
        $.ajax({
            url: `http://localhost:8080/tweets`,
            method: "GET",
            dataType: 'JSON'
        }).then(function(tweetsresponse) {
            console.log('success', tweetsresponse);
            renderTweets(tweetsresponse);
        })
    };
    loadtweets();

});