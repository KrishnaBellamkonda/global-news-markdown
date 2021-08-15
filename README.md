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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Fearing Kabul’s Fall, U.S. Officials Implore Afghans to ‘Fight’
---------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/13/us/politics/kabul-biden-afghanistan.html)

[![](https://static01.nyt.com/images/2021/08/13/us/politics/13dc-afghan-diplo1/merlin_192879597_84d0d484-741d-4055-8893-dedc516a658b-superJumbo.jpg)](https://www.nytimes.com/2021/08/13/us/politics/kabul-biden-afghanistan.html)

The calls to action underscore the stark reality that the United States has no intention of rescuing government forces.

By Michael Crowley

* * *

* * *

Under pressure to quit, Afghanistan’s president pledges only to end ‘instability.’
----------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/13/world/asia/afghanistan-ghani-president-isolated.html)

[![](https://static01.nyt.com/images/2021/08/13/world/13GHANI-AFGHAN/merlin_189894783_5f797b7b-8dea-408d-98e0-92064338f065-superJumbo.jpg)](https://www.nytimes.com/2021/08/13/world/asia/afghanistan-ghani-president-isolated.html)

A recorded speech aired Saturday indicated that President Ashraf Ghani, who has little support at home or abroad, would keep clinging to office.

By Adam Nossiter

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
