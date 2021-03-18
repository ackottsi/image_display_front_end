# project_4 README

## Photo Book Display App

[Link to deployed photo book app](http://imagephotobookgaproject4.surge.sh)

[Link to git repository for back end](https://github.com/ackottsi/project_4_server_side)

[Link to git repository for front end](https://github.com/ackottsi/image_display_front_end)

---
#### Motivation:
Learning how to connect a Front End and Back End Application.  

---
#### Objective Level 1 (MVP) (complete):
- [x] Show Images in front end
- [x] Database created and accessed
- [x] Full stack CRUD for image model
- [x] Used React Hooks and Amazon S3 for new technology

#### Objective Level 2 (partially complete):
* [x] Gallery page shows photos based on user that is logged in
* [x] User Login/Sign up working
* [x] Stying is pleasant to view
* [x] able to update comments from details page

#### Objective Level 3 (partially complete):
* [ ] Animate slide show
* [ ] ability to filter gallery images based on image details
* [ ] WOW level stying


---
#### Wireframe

##### Page Layout and Website Flow


 * detail page wireframe

    ![detail wireframe](https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/Screen+Shot+2021-03-17+at+5.56.40+PM.png)

 * gallery page wireframe 

    ![gallery wireframe](https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/Screen+Shot+2021-03-17+at+5.56.31+PM.png)

---

#### Technology used:
* HTML, CSS, JavaScript
* React, Node.js, Express
* github - used for revision control
* Surge - used for deployment
* Heroku
* Amazon S3 - AWS Simple Cloud Storage

---

#### Main features:
 * Gallery View of Images
 * Image detail page
 * Ability to update images
 * Images filtered by currently logged in User
 
---

#### Room for improvement:
1. Add Delete and Update to User Model.
2. Additional styling to create a better user experience.
3. Animated SlideShow feature for images.
4. Add a footer 

---

#### Lessons Learned:

While trying to deploy to Heroku, I encountered the following error:

![Heroku Error](https://imagebucketgaackproject.s3.us-east-2.amazonaws.com/Imagefolder/Screen+Shot+2021-03-17+at+11.26.34+PM.png)

After researching, it was discovered that it was not an uncommon issue and is related to an issue where node_modules are being pushed to the heroku environment.  This issue was resolved by following the instructions listed in the "Don't check in generated directories" section of the Heroku troubleshooting documentation [troubleshooting documentation](https://devcenter.heroku.com/articles/troubleshooting-node-deploys#don-t-check-in-generated-directories)