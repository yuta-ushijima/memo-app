#!/usr/bin/env bash

PROJECT_NAME="MemoApp"
SCHEME_NAME="MemoApp"
UNSIGNED_PATH='./platforms/android/build/outputs/apk/android-release-unsigned.apk'
SIGNED_PATH='./platforms/android/build/outputs/apk/android-release-signed.apk'
BUILD_TOOLS_VERSION='<Your Android Build Tools Version>'
STARTTIME=$(date +%s);

set -e
set -x

### Clear Previous Builds
echo "--- Clear Previous [Time Elapsed $(($(date +%s) - $STARTTIME))s]"

[ -e $UNSIGNED_PATH ] && rm $UNSIGNED_PATH
[ -e $SIGNED_PATH ] && rm $SIGNED_PATH

### Build
echo "--- Build [Time Elapsed $(($(date +%s) - $STARTTIME))s]"

ionic build android --release

### Sign APK
echo "--- Signing The Android APK [Time Elapsed $(($(date +%s) - $STARTTIME))s]"
jarsigner                                              \
    -verbose                                           \
    -sigalg SHA1withRSA                                \
    -digestalg SHA1                                    \
    -keystore android-release-key.keystore             \
    $UNSIGNED_PATH                                     \
    MemoApp

### ZipAlign the APK
echo "--- ZipAligning The Android APK [Time Elapsed $(($(date +%s) - $STARTTIME))s]"
~/Library/Android/sdk/build-tools/$BUILD_TOOLS_VERSION/zipalign  \
    -v 4                                                         \
    $UNSIGNED_PATH                                               \
    $SIGNED_PATH

### Uploading to Hockeyapp
echo "--- Uploading to Hockeyapp [Time Elapsed $(($(date +%s) - $STARTTIME))s]"

/usr/local/bin/puck                      \
    -submit=manual                       \
    -download=true                       \
    -open=notify                         \
    -force=true                          \
    $SIGNED_PATH

### Summary
echo "-- Total time $(($(date +%s) - $STARTTIME))s"
