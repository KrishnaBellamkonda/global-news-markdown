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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the President Biden pledges investment in vaccine components, but will that help the world?
---------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/03/world/president-biden-pledges-investment-in-vaccine-components-but-will-that-help-the-world.html)

[![](https://static01.nyt.com/images/2021/09/03/lens/03virus-briefing-biden-world-lede1/merlin_183998343_5d02ed28-ef9b-484d-9119-c42513d65537-superJumbo.jpg)](https://www.nytimes.com/2021/09/03/world/president-biden-pledges-investment-in-vaccine-components-but-will-that-help-the-world.html)

By Sheryl Gay Stolberg and Lauren McCarthy

* * *

* * *

The W.H.O. lists Mu as a ‘variant of interest.’
-----------------------------------------------

[Article here](https://www.nytimes.com/2021/09/02/world/americas/mu-variant-who.html)

[![](https://static01.nyt.com/images/2021/09/02/lens/02virus-briefing-mu-variant1/merlin_194073093_fab4e628-0b19-4d34-a7f1-881708a3d9aa-superJumbo.jpg)](https://www.nytimes.com/2021/09/02/world/americas/mu-variant-who.html)

The variant, first identified in Colombia, has characteristics that suggest it might be able to evade antibodies from vaccination or infection.

By Lauren McCarthy

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
