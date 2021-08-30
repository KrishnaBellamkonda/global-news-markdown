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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the As the Taliban Tighten Their Grip, Fears of Retribution Grow
------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/29/world/asia/afghanistan-taliban-revenge.html)

[![](https://static01.nyt.com/images/2021/08/27/world/27afghan-vengence/merlin_193559241_e1291990-25e6-42f1-848f-ac132e00c5be-superJumbo.jpg)](https://www.nytimes.com/2021/08/29/world/asia/afghanistan-taliban-revenge.html)

Taliban leaders have promised amnesty to Afghan officials and soldiers, but there are increasing reports of detentions, disappearances and even executions.

By Carlotta Gall

* * *

* * *

China’s Celebrity Culture Is Raucous. The Authorities Want to Change That.
--------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/27/business/media/china-celebrity-culture.html)

[![](https://static01.nyt.com/images/2021/08/28/world/27china-celebrities-print/27china-celebrities02-superJumbo.jpg)](https://www.nytimes.com/2021/08/27/business/media/china-celebrity-culture.html)

The Communist Party has declared war on idol worship, part of a broader crackdown on what it sees as toxic celebrity culture that is poisoning the minds of the country’s youth.

By Alexandra Stevenson, Amy Chang Chien and Cao Li

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
