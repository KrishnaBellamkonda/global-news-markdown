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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the A Return to Freedom, After Nearly a Year Trapped Indoors Under Lockdown
-----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/12/world/canada-toronto-care-home.html)

[![](https://static01.nyt.com/images/2021/08/06/world/00virus-canada-carehome/merlin_189377421_8aee975c-5c89-424a-a7c5-8a58610bb52e-superJumbo.jpg)](https://www.nytimes.com/2021/08/12/world/canada-toronto-care-home.html)

“This is more fun than I’ve had in a year.” In June, a long-term-care home resident experienced the joy of the outside world after nearly a year locked indoors because of coronavirus restrictions.

By Catherine Porter

* * *

* * *

The Hidden Melodies of Subways Around the World
-----------------------------------------------

[Article here](https://www.nytimes.com/interactive/2021/08/13/arts/subway-train-sounds.html)

[![](https://static01.nyt.com/images/2021/08/13/arts/subway-sounds-promo/subway-sounds-promo-superJumbo.jpg)](https://www.nytimes.com/interactive/2021/08/13/arts/subway-train-sounds.html)

When train doors close, these jingles warn riders to stand clear.

By Sophie Haigney and Denise Lu

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
