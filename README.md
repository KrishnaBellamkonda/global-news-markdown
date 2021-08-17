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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the After 7 Years of Failing to Fix Afghanistan, Ghani Makes a Hasty Escape
-----------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/16/world/asia/afghanistan-president-ashraf-ghani.html)

[![](https://static01.nyt.com/images/2021/08/16/world/16GHANI1/merlin_193320759_3497c6c9-ba18-4678-abcf-e7c4e2b8d52e-superJumbo.jpg)](https://www.nytimes.com/2021/08/16/world/asia/afghanistan-president-ashraf-ghani.html)

By the time ex-president Ashraf Ghani fled the country, the hot-tempered leader was isolated and ineffective. Critics blamed him for the chaos in Kabul, saying he had betrayed his people.

By Matthew Rosenberg and Adam Nossiter

* * *

* * *

Taliban Takeover Could Extinguish U.S. Influence in Kabul
---------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/15/us/politics/biden-taliban-afghanistan.html)

[![](https://static01.nyt.com/images/2021/08/16/us/politics/16dc-diplo-print1/merlin_193297425_2a34394d-3b13-45f6-bd7a-94fc9736c9ce-superJumbo.jpg)](https://www.nytimes.com/2021/08/15/us/politics/biden-taliban-afghanistan.html)

After 20 years of diplomacy and support, American officials are now contemplating the harrowing question of whether — and how — they might engage with a Taliban government in Afghanistan.

By Lara Jakes and Michael Crowley

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
