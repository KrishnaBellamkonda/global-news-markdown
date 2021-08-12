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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the What to Know About Breakthrough Infections and the Delta Variant
----------------------------------------------------------------

[Article here](https://www.nytimes.com/article/covid-breakthrough-delta-variant.html)

[![](https://static01.nyt.com/images/2021/08/10/science/00virus-breakthrough2/merlin_192270498_5dc4dd99-73d4-4f84-8d13-4f564b4dee1c-superJumbo.jpg)](https://www.nytimes.com/article/covid-breakthrough-delta-variant.html)

Scientific understanding of the coronavirus variant is changing quickly. Here’s a recap of the most important findings.

By Apoorva Mandavilli

* * *

* * *

Germany will stop paying for virus tests for people choosing to remain unvaccinated.
------------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/10/world/europe/germany-covid-test.html)

[![](https://static01.nyt.com/images/2021/08/10/world/10virus-briefing-germanytesting/merlin_189829398_d03318dd-ab58-4cde-b56b-a98e13e81311-superJumbo.jpg)](https://www.nytimes.com/2021/08/10/world/europe/germany-covid-test.html)

People who choose not to get vaccinated will no longer get free antigen tests, starting in October.

By Christopher F. Schuetze, Nicholas Casey, Eileen Sullivan, Davey Alba, Jason Gutierrez, Constant Méheut, Aanya Wipulasena and Saif Hasnat

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
