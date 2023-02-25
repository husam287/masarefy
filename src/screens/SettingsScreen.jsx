import React, { useState, useEffect } from 'react';
import {
  Image, ScrollView, StyleSheet, View,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import MyPhoto from 'assets/images/profile-image.jpeg';
import Metrics from 'constants/Metrics';
import GoogleDriveService from 'services/GoogleDriveService';
import IMPORTANT_VARS from 'constants/ImportantVars';
import GLOBAL_STYLES from 'constants/GlobalStyles';
import ScreenWrapper from 'components/general/ScreenWrapper';
import CustomText from 'components/general/CustomText';
import ClickableRow from 'components/general/ClickableRow';
import COLORS from 'constants/Colors';

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: Metrics.screenWidth / 3,
    height: Metrics.screenWidth / 1.5,
    width: Metrics.screenWidth / 1.5,
  },
  jobTitle: {
    color: COLORS.secondary,
    marginTop: -12,
    ...GLOBAL_STYLES.font600,
  },
  name: {
    fontSize: 24,
    ...GLOBAL_STYLES.font600,
  },
});

WebBrowser.maybeCompleteAuthSession();

function ProfileScreen() {
  const [, fullResult, promptAsync] = Google.useAuthRequest({
    expoClientId: IMPORTANT_VARS.GOOGLE_EXPO_CLIENT_ID,
    androidClientId: IMPORTANT_VARS.GOOGLE_ANDROID_CLIENT_ID,
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.appfolder',
    ],
  });

  const [isTakingBackupLoading, setIsTakingBackupLoading] = useState(false);
  const [isClickedOnTakeBackup, setisClickedOnTakeBackup] = useState(false);
  const onTakeBackup = () => {
    setisClickedOnTakeBackup(true);
    promptAsync();
  };

  const [isLoadBackupLoading, setIsLoadBackupLoading] = useState(false);
  const [isClickedOnLoadBackup, setisClickedOnLoadBackup] = useState(false);
  const onLoadBackup = () => {
    setisClickedOnLoadBackup(true);
    promptAsync();
  };

  useEffect(() => {
    if (!fullResult) return;

    if (fullResult.type === 'success' && isClickedOnTakeBackup) {
      setIsTakingBackupLoading(true);
      GoogleDriveService.uploadDbToGoogleDrive(fullResult.authentication.accessToken)
        .finally(() => {
          setIsTakingBackupLoading(false);
          setisClickedOnTakeBackup(false);
        });
    }

    if (fullResult.type === 'success' && isClickedOnLoadBackup) {
      setIsLoadBackupLoading(true);
      GoogleDriveService.getDbFromGoogleDrive(fullResult.authentication.accessToken)
        .finally(() => {
          setIsLoadBackupLoading(false);
          setisClickedOnLoadBackup(false);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullResult]);

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.centering}>
          <Image style={styles.imageStyle} source={MyPhoto} />
          <CustomText style={styles.name}>Hossam Sherif</CustomText>
          <CustomText style={styles.jobTitle}>Frontend Developer</CustomText>
        </View>

        <View>
          <ClickableRow
            text="Take a backup"
            isLoading={isTakingBackupLoading}
            onPress={onTakeBackup}
          />

          <ClickableRow
            text="Load a backup"
            isLoading={isLoadBackupLoading}
            onPress={onLoadBackup}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default ProfileScreen;
