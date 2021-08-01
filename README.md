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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Virus cases are rising around the world, and deaths in Africa are surging.
--------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/30/world/africa-who-coronavirus-deaths.html)

[![](https://static01.nyt.com/images/2021/07/30/world/30virus-briefing-who-africa/merlin_191853954_14f08eed-feba-474f-9a37-552e9efbc2d4-superJumbo.jpg)](https://www.nytimes.com/2021/07/30/world/africa-who-coronavirus-deaths.html)

“We can prevent this disease, we can test for it, and we can treat it,” Dr. Tedros Adhanom Ghebreyesus said.

By Daniel E. Slotnik

* * *

* * *

The Long Kiss Goodbye: Will Covid End the French Bise Forever?
--------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/07/31/world/europe/covid-france-bise.html)

[![](https://static01.nyt.com/images/2021/07/29/world/29France-BISE-01/29France-BISE-01-superJumbo.jpg)](https://www.nytimes.com/2021/07/31/world/europe/covid-france-bise.html)

Social distancing made the cheek kiss a much rarer greeting, and polling suggests it may stay that way. Some say good riddance, but others miss the warmth of times past.

By Gaëlle Fournier

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
