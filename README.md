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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Your Tuesday Briefing
---------------------

[Article here](https://www.nytimes.com/2021/08/31/briefing/afghanistan-coronavirus-ida-flooding.html)

[![](https://static01.nyt.com/images/2021/08/30/world/3pm-briefing-us-afghanistan-evacs-COPY/3pm-briefing-us-afghanistan-evacs--superJumbo-v3.jpg)](https://www.nytimes.com/2021/08/31/briefing/afghanistan-coronavirus-ida-flooding.html)

The final moments of the U.S. presence in Afghanistan.

By Natasha Frost

* * *

* * *

The Taliban Celebrate Victory, With a Crisis Looming
----------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/31/world/asia/afghanistan-taliban-airport.html)

[![](https://static01.nyt.com/images/2021/08/31/world/31afghanistan-ledeall1/merlin_193952952_c161dc82-928c-4edb-b12a-05e80b60d43b-superJumbo.jpg)](https://www.nytimes.com/2021/08/31/world/asia/afghanistan-taliban-airport.html)

With the final U.S. troops gone, triumphant scenes were clouded by the prospect of famine and financial collapse. The Taliban spokesman called for international engagement.

By Jim Huylebroek, Najim Rahim and Eric Nagourney

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
