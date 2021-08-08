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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Italians (Mostly) Embrace a ‘Green Pass’ to Prove Vaccination on Its First Day
------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/06/world/europe/italy-green-pass-vaccination-covid.html)

[![](https://static01.nyt.com/images/2021/08/06/world/06Italy-VaccinePassport01/merlin_192855414_a04540a1-621d-43af-928a-61463fb43570-superJumbo.jpg)](https://www.nytimes.com/2021/08/06/world/europe/italy-green-pass-vaccination-covid.html)

While such measures have prompted protests in France and divided Americans, Italians are enjoying a season of rationality under Prime Minister Mario Draghi.

By Jason Horowitz

* * *

* * *

Russia Doesn’t Send U.S. Investor to Jail but Still Sends a Warning
-------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/06/world/europe/russia-american-investor-calvey-sentence.html)

[![](https://static01.nyt.com/images/2021/08/07/world/06Russia-Embezzlement-print/merlin_192843924_c071e635-67ae-4e9f-a52c-50079ee34712-superJumbo.jpg)](https://www.nytimes.com/2021/08/06/world/europe/russia-american-investor-calvey-sentence.html)

Michael Calvey had long championed investing in Russia. His conviction on embezzlement charges alarmed business leaders, even if his sentence spared him prison.

By Andrew E. Kramer

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
