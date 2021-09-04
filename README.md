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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the In ‘Back to The Future: The Musical,’ the Car Is the Star of the Show
---------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/02/theater/back-to-the-future-musical.html)

[![](https://static01.nyt.com/images/2021/09/02/arts/02back-to-the-future3/merlin_193913538_c6dc9d44-56c2-4f99-81f6-2e16959804a5-superJumbo.jpg)](https://www.nytimes.com/2021/09/02/theater/back-to-the-future-musical.html)

A devoted fan of the 1985 movie helped the London production’s creative team recreate the iconic time-traveling DeLorean, down to the last detail.

By Alex Marshall

* * *

* * *

New Zealand Police Kill ‘Extremist’ Who Stabbed 6 in ISIS-Inspired Attack
-------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/03/world/asia/new-zealand-isis-terrorist-attack.html)

[![](https://static01.nyt.com/images/2021/09/03/world/03NZ-ATTACK-02/merlin_194110572_18806db8-530b-4af4-ae86-04a553ebf139-superJumbo.jpg)](https://www.nytimes.com/2021/09/03/world/asia/new-zealand-isis-terrorist-attack.html)

The man was under surveillance when he injured six people at a West Auckland supermarket on Friday, officials said. The prime minister called it a “terrorist attack.”

By Natasha Frost

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
