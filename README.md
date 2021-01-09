## VegAnalytics
A prototype end-to-end solution for local marts and vegetable sellers.

### Features
1. Configurable database for the store.
2. Add/Remove and Manage products.
3. Control the pricing of each product in the inventory.
4. Get analytics of the sales everyday and project it with historic data.
5. Charts which helps you to compare the sales of one product w.r.t to another.
6. Export sales data as csv/json.
7. Easily deployable as a service. (Provides container images)
8. Multi-user application.


### How to run?
To run this app, you need `docker` and `docker-compose` to be installed on the machine. See the instructions below:

#### With docker:
If you want to run with docker, first you need to configure MongoDB either on cloud or locally. You can pull and run MongoDB container image, locally:
```
docker run --rm --net=host mongo
```

Then build the container image of the app. 
```
docker build . -f deploy/Dockerfile -t veg-analytics:latest
```
You may have to modify the `deploy/sample.env` as per your needs.
Then run the app as follows:
```
docker run --rm --env-file=utils/sample.env --net=host veg-analytics:latest
```

You can open the browser and type the URL `http://localhost:9000/` (or the port you mentioned in `deploy/sample.env`)

#### Using docker-compose
Using docker-compose, you can quickly set-up the complete deployment. Go to `deploy/` and run `docker-compose` as follows:

```
docker-compose build
```

To run:
```
docker-compose up
```


#### Creating the native version of the app:
You can use [nativefier](https://github.com/jiahaog/nativefier), to generate the native version of the app. Follow the steps below:

1. Run the app: Follow the procedure in the section above to run the app, make sure it is running on some port.

2. Now, use `nativefier` to build the native binary for you.

```
npx nativefier http://localhost:9000       #or any other host as you wish
```

### Screenshots:
![login](/screens/im1.png)
![status](/screens/im2.png)
![Products](/screens/im3.png)
![Transactions](/screens/im4.png)
![Viz1](/screens/im5.png)
![Viz2](/screens/im6.png)
![Viz3](/screens/im7.png)