
# Important website links



 
- [vs code automatic snippet generator](https://snippet-generator.app/?description=console+log&tabtrigger=cls&snippet=console.log%28%27%3E%3E%241%3C%3C%27%29&mode=vscode)
```
$1 first position where tab appears
$2 second position where tab appears
${1:lable} used to describe label

sample code:-

  Each snippet is defined under a snippet name and has a prefix, body and
  description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  same ids are connected.
  Example:
  "Print to console": {
  	"prefix": "log",
  	"body": [
  		"console.log('$1');",
  		"$2"
  	],
  	"description": "Log output to console"
  }

```
 - [readme generator for git](https://github.com/matiassingers/awesome-readme)

- [Fetch api article](https://anil-pace.medium.com/fetching-response-from-api-in-react-using-fetch-api-and-axios-edc7ba8a3306)

- [Importing custom icons in react native /using custom icons(.svg)](https://stackoverflow.com/questions/61824681/importing-custom-icons-into-react-native-0-62)

- [ add the line at the top of the bottom tabs in react native](https://stackoverflow.com/questions/64384419/how-to-add-a-line-at-top-of-the-bottom-tab-when-the-current-tab-is-active-in-rea)
- [React native push notifications fire base](https://rnfirebase.io/messaging/usage)

- [React push notifications (local)](https://github.com/zo0r/react-native-push-notification)

- [Test react push notification fire base](https://testfcm.com/)

- [React native sample templates](https://www.bootdey.com/react-native-snippets)

- [React native vector icons](https://oblador.github.io/react-native-vector-icons/)

- [React Native styling with conditional](https://stackoverflow.com/questions/45478621/react-native-styling-with-conditional?rq=1)

- [React Native -  :last-child without a border?](https://stackoverflow.com/questions/37245481/react-native-css-last-child-without-a-border)

- [How to dim modal background](https://stackoverflow.com/questions/50055061/how-do-i-dim-background-when-modal-is-displayed-in-react-native)

- [Floating action buttion react native](https://stackoverflow.com/questions/33135256/floating-action-button-on-react-native)

- [Multiple permissions in react native](https://stackoverflow.com/questions/54819865/how-do-i-request-multiple-permissions-at-once-in-react-native)
- [React native tutorials (youtube)](https://www.youtube.com/watch?v=LWs6dY92_MU&list=PL8kfZyp--gEXs4YsSLtB3KqDtdOFHMjWZ&index=2)

- [react redux tutorials](https://www.youtube.com/watch?v=qA6oyQQTJ3I&list=PL8VzFQ8k4U1I9ABPgyGamRoGdF5XvIHrt&index=6&ab_channel=SanjeevThiyagarajan)
- [redux example](https://blog.logrocket.com/comprehensive-guide-to-using-redux-in-react-native/)
- [reactnative splash screen](https://github.com/crazycodeboy/react-native-splash-screen)
- [react native tutorials](https://www.youtube.com/watch?v=9_KDgsFGLY8&ab_channel=LirsTechTips)
- [How to use react navigation to navigate from outside component](https://pretagteam.com/question/how-to-use-react-navigation-to-navigate-from-outside-component)
- [For html css javascript formatting](https://codepen.io/quadrified/pen/xxVpgOZ?editors=0012)
- [for for formatting json data](https://jsonlint.com/)
- [react native conditional rendering](https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications)

# React native integrations and issues :

1. **Mac M1 pod file or .podspec issue**
   - [Link](https://dev.to/retyui/fix-a-pod-install-error-undefined-method-exist-for-fileclass-react-native-24ke)

2. **If we this issue in Xcode Undefined symbol: _OBJC_CLASS_$_FKUserDefaultsPlugin" etc, in React Native ios**
   - [Link](https://dera.hashnode.dev/how-i-fixed-undefined-symbol-objcclassfkuserdefaultsplugin-etc-in-react-native-ios)

3. **If latest changes or else latest is not reflecting in the new archive or build:**
   - Delete derived data in Xcode > behaviours > edit behaviours > locations > click on the path under derived data and delete that files
   - Delete previous main.jsbundle file and Generate new main.jsbundle file using following command ( npx react-native bundle --entry-file='index.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios' ) and replace this in Xcode.

4. **Clean build folder and delete pod.lock file and install pods again when ever required.**

5. **App Store 1024*1024 app icon issue while uploading the build to test flight:**
   - [Link](https://stackoverflow.com/questions/46987694/missing-app-store-icon-ios-apps-must-include-a-1024x1024px-app-store-icon-in)
   - Use the below link to generate icons
   - [Link](https://www.appicon.co/)

6. **Clinical health record issue for using apple health kit**
   - [Link](https://github.com/agencyenterprise/react-native-health/issues/320)

7. **Node version issue with OpenSSL(3):**
   - [Link 1](https://www.newline.co/@kchan/how-to-fix-the-error-errorerror0308010cdigital-envelope-routinesunsupported--0f8d3f17)
   - [Link 2](https://github.com/webpack/webpack/issues/15900)
   - [Link 3](https://stackoverflow.com/questions/72344149/how-to-solve-xcode-build-error-undefined-symbols-for-architecture-x86-64)
   - [Link 4](https://stackoverflow.com/questions/73144960/error-error0308010cdigital-envelope-routinesunsupported-at-new-hash-node)
   - [Link 5](https://stackoverflow.com/questions/75772965/error-react-native-permissions-nativemodule-rnpermissions-is-null)
   - [Link 6](https://stackoverflow.com/questions/70058295/react-native-error0308010cdigital-envelope-routinesunsupported)

8. **Set up fastlane versioning:** 
   - [Link](https://round.fun/2020/10/28/react-native-how-to-set-build-version-for-android-ios/)

9. **Generate release keystore file using key tool:**
   - [Link 1](https://medium.com/@hasangi/making-a-signed-apk-for-your-react-native-application-98e8529678db)
   - [Link 2](https://gist.github.com/henriquemenezes/70feb8fff20a19a65346e48786bedb8f)

10. **Publish apps to store:**
    - Android: [Link](https://www.youtube.com/watch?v=kg7oKree-9g&ab_channel=EngineerCodewala)
    - iOS: [Link](https://www.youtube.com/watch?v=r-Z--YDrmjI&ab_channel=notJust%E2%80%A4dev)

11. **Nodemon Error: connect ECONNREFUSED 127.0.0.1:50302:**
    - [Link](https://stackoverflow.com/questions/56374530/getting-error-connect-econnrefused-127-0-0-13306)

12. **How to Apply patch package using patch-package**
    - [Link](https://www.youtube.com/watch?v=zBPcVGr6XPk&ab_channel=MichaelPotter)

13. **How to ask permissions in android 13 (Target API level 33 and react native v0.67.5)**
    - [Link](https://dev.to/gautham495/asking-notification-permission-in-android-13-for-a-react-native-application-35n2)

14. **Xcode Scheme has No devices because he active scheme has no targets:**
    - [Link 1](https://stackoverflow.com/questions/58259901/no-devices-because-the-active-scheme-has-no-targets)
    - [Link 2](https://www.youtube.com/watch?v=1GAgBtlwKJ4&ab_channel=SwiftyGolum)

15. **IOS ISSUE Build fails with "Command failed with a nonzero exit code"**
    - [Link](https://stackoverflow.com/questions/46690619/build-fails-with-command-failed-with-a-nonzero-exit-code)

16. **IOS React-RCTAppDelegate => Command PhaseScriptExecution failed with a nonzero exit code**
    - [Link](https://github.com/facebook/react-native/issues/37762)

17. **Undo last commit in git**
    - [Link](https://www.linode.com/docs/guides/revert-last-git-commit/)

18. **For react native responsive design:**
    - [Link](https://medium.com/simform-engineering/create-responsive-design-in-react-native-f84522a44365)

19. **GitHub delete a branch command:** `git branch -d main-niles`

20. **Deploy nodejs to digital ocean:**
    - [Link 1](https://medium.com/nerd-for-tech/deploy-your-nodejs-application-to-a-digital-ocean-droplet-step-by-step-guide-3f6f928f776)
    - [Link 2](https://chat.openai.com/share/8e6d4097-1def-4b2c-a94b-d3a4cb59cd02)

21. **React js project reference:** 
    - [Link](https://github.com/deepak14ri/Movix/tree/master/src/pages/home/topRated)

22. **Resize custom image size:**
    - [Link 1](https://www.simpleimageresizer.com/upload)
    - [Link 2](https://hotpot.ai/design/iphone-12-pro-max-mockup?id=2fonjbBKyjoD_1242_2688)

23. **For generations App Store screenshots:** 
    - [Link](https://appscreens.com/user/playground)

24. **Sandbox API docs:** 
    - [Link](https://developer.sandbox.co.in/reference/aadhaar-okyc-verify-otp-api)

25. **Open-source identity and access management system (key cloak):**
    - [Link](https://www.keycloak.org/)

26. **GitHub javascript style guide by airbnb:** 
    - [Link](https://github.com/airbnb/javascript#naming-conventions)

27. **Developing large-scale system article:** 
    - [Link](https://medium.com/geekculture/system-design-scaling-from-zero-to-millions-of-users-deca270ef784)

28. **Push notifications system article:** 
    - [Link](https://medium.com/gojekengineering/how-we-manage-a-million-push-notifications-an-hour-549a1e3ca2c2)

29. **Node js deployment:** 
    - [Link](https://gist.github.com/bradtraversy/cd90d1ed3c462fe3bddd11bf8953a896)

30. **Database read replica:** 
    - [Link](https://medium.com/@naingdroid/how-to-replicate-mysql-databases-eb1de4400082)

31. **Node js project setup reference:** 
    - [Link](https://github.com/jaimin1618/nodejs-backend)

32. **Node js Logging setup:** 
    - [Link](https://mirzaleka.medium.com/automated-logging-in-express-js-a1f85ca6c5cd)

33. **React Native Web Docs:** 
    - [Link](https://necolas.github.io/react-native-web/docs/app-registry/)

34. **Auto-fill login page credentials using react-native-keychain:** 
    - [Link](https://dev.to/ajmal_hasan/biometric-authentication-with-react-native-keychain-5ac8)

35. **React Native topics scalar website:** 
    - [Link](https://www.scaler.com/topics/react-native/caching-in-react-native/)

36. **Free forms creator online:** 
    - [Link](https://tally.so/signup)

37. **Dos load issue: couldn't find DSO to load: libjscexecutor.so caused by: dlopen failed: library "libjsc.so" not found**
    - [Link 1](https://github.com/facebook/react-native/issues/25537)
    - [Link 2](https://javascript.plainenglish.io/react-native-android-release-build-crashes-fa93f07a2ba4)

38. **Notifee push notifications integration in React Native:**
    - [Link 1](https://medium.com/@mohammadhariszia/react-native-push-in-app-notifications-using-firebase-notifee-and-node-js-167a2dd84753)
    - [Link 2](https://dev.to/anasnmu/notifee-setup-for-react-native-with-firebase-1jc6)
    - [Link 3](https://stackoverflow.com/questions/71656727/how-to-recieve-background-notifications-in-notifee-and-fcm)
    - [Link 4](https://www.notjust.dev/blog/2023-02-02-react-native-local-push-notifications)

39. **How to export a git stash:** 
    - [Link](https://stackoverflow.com/questions/3973034/export-a-stash-to-another-computer)

40. **Database dumps:** 
    - [Link](https://database.lichess.org/)

41. **Angular articles:**
    - [API Call](https://dev.to/kafeel_ahmad/rest-api-in-angular-4i5c)
    - [Reactive forms](https://medium.com/@zeeshankhan8838/reactive-forms-in-angular-848d709cfba4)
    - [Routing](https://medium.com/@jaydeepvpatil225/routing-in-angular-924066bde43)
    - [Interceptor](https://pankaj-kumar.medium.com/use-http-interceptor-to-set-auth-header-for-api-requests-with-angular-1b72d012304b)

42. **Stripe resources:**
    - [Video](https://youtu.be/72iEz5iopqQ?si=VrL0X4w9hhg9hQQk)
    - [Link 1](https://dev.to/hudaniabhee/payment-handling-with-stripe-node-and-express-4gh0)
    - [Link 2](https://docs.stripe.com/development/quickstart?lang=node)
    - [Link 3](https://www.digitalocean.com/community/tutorials/angular-reactive-forms-introduction)

43. **How to secure Linux servers:** 
    - [Link](https://opensource.com/article/19/10/linux-server-security)

44. **React Native resources:** 
    - [Link](https://github.com/chefk5/react-native-resources)

45. **How to set up Let’s Encrypt SSL certificate:** 
    - [Link](https://www.youtube.com/watch?v=-EBiE8ATtG8)

46. **Angular deployment on Apache server:** 
    - [Link](https://mattsch.com/2018/09/12/deploying-angular-application-on-apache-server/)

47. **AI tools:**
    - [copilot.microsoft.com](copilot.microsoft.com)
    - [chat.openai.com](https://chat.openai.com/)
    - [gemini.google.com](https://gemini.google.com/)
    - [huggingface.co](https://huggingface.co/)
    - [perplexity.ai](https://www.perplexity.ai/search)
    - [gamma.app](https://gamma.app/)

