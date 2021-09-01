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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the In Afghanistan, an Unceremonious End, and a Shrouded Beginning
--------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/30/world/asia/us-withdrawal-afghanistan-kabul.html)

[![](https://static01.nyt.com/images/2021/08/30/world/00Afghanistan-End/00Afghanistan-End-superJumbo.jpg)](https://www.nytimes.com/2021/08/30/world/asia/us-withdrawal-afghanistan-kabul.html)

The last American flight from Afghanistan left behind a host of unfulfilled promises and anxious questions about the country’s fate.

By Thomas Gibbons-Neff

* * *

* * *

After the U.S. withdrawal, Afghan women consider the future.
------------------------------------------------------------

[Article here](https://www.nytimes.com/live/2021/08/31/world/afghanistan-photos/after-the-us-withdrawal-afghan-women-consider-the-future)

[![](https://static01.nyt.com/images/2021/08/29/autossell/seema/seema-superJumbo.jpg)](https://www.nytimes.com/live/2021/08/31/world/afghanistan-photos/after-the-us-withdrawal-afghan-women-consider-the-future)

By Alexandra Eaton, Kassie Bracken, Natalie Reneau and Ben Laffin

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
