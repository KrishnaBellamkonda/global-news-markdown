# global-news-markdown

### Description 
This is a self-updating news section that updates every hour.

### Set Up 
* Clone the repository
* Make a New York Times account and get a Key for top stories section. Save the section as 
 ```
 KEY = (key obtained from a NYtimes API)
 ```
*  Create a Personnal Access Token GitHub Token for allowing automatic commits and push of updated markdown. (Push and commit authorization is enough). Save this Token as 
```
TOKEN = (Personal Access Token)
```
* Done! You will have a self updating markdown in this respository!

### Curious?
Come back in a few hours and seeif the news section has changed! (Is it too long?)

### Note
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Haiti quake prompted tsunami warning that was later rescinded.
--------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/14/world/americas/haiti-tsunami-warning.html)

[![](https://static01.nyt.com/images/2021/08/14/world/14haiti-earthquake-live-tsunami/14haiti-earthquake-live-tsunami-superJumbo.jpg)](https://www.nytimes.com/2021/08/14/world/americas/haiti-tsunami-warning.html)

There was one report of water flooding a street in Les Cayes.

By Isabella Grullón Paz

* * *

* * *

Social media posts from the quake-damaged area of Haiti help convey the disaster’s scope.
-----------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/14/world/americas/haiti-earthquake-photos-news-social-media.html)

[![](https://static01.nyt.com/images/2021/08/14/world/14haiti-earthquake-live-social-media/14haiti-earthquake-live-social-media-superJumbo.jpg)](https://www.nytimes.com/2021/08/14/world/americas/haiti-earthquake-photos-news-social-media.html)

With news organizations and emergency officials scrambling to gain access to affected areas, social media has provided a vital window.

By Isabella Grullón Paz

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
