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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the An Arkansas judge temporarily blocks the state’s ban on mask mandates.
----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/06/world/arkansas-mask-mandate-asa-hutchinson.html)

[![](https://static01.nyt.com/images/2021/08/06/us/06virus-briefing-arkansas-masks/06virus-briefing-arkansas-masks-superJumbo.jpg)](https://www.nytimes.com/2021/08/06/world/arkansas-mask-mandate-asa-hutchinson.html)

Gov. Asa Hutchinson signed the ban into law in the spring but had been trying to modify it recently in the face of skyrocketing case counts.

By Richard Fausset

* * *

* * *

Otelo Saraiva de Carvalho, 84, Dies; Key Figure in Portugal Revolt
------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/06/world/europe/otelo-saraiva-de-carvalho-dead.html)

[![](https://static01.nyt.com/images/2021/08/04/obituaries/04deCarvalho1/04deCarvalho1-superJumbo.jpg)](https://www.nytimes.com/2021/08/06/world/europe/otelo-saraiva-de-carvalho-dead.html)

He became a national hero in the 1974 “Carnation Revolution,” which ousted a dictatorship. But he later landed in prison for links to a terrorist group.

By Raphael Minder

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
