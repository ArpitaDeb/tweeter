/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
    const createTweetElement = function(tweetData) {
        // to add it to the page so we can make sure it's got all the right elements, classes, etc.
        const $tweetPost = `
        <article class="tweet">
        <header>
          <div class="profile">
          <img class="avatar" src=${tweetData.user.avatars} alt="" />
          <p class="firstLastName">${tweetData.user.name}</p>
          </div>
          <p class="uname">${tweetData.user.handle}</p>
        </header>
          <p class="sentence">${escape(tweetData.content.text)}</p>
        <footer>
          <div class="date">
          <p class="days">${moment(tweetData.created_at, "").fromNow()}</p>
          </div>
        </footer>
        </article>
 `
        return $tweetPost;
    };
    //renderTweets
    const renderTweets = function(tweets) {
        // loops through tweets
        for (let element of tweets) {
            // calls createTweetElement for each tweet
            let $tweet = createTweetElement(element);
            // takes return value and appends it to the tweets container
            $("#tweets-container").prepend($tweet);
        }
    }

    $('form').on('submit', (event) => {
        event.preventDefault();
        let tweetText = $('#tweet-text').val();
        let textLength = tweetText.length;
        const maxMsgLen = 140;
        if (tweetText === "" || tweetText === null) {
            alert("Please post some message");
            return;
        }
        if (textLength > maxMsgLen) {
            alert("tweet content is too long, exceeded allowed maximum message limit");
            return;
        }
        if (textLength > 0 && textLength < 140) {
            let formData = $("form").serialize();
            $.ajax({
                    url: "/tweets/",
                    method: "POST",
                    data: formData,
                })
                .then(loadtweets);
            $('#tweet-text').val('');
        }
    })
    const loadtweets = () => {
        $.ajax({
            url: `/tweets/`,
            method: "GET",
            dataType: 'JSON'
        }).then(function(tweetsresponse) {
            renderTweets(tweetsresponse);
        })
    };
    loadtweets();
    const escape = function(str) {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }
});