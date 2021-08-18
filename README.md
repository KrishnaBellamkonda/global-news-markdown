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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the For America, and Afghanistan, the Post-9/11 Era Ends Painfully
--------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/17/world/asia/afghanistan-united-states.html)

[![](https://static01.nyt.com/images/2021/08/16/world/16afghan-america/merlin_193332042_b2ee84b9-9afd-4635-a6b8-47c6bdd83f03-superJumbo.jpg)](https://www.nytimes.com/2021/08/17/world/asia/afghanistan-united-states.html)

The desperate scenes at the Kabul airport will now give Afghanistan a place in America’s national memory as another failed attempt to reshape a far-off land.

By Roger Cohen

* * *

* * *

For Afghan Women, Taliban Stir Fears of Return to a Repressive Past
-------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/17/world/asia/afghanistan-women-taliban.html)

[![](https://static01.nyt.com/images/2021/08/17/world/17afghanistan-women5/merlin_152369871_2638c444-f603-4e3e-9c74-dcc412f577e0-superJumbo.jpg)](https://www.nytimes.com/2021/08/17/world/asia/afghanistan-women-taliban.html)

Since the U.S. ousted the Taliban, women and girls have rejoined society in ways that would have been unimaginable under their rule. Now those gains are threatened.

By Farnaz Fassihi and Dan Bilefsky

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
