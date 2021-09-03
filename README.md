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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the The French Left Is in Disarray, but Here Comes Anne Hidalgo
-----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/02/world/europe/france-president-election-socialists-anne-hidalgo.html)

[![](https://static01.nyt.com/images/2021/08/31/world/xxFrance-Hidalgo01/merlin_193901121_904c2990-c32c-4ea1-9732-74c22c9e6d90-superJumbo.jpg)](https://www.nytimes.com/2021/09/02/world/europe/france-president-election-socialists-anne-hidalgo.html)

The charismatic and divisive socialist mayor of Paris is eyeing an office that has been occupied by eight male presidents over six decades.

By Roger Cohen

* * *

* * *

With Afghan Retreat, Biden Bucks Foreign Policy Elite
-----------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/01/world/europe/afghanistan-biden-foreign-policy.html)

[![](https://static01.nyt.com/images/2021/09/01/world/01afghan-react/merlin_96707953_5dd84431-d65c-45a0-bb30-26e315c2c9bd-superJumbo.jpg)](https://www.nytimes.com/2021/09/01/world/europe/afghanistan-biden-foreign-policy.html)

The president, following one of his core beliefs, has put himself at odds with much of the establishment, on the right and left, in Washington and across Europe.

By Mark Landler

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
