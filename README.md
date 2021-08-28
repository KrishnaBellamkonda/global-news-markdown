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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Amid Afghan Chaos, a C.I.A. Mission That Will Persist for Years
---------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/27/us/politics/cia-afghanistan.html)

[![](https://static01.nyt.com/images/2021/08/28/us/politics/28dc-intel-print/merlin_193558944_e2bd9eac-de98-4f43-8f14-8280b120ac69-superJumbo.jpg)](https://www.nytimes.com/2021/08/27/us/politics/cia-afghanistan.html)

The spy agency had plans to de-emphasize counterterrorism operations to focus on rising global powers. History got in the way.

By Mark Mazzetti, Julian E. Barnes and Adam Goldman

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
