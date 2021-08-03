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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Britain Rethinks Letting China Enter Its Nuclear Power Industry
---------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/02/business/great-britain-china-nuclear-power.html)

[![](https://static01.nyt.com/images/2021/08/03/business/00UKnuclear-1/merlin_192441987_53e5a290-8c48-4a30-b616-31b80caf9e40-superJumbo.jpg)](https://www.nytimes.com/2021/08/02/business/great-britain-china-nuclear-power.html)

Financing and security issues are clouding new power station projects.

By Stanley Reed

* * *

* * *

Senator Lindsey Graham says he has a breakthrough virus infection.
------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/02/world/lindsey-graham-covid-breakthrough-infection.html)

[![](https://static01.nyt.com/images/2021/08/02/us/politics/02virus-briefing-lindsey-graham-sub/02political-briefing-lindsey-graham-sub-superJumbo.jpg)](https://www.nytimes.com/2021/08/02/world/lindsey-graham-covid-breakthrough-infection.html)

The positive test result raised concerns that other senators may have been exposed at a party hosted by Senator Manchin over the weekend.

By Zach Montague and Nicholas Fandos

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
