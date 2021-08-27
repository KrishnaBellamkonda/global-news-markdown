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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the He Built a Robot to Prove a Point About Refugees
------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/27/world/europe/afghanistan-refugee-hope.html)

[![](https://static01.nyt.com/images/2021/08/27/world/27karimi-profile01/merlin_193745016_26b7ab61-0afc-415b-a38c-06828baa96a6-superJumbo.jpg)](https://www.nytimes.com/2021/08/27/world/europe/afghanistan-refugee-hope.html)

As Afghans flee the Taliban, the experiences of a fellow countryman, Saidullah Karimi, warn of tough times ahead, but also carry a message of hope.

By Alice Greenway

* * *

* * *

N.Y.C. lays out safety measures for public schools as Delta variant rises.
--------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/26/nyregion/new-york-city-schools-reopening.html)

[![](https://static01.nyt.com/images/2021/09/25/world/25virus-briefing-nyschools/merlin_191253348_ecc8462e-78f4-40c5-8842-6c02b5f9f92b-superJumbo.jpg)](https://www.nytimes.com/2021/08/26/nyregion/new-york-city-schools-reopening.html)

The city’s school testing program will be smaller than last year, and only unvaccinated students will have to quarantine if exposed to the virus.

By Eliza Shapiro

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
