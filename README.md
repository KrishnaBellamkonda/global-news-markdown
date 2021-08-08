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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Russia Doesn’t Send U.S. Investor to Jail but Still Sends a Warning
-------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/06/world/europe/russia-american-investor-calvey-sentence.html)

[![](https://static01.nyt.com/images/2021/08/07/world/06Russia-Embezzlement-print/merlin_192843924_c071e635-67ae-4e9f-a52c-50079ee34712-superJumbo.jpg)](https://www.nytimes.com/2021/08/06/world/europe/russia-american-investor-calvey-sentence.html)

Michael Calvey had long championed investing in Russia. His conviction on embezzlement charges alarmed business leaders, even if his sentence spared him prison.

By Andrew E. Kramer

* * *

* * *

No Work, No Food: Pandemic Deepens Global Hunger
------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/06/world/africa/covid-19-global-hunger.html)

[![](https://static01.nyt.com/images/2021/08/02/world/00virus-hunger-child/merlin_188669736_68c466e0-109e-4325-aec3-1e8d73a9232f-superJumbo.jpg)](https://www.nytimes.com/2021/08/06/world/africa/covid-19-global-hunger.html)

Relentless waves of the virus, combined with crises caused by conflict and climate change, have left tens of millions of people around the world on the brink of famine.

By Christina Goldbaum and Joao Silva

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
