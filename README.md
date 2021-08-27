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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Populist Hero or Demagogue: Who Is Tunisia’s President?
-------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/26/world/middleeast/tunisia-president-kais-saied.html)

[![](https://static01.nyt.com/images/2021/08/22/world/22tunisia-president-top/merlin_160956189_13f1849d-3b7e-4393-a028-515875dbe8cf-superJumbo.jpg)](https://www.nytimes.com/2021/08/26/world/middleeast/tunisia-president-kais-saied.html)

As a law professor, Kais Saied preached strict adherence to the Constitution. As Tunisia’s president, he has bent it to his will. Will he save Tunisia’s democracy or destroy it?

By Vivian Yee

* * *

* * *

Your Thursday Briefing
----------------------

[Article here](https://www.nytimes.com/2021/08/26/briefing/taliban-navalny-covid-origins.html)

[![](https://static01.nyt.com/images/2021/08/25/us/26am-briefing-europe-afghanistan/25afghanistan-briefing-taliban-interview-new-superJumbo.jpg)](https://www.nytimes.com/2021/08/26/briefing/taliban-navalny-covid-origins.html)

A Taliban leader says the group wants to forget the past, but describes restrictions.

By Whet Moser

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
