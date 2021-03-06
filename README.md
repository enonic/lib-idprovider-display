# Display library for Enonic XP ID Providers

This library provides configurable interfaces to ID Providers.


## Releases and Compatibility

| App version | Required XP version | Download |
| ----------- | ------------------- | -------- |
| 1.0.0 | 6.7.0 | [Download](http://repo.enonic.com/public/com/enonic/lib/idproviderdisplay/1.0.0/idproviderdisplay-1.0.0.jar) |
| 1.0.1 | 6.7.0 | [Download](http://repo.enonic.com/public/com/enonic/lib/idproviderdisplay/1.0.1/idproviderdisplay-1.0.1.jar) |
| 2.0.0 | 7.0.0 | [Download](http://repo.enonic.com/public/com/enonic/lib/lib-idproviderdisplay/2.0.0/lib-idproviderdisplay-2.0.0.jar) |


## Building and deploying

Build this application from the command line. Go to the root of the project and enter:

    ./gradlew clean build

To deploy the app, set `$XP_HOME` environment variable and enter:

    ./gradlew deploy


## Releasing new version

To release a new version of this app, please follow the steps below:

1. Update `version` (and possibly `xpVersion`) in  `gradle.properties`.

2. Compile and deploy to our Maven repository:

    ./gradlew clean build uploadArchives

3. Update `README.md` file with new version information and compatibility.

4. Tag the source code using `git tag` command (where `X.Y.Z` is the released version):

    git tag vX.Y.Z

5. Push the updated code to GitHub.

    git push origin vX.Y.Z