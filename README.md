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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the How the Infrastructure Bill Passed (the Senate)
-----------------------------------------------

[Article here](https://www.nytimes.com/2021/08/12/briefing/infrastructure-bill-senate-bipartisan.html)

[![](https://static01.nyt.com/images/2021/08/12/lens/12ambriefing-promo/12ambriefing-bipartisan-superJumbo-v2.jpg)](https://www.nytimes.com/2021/08/12/briefing/infrastructure-bill-senate-bipartisan.html)

The Senate passed Biden’s infrastructure bill with bipartisan support. Here’s how that happened.

By Ian Prasad Philbrick

* * *

* * *

Europe may have hit its hottest temperature on record amid devastating wildfires and floods.
--------------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/12/climate/europe-hottest-temperature-sicily.html)

[![](https://static01.nyt.com/images/2021/08/12/world/12Italy-heat-02/merlin_193155696_18d9c713-b5e9-43f1-9a2d-afe1c77b6cd7-superJumbo.jpg)](https://www.nytimes.com/2021/08/12/climate/europe-hottest-temperature-sicily.html)

A monitoring station in Sicily reached nearly 120 degrees Fahrenheit. And at least five children were missing as flash floods swept through northern Turkey.

By Gaia Pianigiani and Niki Kitsantonis

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
