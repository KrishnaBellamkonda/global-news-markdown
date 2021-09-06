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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the An Economic Lifeline in South America, the Paraná River, Is Shriveling
----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/04/world/americas/drought-argentina-parana-river.html)

[![](https://static01.nyt.com/images/2021/09/04/world/04Argentina-Drought/04Argentina-Drought-superJumbo.jpg)](https://www.nytimes.com/2021/09/04/world/americas/drought-argentina-parana-river.html)

The continent’s second-largest river is drying up amid the biggest drought in 70 years, upending ecosystems, trade and livelihoods.

By Daniel Politi and Sebastián López Brach

* * *

* * *

Taliban Fighters Crush a Women’s Protest Amid Flickers of Resistance
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/04/world/asia/taliban-women-protest-afghanistan-panjshir.html)

[![](https://static01.nyt.com/images/2021/09/04/world/04afghanistan1/merlin_194184528_79088525-ce75-41d6-b932-e5483addd9ac-superJumbo.jpg)](https://www.nytimes.com/2021/09/04/world/asia/taliban-women-protest-afghanistan-panjshir.html)

The women were assaulted with rifle butts, tear gas and metal clubs, while anti-Taliban rebels in the north vowed to repel an assault by the Islamist group.

By Adam Nossiter

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
