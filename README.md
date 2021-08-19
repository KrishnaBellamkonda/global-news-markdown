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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Israel, Once the Model for Beating Covid, Faces New Surge of Infections
-----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/18/world/middleeast/israel-virus-infections-booster.html)

[![](https://static01.nyt.com/images/2021/08/18/world/18ISRAEL-VIRUS01/merlin_193188354_e514d58c-2019-480d-868e-273d4bc589f5-superJumbo.jpg)](https://www.nytimes.com/2021/08/18/world/middleeast/israel-virus-infections-booster.html)

One of the most vaccinated societies, Israel now has one of the highest infection rates in the world, raising questions about the vaccine’s efficacy.

By Isabel Kershner

* * *

* * *

How the Pandemic Changed Abortion Access
----------------------------------------

[Article here](https://www.nytimes.com/2021/08/19/briefing/abortion-afghanistan-masks.html)

[![](https://static01.nyt.com/images/2021/08/19/lens/19ambriefing-promo/19ambriefing-abortionpill-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/19/briefing/abortion-afghanistan-masks.html)

During the pandemic, health care providers can send abortion medication by mail. Will the courts allow that to continue?

By Emily Bazelon

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
