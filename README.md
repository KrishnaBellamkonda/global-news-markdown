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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Italy will impose tighter restrictions in Sicily after a surge in cases.
------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/28/world/italy-restrictions-sicily-virus-surge.html)

[![](https://static01.nyt.com/images/2021/08/28/world/28virus-brief-sicily/merlin_187835475_f4f3bad6-06ac-4854-87c3-fdf0776fd504-superJumbo.jpg)](https://www.nytimes.com/2021/08/28/world/italy-restrictions-sicily-virus-surge.html)

A majority of hospitalizations on the southern island have involved the unvaccinated, and many have yet to get shots.

By Emma Bubola

* * *

* * *

Myanmar’s Monks, Leaders of Past Protests, Are Divided Over the Coup
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/28/world/asia/myanmar-monks-coup.html)

[![](https://static01.nyt.com/images/2021/08/26/world/00myanmar-buddhism/merlin_184387536_dee33bea-dd52-4f4b-adb0-4477a368a568-superJumbo.jpg)](https://www.nytimes.com/2021/08/28/world/asia/myanmar-monks-coup.html)

Some senior members of the Buddhist clergy have given their blessing to the generals in power. But hundreds of lower-ranking monks have been jailed for protesting.

By Hannah Beech

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
