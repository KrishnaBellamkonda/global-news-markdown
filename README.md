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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Rare Mass Shooting in Britain Leaves 6 Dead, Including a Child
--------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/12/world/europe/england-fatal-shooting-plymouth.html)

[![](https://static01.nyt.com/images/2021/09/12/world/12england-shooting01sub/merlin_193216683_da3cc00e-85a5-4f5e-a916-545a26b1502c-superJumbo.jpg)](https://www.nytimes.com/2021/08/12/world/europe/england-fatal-shooting-plymouth.html)

The killings in the southwestern city of Plymouth were not terrorism-related, the police said. It was the country’s first mass shooting since 2010.

By Daniel Victor and Stephen Castle

* * *

* * *

Flooding in China kills 21, as thousands escape to shelters.
------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/13/world/asia/china-flooding-evacuations.html)

[![](https://static01.nyt.com/images/2021/08/13/world/13weather-climate-briefing-china-flooding/merlin_193216689_1e8b9d3f-2019-4bcd-8d4d-5058627fbdf6-superJumbo.jpg)](https://www.nytimes.com/2021/08/13/world/asia/china-flooding-evacuations.html)

Heavy rainfall, expected to continue through Friday night, brought flooding that drove more than 7,200 people into shelters and damaged property.

By Daniel Victor

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
