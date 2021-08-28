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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Friday Briefing
--------------------

[Article here](https://www.nytimes.com/2021/08/27/briefing/afghanistan-bombing-brexit.html)

[![](https://static01.nyt.com/images/2021/08/26/world/27-am-briefing-europe-afghanistan/merlin_193709289_86a82b6d-16d0-4fe6-b7bd-fddb73e377db-superJumbo.jpg)](https://www.nytimes.com/2021/08/27/briefing/afghanistan-bombing-brexit.html)

A deadly bombing in Kabul.

By Natasha Frost

* * *

* * *

How Canadian Leaders Campaign in a Pandemic
-------------------------------------------

[Article here](https://www.nytimes.com/2021/08/27/world/canada/canada-leaders-campaign-pandemic.html)

[![](https://static01.nyt.com/images/2021/08/27/world/27canadaletter-conservatives2/27canadaletter-conservatives2-superJumbo.jpg)](https://www.nytimes.com/2021/08/27/world/canada/canada-leaders-campaign-pandemic.html)

While the Conservative leader, Erin O’Toole, is still hitting the road, his party has also created a virtual method of reaching voters.

By Ian Austen

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
