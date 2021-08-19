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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Bill Davis, Pragmatic Ontario Premier, Dies at 92
-------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/18/world/canada/bill-davis-pragmatic-ontario-premier-dies-at-92.html)

[![](https://static01.nyt.com/images/2021/08/19/obituaries/Davis-01/merlin_193373037_6528a636-859a-41e7-b56f-d0fb8b2d8dc6-superJumbo.jpg)](https://www.nytimes.com/2021/08/18/world/canada/bill-davis-pragmatic-ontario-premier-dies-at-92.html)

A champion of education in his province, he helped his nation achieve sovereignty from Britain by brokering a 1982 compromise.

By Sam Roberts

* * *

* * *

Your Thursday Briefing
----------------------

[Article here](https://www.nytimes.com/2021/08/18/briefing/afghanistan-taliban-protests-israel-covid.html)

[![](https://static01.nyt.com/images/2021/08/19/world/19ambriefing-aus-nl-promo/merlin_193397196_69b6ccb8-81e1-4a7f-b588-4f391c88a81e-superJumbo.jpg)](https://www.nytimes.com/2021/08/18/briefing/afghanistan-taliban-protests-israel-covid.html)

Afghan protests against the Taliban.

By Melina Delkic

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
