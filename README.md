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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Taliban threats to Afghan journalists are growing.
--------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/20/world/asia/taliban-threats-to-afghan-journalists-are-growing.html)

[![](https://static01.nyt.com/images/2021/08/20/world/20afghanistan-briefing-journalist-hunt/merlin_193375101_0bb465a8-b4b2-4b36-ac3a-01762241c5e1-superJumbo.jpg)](https://www.nytimes.com/2021/08/20/world/asia/taliban-threats-to-afghan-journalists-are-growing.html)

By James C. McKinley Jr., Michael M. Grynbaum, Tiffany Hsu and Katie Robertson

* * *

* * *

Afghanistan’s ethnic minorities fear a repeat of past atrocities.
-----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/20/world/asia/afghanistan-taliban-hazara.html)

[![](https://static01.nyt.com/images/2021/08/20/world/20afghanistan-briefing-Hazara-massacre/merlin_193436145_f3630f8c-a666-40b7-831c-daedbfc8f026-superJumbo.jpg)](https://www.nytimes.com/2021/08/20/world/asia/afghanistan-taliban-hazara.html)

An investigation by Amnesty International detailed the execution of nine Hazara men by Taliban militants in July.

By Sharif Hassan and Marc Santora

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
