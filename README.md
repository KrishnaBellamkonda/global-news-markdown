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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The Hidden Melodies of Subways Around the World
-----------------------------------------------

[Article here](https://www.nytimes.com/interactive/2021/08/13/arts/subway-train-sounds.html)

[![](https://static01.nyt.com/images/2021/08/13/arts/subway-sounds-promo/subway-sounds-promo-superJumbo.jpg)](https://www.nytimes.com/interactive/2021/08/13/arts/subway-train-sounds.html)

When train doors close, these jingles warn riders to stand clear.

By Sophie Haigney, Denise Lu, Gabriel Gianordoli and Umi Syam

* * *

* * *

A Changing Country
------------------

[Article here](https://www.nytimes.com/2021/08/13/briefing/census-2020-diversity-united-states.html)

[![](https://static01.nyt.com/images/2021/08/13/lens/13ambriefing-promo/13ambriefing-phoenix02-superJumbo-v3.jpg)](https://www.nytimes.com/2021/08/13/briefing/census-2020-diversity-united-states.html)

The United States population is getting more diverse, according to data from the 2020 census.

By the staff of The Morning

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
