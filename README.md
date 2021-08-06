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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the World’s Coronavirus Infection Total Passes Staggering Figure: 200 Million
-------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/04/world/europe/covid-global-cases-200-million.html)

[![](https://static01.nyt.com/images/2021/08/04/world/04virus-200million-top/merlin_185590854_51037946-8a5a-47f7-80ac-e7a4ce516715-superJumbo.jpg)](https://www.nytimes.com/2021/08/04/world/europe/covid-global-cases-200-million.html)

Vaccines have weakened the link between surging cases and serious illness, but in vaccine-deprived parts of the world, the deadly pattern remains.

By Marc Santora and Isabella Kwai

* * *

* * *

In Photos: Fires Ravage Southern Europe
---------------------------------------

[Article here](https://www.nytimes.com/2021/08/05/world/europe/southern-europe-wildfires.html)

[![](https://static01.nyt.com/images/2021/08/05/world/05europe-widlfires-top/merlin_192653265_0cb78113-9629-4b12-b4e8-34d1d490c188-superJumbo.jpg)](https://www.nytimes.com/2021/08/05/world/europe/southern-europe-wildfires.html)

From the Greek islands to southern Turkey, extreme heat and dry conditions are driving devastating wildfires that have killed people and threatened homes, ancient heritage sites and tourist havens.

By Niki Kitsantonis and Megan Specia

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
