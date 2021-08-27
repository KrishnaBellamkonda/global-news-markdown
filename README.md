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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Border Standoff Over Afghan Migrants Highlights E.U. Fears of New Influx
------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/26/world/europe/poland-belarus-eu-migrants.html)

[![](https://static01.nyt.com/images/2021/08/26/world/26belarus-poland01/26belarus-poland01-superJumbo.jpg)](https://www.nytimes.com/2021/08/26/world/europe/poland-belarus-eu-migrants.html)

Belarus is accused of using migrants as a weapon against the European Union after a group of Afghans got trapped on its border with Poland, where the issue has become increasingly politicized.

By Steven Erlanger

* * *

* * *

President Biden condemns terrorist attack and vows to hunt down those responsible.
----------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/26/world/biden-afghanistan-kabul-airport-attack.html)

[![](https://static01.nyt.com/images/2021/08/26/us/26afghan-brief-biden-today/26afghan-brief-biden-today-superJumbo.jpg)](https://www.nytimes.com/2021/08/26/world/biden-afghanistan-kabul-airport-attack.html)

Mr. Biden said he had asked his commanders to find ways to target ISIS-K, the Afghan affiliate of the Islamic State, which claimed responsibility for the attacks earlier in the day.

By Michael D. Shear

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
