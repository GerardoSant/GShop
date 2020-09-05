# GShop - Ecommerce Webapp

This project consists of the development of the user environment (front-end)
and the business logic (back-end) of a simple e-commerce web application oriented to the shopping 
of different items.

## Installing/Running

1. Clone the repository.
2. Need a MySQL db running in order to access to the data. In the folder 'db-init-scripts' you have the different sql scripts to configure the MySQL db properly.
3. Configure the datasource in the Java project (application.properties file) in order to connect to your MySQL db properly.
4. Run the back-end(Java project - executing main located in'EcommerceAppApplication' class) and front-end (Angular project - executing ng serve --open from terminal) of the application.
5. Access to http://localhost:4200 to try out the application.


## Built With

Backend
* [Java](http://java.com/)  - Programming language
* [SpringBoot](https://spring.io/projects/spring-boot) - Java Framework. Mainly used Spring Rest and Data.
* [Maven](https://maven.apache.org/) - Dependency Management
* [MySQL](https://www.mysql.com/) -  SQL relational database management system

Frontend
* [Angular](https://angular.io/) - TypeScript-based open-source web application framework
* [HTML, CSS, JavaScript and TypeScript]() - Frontend languages.
* [Bootstrap](https://maven.apache.org/) -  CSS framework directed at responsive, mobile-first front-end web development


## Preview

Some of the functionalities/user interface from the app are shown in the following images:

* Product section

![alt-text](https://github.com/GerardoSant/GShop/blob/master/preview/product-section.gif)

 <br>

* Product checkout

![alt-text](https://github.com/GerardoSant/GShop/blob/master/preview/product-checkout.gif)


## Acknowledgments

* [Luv2Code](https://www.luv2code.com/) for the angular lessons.
