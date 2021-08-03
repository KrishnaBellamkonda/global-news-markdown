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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the With #MeToo Case, China Takes a Swipe at Celebrity Obsession
------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/02/world/asia/china-metoo-kris-wu.html)

[![](https://static01.nyt.com/images/2021/08/02/world/02china-metoo-01/merlin_192244299_aafd3879-fc02-40b7-a0ac-6a86fbb3720f-superJumbo.jpg)](https://www.nytimes.com/2021/08/02/world/asia/china-metoo-kris-wu.html)

The detention of Kris Wu, a popular Canadian singer, has been hailed as a rare victory for the movement. But Beijing, wary of social activism, has cast it as a warning to celebrities.

By Amy Qin and Elsie Chen

* * *

* * *

California’s Pandemic Recall
----------------------------

[Article here](https://www.nytimes.com/2021/08/03/briefing/california-recall-election-gavin-newsom.html)

[![](https://static01.nyt.com/images/2021/08/03/lens/03ambriefing-promo/03ambriefing-newsom-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/03/briefing/california-recall-election-gavin-newsom.html)

Californians will soon vote on whether to recall their Democratic governor. Could he lose?

By Jennifer Medina

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
