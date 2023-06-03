$(document).ready(function () {

    $(function () {

        var FB_URL = "https://www.facebook.com/iiitsuratofficial";
        var TWITTER_URL = "https://twitter.com/IIITSurat";
        var YOUTUBE_URL = "https://www.youtube.com/channel/UC5gvfNru20qMJBnYFPWoiiw";

        $("#lnkFb").attr("href", FB_URL);
        $("#lnkTwitter").attr("href", TWITTER_URL);
        $("#lnkYoutube").attr("href", YOUTUBE_URL);

        $(".copyright").empty();
        var year = new Date().getFullYear();
        $(".copyright").html("<div class='container'><p>&copy Copyrights " + year + ". All Rights Reserved <a href='http://credoinfotech.com' target='_blank'>Credo Infotech</a></p></div>");

    });


});
