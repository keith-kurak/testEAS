This is the minimal reproduction repo for Expo EAS Updates issues with NX monorepo.

Currently we did all the fixes discussed previously.

For now we face with issue that local asset in the project are not showing on release build. No metter where asset is located - under app directory or in libs. 

Assets are being show only after publishing an update and loading this update on the device/simulator which runs release build.

To run the project:

1. `yarn install`
2. `yarn sync`
3. `yarn start`
4.  Run the project from XCode(Release scheme is set by default).
