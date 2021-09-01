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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Ethiopian Rebels Looted American Aid Stores, U.S. Official Says
---------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/01/world/africa/ethiopia-tigray-us-food-aid.html)

[![](https://static01.nyt.com/images/2021/09/01/world/01ethiopia/merlin_190185672_f45c400b-0f5f-4877-aa16-6c39ab28f482-superJumbo.jpg)](https://www.nytimes.com/2021/09/01/world/africa/ethiopia-tigray-us-food-aid.html)

The top American aid official in Ethiopia accused forces from Tigray of taking food supplies as Ethiopia’s ruinous civil war spills into new areas and a famine threatens.

By Declan Walsh

* * *

* * *

The W.H.O. opens a Berlin hub to head off the next pandemic.
------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/01/world/africa/the-who-hub-covid.html)

[![](https://static01.nyt.com/images/2021/09/01/multimedia/01virus-briefing-who-hub/merlin_194005560_907bba12-0c50-4819-a719-ef1f00cb60de-superJumbo.jpg)](https://www.nytimes.com/2021/09/01/world/africa/the-who-hub-covid.html)

“Viruses must move fast, but data can move even faster,” the W.H.O.’s director said in inaugurating the new international project.

By Daniel E. Slotnik

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
