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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Rare Mass Shooting in Britain Leaves 6 Dead, Including a Child
--------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/12/world/europe/england-fatal-shooting-plymouth.html)

[![](https://static01.nyt.com/images/2021/09/12/world/12england-shooting01sub/merlin_193216683_da3cc00e-85a5-4f5e-a916-545a26b1502c-superJumbo.jpg)](https://www.nytimes.com/2021/08/12/world/europe/england-fatal-shooting-plymouth.html)

The killings in the southwestern city of Plymouth were not terrorism-related, the police said. It was the country’s first mass shooting since 2010.

By Daniel Victor and Stephen Castle

* * *

* * *

Three more major cities are under Taliban control, as the government’s forces near collapse.
--------------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/13/world/asia/afghanistan-taliban-advance-kandahar.html)

[![](https://static01.nyt.com/images/2021/08/12/world/00AFGHANISTAN-KANDAHAR-HFO/merlin_192879501_c6a50e9e-c02e-4598-ba16-cf3514e4f789-superJumbo.jpg)](https://www.nytimes.com/2021/08/13/world/asia/afghanistan-taliban-advance-kandahar.html)

With Lashkar Gah and Kandahar, the Taliban now effectively control southern Afghanistan. The western city of Herat is also in their hands.

By Thomas Gibbons-Neff and Christina Goldbaum

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
