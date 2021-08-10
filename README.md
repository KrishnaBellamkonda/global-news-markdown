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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Suspect in Fire at French Cathedral Is Arrested in Killing of a Priest
----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/09/world/europe/France-priest-killed-immigration-law.html)

[![](https://static01.nyt.com/images/2021/08/09/world/09FRANCE1/09FRANCE1-superJumbo.jpg)](https://www.nytimes.com/2021/08/09/world/europe/France-priest-killed-immigration-law.html)

The arrest of the suspect, a Rwandan asylum-seeker facing deportation, fueled criticism of the government’s immigration laws by right-wing politicians.

By Norimitsu Onishi

* * *

* * *

U.S. Signals It Will Release Some Still-Secret Files on Saudi Arabia and 9/11
-----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/09/us/politics/sept-11-saudi-arabia-biden.html)

[![](https://static01.nyt.com/images/2021/08/06/us/politics/06dc-attacks/merlin_176881176_8335782d-bf5b-4a97-932e-9d907535b0cc-superJumbo.jpg)](https://www.nytimes.com/2021/08/09/us/politics/sept-11-saudi-arabia-biden.html)

The F.B.I. said it would review some long-classified documents for possible disclosure, a decision that followed a push by families of the attacks’ victims.

By Katie Rogers, Heather Murphy and Charlie Savage

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
