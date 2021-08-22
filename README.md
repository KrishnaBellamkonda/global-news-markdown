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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the As Canada Awaits a New Group of Refugees, Questions Loom
--------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/20/world/canada/canada-afghanistan-refugees.html)

[![](https://static01.nyt.com/images/2021/08/20/world/20CANADA-LETTER-KABUL2/merlin_193428264_ad67097b-5cdf-4736-b7c1-b3e52f7bdad0-superJumbo.jpg)](https://www.nytimes.com/2021/08/20/world/canada/canada-afghanistan-refugees.html)

Canada said that it would take in 20,000 refugees from Afghanistan. But Canadians hoping to sponsor some of them will have to wait until government plans become clear.

By Ian Austen

* * *

* * *

A Rush of News, Moment by Moment: Behind Our Live Coverage
----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/22/insider/live-coverage.html)

[![](https://static01.nyt.com/images/2021/08/22/pageoneplus/22a2_itt/22a2_itt-superJumbo.jpg)](https://www.nytimes.com/2021/08/22/insider/live-coverage.html)

When readers need information immediately, teams of journalists collaborate to tell a single unfolding story.

By Sarah Bahr

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
