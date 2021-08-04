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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Assassination Mastermind May Still Be at Large, Haiti’s Caretaker Leader Says
-----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/04/world/americas/haiti-assassination-prime-minister-ariel-henry.html)

[![](https://static01.nyt.com/images/2021/08/04/world/04haiti/merlin_192576513_8ed048c0-b9e4-459e-a4b1-10832d99c5b2-superJumbo.jpg)](https://www.nytimes.com/2021/08/04/world/americas/haiti-assassination-prime-minister-ariel-henry.html)

Prime Minister Ariel Henry says he believes that none of the more than 40 people detained in the killing of President Jovenel Moïse have the capacity to organize the complex plot.

By Anatoly Kurmanaev

* * *

* * *

Belarus Sprinter Becomes an Unlikely Dissident
----------------------------------------------

[Article here](https://www.nytimes.com/2021/08/03/world/europe/kristina-timanovskaya-belarus-interview.html)

[![](https://static01.nyt.com/images/2021/08/03/world/03belarus-sprinter2/merlin_192338646_ce222495-aaf5-4e25-9774-a1efe59dc8eb-superJumbo.jpg)](https://www.nytimes.com/2021/08/03/world/europe/kristina-timanovskaya-belarus-interview.html)

An Instagram complaint against her coaches embroiled Kristina Timanovskaya in the precarious politics of her home country, and may force her into asylum.

By Valerie Hopkins and Tariq Panja

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
