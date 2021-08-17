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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Thousands Who Helped the U.S. in Afghanistan Are Trapped. What Happens Next?
----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/16/us/afghanistan-visa-refugees-us.html)

[![](https://static01.nyt.com/images/2021/08/16/us/16visa-explainer-1/merlin_193320756_76e1b28a-9a53-489a-a8ab-e2b4e92abcec-superJumbo.jpg)](https://www.nytimes.com/2021/08/16/us/afghanistan-visa-refugees-us.html)

Many of those who worked alongside U.S. troops have waited years for visas to come to the United States. The speedy withdrawal of forces left most of them behind.

By Miriam Jordan

* * *

* * *

The Day After the Fall
----------------------

[Article here](https://www.nytimes.com/2021/08/17/briefing/taliban-afghanistan-collapse.html)

[![](https://static01.nyt.com/images/2021/08/16/lens/17ambriefing-promo/17ambriefing-kabul02-superJumbo-v3.jpg)](https://www.nytimes.com/2021/08/17/briefing/taliban-afghanistan-collapse.html)

A day after the collapse of the Afghan government, we’re looking at how the story is unfolding.

By the staff of The Morning

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
