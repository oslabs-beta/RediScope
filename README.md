![RediScope-Logo](https://github.com/oslabs-beta/RediScope/raw/main/src/components/images/Rediscope-banner.png)

# RediScope

RediScope is a free, open-source web application that intuitively and elegantly displays relevant Redis cache performance metrics that are most important to developers: memory, cache/hit ratio, evicted keys, and those related to latency and throughput.

Redis (**RE**mote **DI**ctionary **S**tore) is an in-memory key-value store, often used for caching, or temporary storage. Maintaining the health of a Redis cache is important for maximizing one of Redis’ primary benefits, increasing website speed. Visualizing relevant performance metrics helps developers quickly assess Redis cache health, helping them troubleshoot and solve cache performance issues. Our team found there were few fully free resources available for developers to easily view raw performance metrics in an easy-to-use way. We were motivated to provide this essential service, focusing on those metrics that matter most to cache performance speed.

**Stack:** Redis, React, React Router, TypeScript, Node.js/Express, PostgreSQL, Bcrypt, Chart.js, Yup, Formik, Axios, AWS(EC2, ElasticBeanStalk), Docker, Morgan and more.

**RediScope 2.0 update: June, 2023**
- New graph added to measure commands per second.
- Improved responsiveness for both desktop and mobile screens.
- Privacy mode added to hide URLs from screen.
- Minor accessibility improvements.
- Minor design improvements.
- Auto-naming of stored URLS enabled.
- Larger graphs to allow easier data monitoring.
- Display no longer shows last URL selected if all URLS are deleted.
- Fixed bug related to duplicate usernames.
- Improved display of data for more accurate readings.

## How to Use

1. Visit our website, https://www.rediscope.com/
2. Create an account by clicking get started
3. Add and name your Redis URL and click "Add URL"
4. Choose desired interval and max number of time points and click "Set Settings"
5. Next time you log in, you will be able to access your URLs or delete them
6. Click on "Start Live Data Collection" and start monitoring five graphs real time!

## Features

- View Performance Metrics Real time

  ![metrics-gif](https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/giphygraph.gif)

- Store multiple Redis Cache URLs

  ![adding-URL](https://github.com/oslabs-beta/RediScope/raw/r2dev/src/components/images/adding%20URL.gif)

- Cache/Hit Ratio calculation

## Contributing

We welcome suggestions and pull requests!

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Team Members

Andrea Azadeh Yazdandoost // 
anazyazd@gmail.com // 
https://www.linkedin.com/in/anazyazd

Andy Wong //
andy.wong.km27@gmail.com //
https://www.linkedin.com/in/andy-wong27

Bo Kim //
bokim.ce@gmail.com //
https://www.linkedin.com/in/bokim1/

Chihiro Snider //
chihirosnider@gmail.com //
https://www.linkedin.com/in/chihiro-snider/

Coral Dabarera Edelson //
corald@gmail.com //
https://www.linkedin.com/in/coral-dabarera-edelson/
